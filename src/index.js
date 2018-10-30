import React from "react";
import ReactDOM from "react-dom";
import { StaticMessage } from "./StaticMessage";
import { Tiktok } from "./Tiktok";

import { breaker, flatten } from "./utils";
import "./styles.css";

class App extends React.Component {
  state = { words: [] };
  input = React.createRef();

  handleChange = e => {
    e.preventDefault();
    const words = flatten(
      breaker(this.input.current.value, 10)
        .split("\n")
        .map(word => word.split(""))
    );
    return this.setState({ words });
  };

  render() {
    const { words } = this.state;
    return (
      <div className="App">
        <StaticMessage />
        <div className="container">
          <input
            type="text"
            onChange={this.handleChange}
            ref={this.input}
            placeholder="type here"
            autoFocus={false}
          />
          {words.map((letter, index) => (
            <Tiktok key={index + letter} letter={letter} />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
