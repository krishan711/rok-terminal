import React from 'react';
import { XTerm } from './xterm';
import os from 'os';
import pty from 'node-pty';

export const App = (): React.ReactElement => {
  const ptyRef = React.useRef<pty.IPty | null>(null);
  const termRef = React.useRef<XTerm | null>(null);
  const [rowCount, setRowCount] = React.useState<number>(10);
  const [columnCount, setColumnCount] = React.useState<number>(10);

  const onData = (data: string): void => {
    if (data === '\r' || data === '\n') {
      // run command
      termRef.current?.write('\r\n');
      ptyRef.current?.write(data);
    } else {
      console.log('data', data, encodeURIComponent(data), data === "\u0007");
      termRef.current?.write(data);
      ptyRef.current?.write(data);
    }
  }

  React.useEffect((): void => {
    const ptyProc = pty.spawn(os.platform() === 'win32' ? 'powershell.exe' : process.env.SHELL || '/bin/bash', [], {
      cols: columnCount,
      rows: rowCount
    });
    ptyRef.current = ptyProc;
  }, []);

  return (
    <XTerm
      backgroundColor={'black'}
      bell={'hello'}
      bellSound={null}
      bellSoundURL={null}
      borderColor={'blue'}
      cleared={true}
      colors={{black: '#000000', red: '#ff0000', green: '#33ff00', yellow: '#ffff00', blue: '#0066ff', magenta: '#cc00ff', cyan: '#00ffff', white: '#d0d0d0', lightBlack: '#808080', lightRed: '#ff0000', lightGreen: '#33ff00', lightYellow: '#ffff00', lightBlue: '#0066ff', lightMagenta: '#cc00ff', lightCyan: '#00ffff', lightWhite: '#ffffff'}}
      rows={rowCount}
      cols={columnCount}
      onResize={(cols: number, rows: number): void => {setRowCount(rows); setColumnCount(cols);}}
      copyOnSelect={false}
      cursorAccentColor={'green'}
      cursorBlink={true}
      cursorColor={'yellow'}
      cursorShape={'BEAM'}
      disableLigatures={false}
      fontFamily={'Arial'}
      fontSize={12}
      fontSmoothing={''}
      fontWeight={'normal'}
      fontWeightBold={'bold'}
      foregroundColor={'orange'}
      isTermActive={true}
      letterSpacing={0}
      lineHeight={1}
      macOptionSelectionMode={'vertical'}
      modifierKeys={{altIsMeta: true, cmdIsMeta: true}}
      onActive={(): void => {console.log('onactive')}}
      onContextMenu={(selection: any): void => {console.log('onContextMenu', selection)}}
      onCursorMove={undefined}
      onData={onData}
      onTitle={(title: string): void => {document.title = title}}
      quickEdit={true}
      scrollback={100}
      search={false}
      selectionColor={'purple'}
      term={null}
      toggleSearch={(): void => {}}
      uid={'123'}
      uiFontFamily={'Arial'}
      url={null}
      webGLRenderer={true}
      webLinksActivationKey={'abc'}
      ref_={(uid: string, term: XTerm | null): void => {termRef.current = term}}
    />
  );
}
