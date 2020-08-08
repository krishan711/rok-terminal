import React from 'react';
import { Menu } from 'antd'
import {
  OrderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const LIST_OF_COMMANDS = [
  'moo',
  'baa',
  'oink',
  'moo baa oink this is a really long command i type all day every day',
];

export interface ISideBarProps {
  onRecentCommandSelected: (command: string) => void,
}

const SideBar = (props: ISideBarProps) => {
  const onRecentCommandSelected = (command: string): void => {  // TODO(rikhil): figure out how to share this state
    props.onRecentCommandSelected(command);
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={['recent-commands']} mode="inline">
      <SubMenu
        key="recent-commands"
        icon={<OrderedListOutlined />}
        title="Recent commands"
      >
        {LIST_OF_COMMANDS.map((command: string, index: number) => (
          <Menu.Item
            key={index.toString()}
            onClick={() => onRecentCommandSelected(command)}
          >{command}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  )
}

export default SideBar;
