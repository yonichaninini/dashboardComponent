import React from "react";
import "./App.css";
import Board from "./component/Board";
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
      <Board id="b_1" className="myBoard" title="BOARD">
        <Content id="c_1" className="myContent">
          <h3>Content1</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
        <Content id="c_2" className="myContent">
          <h3>Content2</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
        <Content id="c_3" className="myContent">
          <h3>Content3</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
      </Board>

      <Board id="b_2" className="myBoard">
        <Content id="c_4" className="myContent">
          <h3>Content4</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
        <Content id="c_5" className="myContent">
          <h3>Content5</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
        <Content id="c_6" className="myContent">
          <h3>Content6</h3>
          <p>Hi, my name is chan mi</p>
        </Content>
      </Board>
    </div>
  );
}

export default App;
