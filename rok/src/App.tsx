import React from 'react';
import { XTerm } from './xterm';

function App() {
  const termRef = React.useRef<XTerm | null>(null);
  const [rowCount, setRowCount] = React.useState<number>(10);
  const [columnCount, setColumnCount] = React.useState<number>(10);
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
      cursorShape={'BLOCK'}
      disableLigatures={false}
      fitAddon={null}
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
      onActive={(): void => {}}
      onContextMenu={(selection: any): void => {}}
      onCursorMove={undefined}
      onData={(data: string): void => {termRef.current?.write(data)}}
      onTitle={(title: string): void => {document.title = title}}
      quickEdit={true}
      scrollback={100}
      search={false}
      // searchAddon={null}
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

export default App;
