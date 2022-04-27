import React from "react";
import styled from "styled-components";
import { Toggle } from "../src/Components/Toggle";
import { Tab } from "../src/Components/Tab";
import { Slider } from "../src/Components/Slider";
import { Input } from "../src/Components/Input";
import { Dropdown } from "../src/Components/Dropdown";

function App() {
  return (
    <WholeContainer>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2000px; ;
`;
