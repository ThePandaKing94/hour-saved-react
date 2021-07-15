import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writeHours: 0,
      description: "",
      result: [],
      output: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetText = this.resetText.bind(this);
  }

  handleInputChange(event) {
    const { name, type, value } = event.target;

    type === "number"
      ? this.setState({
          [name]: parseInt(value),
        })
      : this.setState({
          [name]: value,
        });
  }

  resetText() {
    this.setState({
      output: "",
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { writeHours, description, result } = this.state;
    let output;
    let sum;

    console.log(typeof writeHours, sum);

    if (typeof writeHours !== "number") {
      output =
        "Vær så snill å legg til en ordentlig timetall. Det må være ett helt tall.";
    } else if (writeHours > 1000) {
      output = "Du har nå nådd en sum over 1000 timer.";
    } else {
      if (sum > 1000) {
        output = "Du har nå nådd en sum over 1000 timer.";
      }

      sum += writeHours;
    }

    this.setState((prevState) => {
      return {
        output,
        result: prevState.result.concat({
          hour: writeHours,
          desc: description,
        }),
        writeHours: 0,
        description: "",
      };
    });
  }

  render() {
    const { output, result, writeHours, description } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="number"
            placeholder="Skriv antall timer"
            value={writeHours}
            name="writeHours"
            id="writeHours"
            onChange={this.handleInputChange}
          />
          <textarea
            type="text"
            placeholder="Skriv forklaring"
            name="description"
            value={description}
            id="description"
            onChange={this.handleInputChange}
          />
          <button id="btnSubmit" type="submit">
            Registrer
          </button>
          <span id="output">{output}</span>
          <ul>
            {result.map((value, index) => (
              <li key={index}>
                <div>
                  <p>
                    {value.hour}:{value.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button id="btnReset" type="reset" onClick={this.resetText}>
            Fjern timer
          </button>
        </form>
      </div>
    );
  }
}

export default App;
