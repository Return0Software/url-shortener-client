import React, { Component } from "react";
import logo from "./tristan.png";
import "./App.scss";
import InputField from "./components/InputField";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      title: "",
      hash: ""
    };
  }

  callApi = async () => {
    const { url, title } = this.state;
    const response = await fetch("/s", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url, title })
    });

    if (response.status === 410) alert(`${title} already in use`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body);
    return body;
  };

  callApiWrapper = () => {
    this.callApi()
      .then(body => {
        this.setState({
          hash: body.title
        });
      })
      .catch(err => console.log(err));
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputField
            onChange={this.onInputChange}
            value={this.state.title}
            placeholder={"Title"}
            name={"title"}
          />
          <InputField
            onChange={this.onInputChange}
            value={this.state.url}
            placeholder={"URL"}
            name={"url"}
          />
          <Button onClick={this.callApiWrapper} hash={this.state.hash} />
        </header>
      </div>
    );
  }
}

export default App;
