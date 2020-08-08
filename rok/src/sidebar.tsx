import React, { ChangeEvent } from 'react';
import { Input, Menu, Dropdown, Button } from 'antd'
import {
  CloseOutlined,
  CopyOutlined,
  UserOutlined,
} from '@ant-design/icons';


export interface ISideBarProps {
  onRecentCommandSelected: (command: string) => void,
  recentCommands: string[],
  setRecentCommands: (commands: string[]) => void
}


const SideBar = (props: ISideBarProps) => {
  const onRecentCommandSelected = (command: string): void => {
    props.onRecentCommandSelected(command);
  }

  const removeRecentCommand = (command: string) => {
    const filteredCommands = props.recentCommands.filter((recentCommand: string) => recentCommand !== command)
    props.setRecentCommands(filteredCommands);
  }

  const menu = (command: string) => (
    <Menu >
      <Menu.Item
        key="1"
        onClick={() => removeRecentCommand(command)}
        icon={<CloseOutlined />}
      >
        Remove item
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {navigator.clipboard.writeText(command)}}
        icon={<CopyOutlined />}
      >
        Copy to clipboard
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<UserOutlined />}
      >
        Edit text
      </Menu.Item>
    </Menu>
  );

  const onSearchInputChanged = (event: ChangeEvent): void => {
    const inputText = (event.target as any).value;
    const filteredCommands = props.recentCommands.filter((recentCommand: string) => recentCommand.startsWith(inputText));
    props.setRecentCommands(filteredCommands);
  }

  return (
    <>
      <br />
      <Input placeholder="Search ..." allowClear onChange={onSearchInputChanged} />
      {props.recentCommands.map((command: string, index: number) => (
        <div
          style={{ width: '100px' }}
        >
          <br />
          <Dropdown.Button
            style={{ width: '100%' }}
            overlay={() => menu(command)}
            onClick={() => onRecentCommandSelected(command)}
          >
            {(command.length > 20) ?command.substring(0, 19) + '...' : command}
          </Dropdown.Button>
        </div>
      ))}
    </>
  );
}

export default SideBar;
