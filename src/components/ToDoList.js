import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    checkedPassword: true,
    checkedRecruit: true,
    checkedTech: true
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  handleCheckTech = event =>{
    this.setState({checkedTech: !this.state.checkedTech});
  }
  renderCheckboxTech = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedTech}
          onChange={this.handleCheckTech} />
        <span>Tech</span>
      </label>
      <br />
    </form>
    </div>
  );
  }


  handleCheckPassword = event =>{
    this.setState({checkedPassword: !this.state.checkedPassword});
  }
  renderCheckboxPassword = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedPassword}
          onChange={this.handleCheckPassword} />
        <span>Password</span>
      </label>
      <br />
    </form>
    </div>
  );
  }

  handleCheckRecruit = event =>{
    this.setState({checkedRecruit: !this.state.checkedRecruit});
  }
  renderCheckboxRecruit = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedRecruit}
          onChange={this.handleCheckRecruit} />
        <span>Campus Recruit</span>
      </label>
      <br />
    </form>
    </div>
  );
  }


  renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return(
      <div>
        <ToDoListItem key={key} todoId={key} todo={value}
          checkedTech={this.state.checkedTech}
          checkedRecruit={this.state.checkedRecruit}
          checkedPassword={this.state.checkedPassword}/>
      </div>
    );});
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <img
          alt="Nothing was found"
          id="nothing-was-found"
          src="/img/nothing.png"
        />
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchToDos();
  }

  render() {
    const { addFormVisible } = this.state;
    return (
      <div className="to-do-list-container">
        <div className="row">
          <p>Showing categories:</p>
          {this.renderCheckboxTech()}
          {this.renderCheckboxPassword()}
          {this.renderCheckboxRecruit()}
          {this.renderToDos()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ToDoList);
