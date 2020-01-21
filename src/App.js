import React from 'react';
import Button from "./components/Button"
import { Title, Titlesmall } from "./styles";


const App = () => {
  return (
    <div className="App">
      <Title fontSize={20}>
        Hello Word
        <span > texto menor</span>
      </Title>

      <Titlesmall>Menor</Titlesmall>

      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="error">Error</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>

    <hr/>
      <div>
        <Button type="primary" size="sm">Primary</Button>
        <Button type="primary" size="md">Primary</Button>
        <Button type="primary" size="lg" round>Primary</Button>
      </div>

    </div>
  );
}

export default App;
