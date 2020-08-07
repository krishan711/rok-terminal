import React from 'react';
import { List, Button } from 'antd';


const LIST_OF_COMMANDS = [
  'moo',
  'baa',
  'oink',
  'moo baa oink this is a really long command i type all day every day',
];

function SideBar() {
  const onButtonClick = (buttonText: string): void => {
    console.log(buttonText)
  }

  return (
    <div>
      <List
        bordered
        dataSource={LIST_OF_COMMANDS}
        renderItem={(item: string) => (
          <List.Item>
            <Button
              onClick={() => onButtonClick(item)}
              type="primary"
            >
              {item}
            </Button>
          </List.Item>
        )}
      />
    </div>
  )
}

export default SideBar;
