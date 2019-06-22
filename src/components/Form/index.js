import React from "react";
import { Component } from "react";
import "./Form.scss";
import { connect } from "react-redux";
import { search } from '../../store/actions';
 
class Form extends Component {
  state = {
    input: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  };

  render = () => {
    return (
      <div className="form-container">
        <input
          className="input"
          value={this.state.input}
          onChange={event => this.handleInputChange(event)}
        />
        <div
          className="button"
          onClick={() => this.props.dispatch(search(this.state.input))}
        >
          Search
        </div>
      </div>
    );
  };
}

export default connect()(Form);
