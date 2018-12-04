import React, { Component } from "react";
import PropTypes from "prop-types";

import "./InputField.scss";

class InputField extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          id="inp"
          name={this.props.name}
          placeholder="&nbsp;"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <span className="label">{this.props.placeholder}</span>
        <span className="border" />
      </label>
    );
  }
}

export default InputField;
