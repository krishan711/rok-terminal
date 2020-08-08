import {verbose} from 'sqlite3';

class CommandsDB {
    db: any
    constructor(){
        const sqlite3Verbose = verbose()
        this.db = new sqlite3Verbose.Database('commands.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to commands database.');
        });
    }
    create(){
        this.db.run(`CREATE TABLE commands (
            id PRIMARY KEY,
            location TEXT,
            command TEXT,
            count INTEGER DEFAULT 1,
            last_updated INTEGER DEFAULT 0,
            UNIQUE(location, command)
        );`);
    }
    clear(){
        this.db.run("DROP TABLE commands");
    }
    close(){
        this.db.close();
    }
    update(location: string, command: string){
        this.db.run(`
            INSERT INTO commands(location, command) VALUES (?1, ?2)
            ON CONFLICT(location, command)
            DO UPDATE SET count = count + 1 WHERE location = ?1 AND command = ?2;`,
            [location, command]
        );
        this.db.run(`
            UPDATE commands
            SET last_updated =(
                SELECT max(last_updated)+1 FROM commands WHERE location = ?1
            ) WHERE location = ?1 AND command = ?2
        `);
    }
    most_frequest_commands(location: string, n: number=10){
        let commands: any = []
        this.db.all(`SELECT command, count FROM commands WHERE location = ?1 ORDER BY count DESC LIMIT ?2`, [location, n], (err, rows) => {console.log(rows); commands.concat(rows);});
        return commands;
    }
    most_recent_commands(location: string, n: number=10){
        let commands: any = []
        this.db.all(`SELECT command FROM commands WHERE location = ?1 ORDER BY last_updated DESC LIMIT ?2`, [location, n], (err, rows)=> {console.log(rows); commands.concat(rows);});
        return commands;
    }
}


let db = new CommandsDB()
// db.clear();
// db.create();
db.update("/", "ls");
db.update("/", "ls");
db.update("/", "ls");
db.update("/", "cmd");
db.update("/", "top");
db.update("/", "ls");
db.update("/home", "ls");
db.update("/home", "ls");
db.update("/home", "cd");
console.log(db.most_frequest_commands("/home"))
console.log(db.most_frequest_commands("/"))
console.log(db.most_recent_commands("/"))
db.close()
