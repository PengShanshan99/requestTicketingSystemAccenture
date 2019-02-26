import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo, checkedPassword, checkedTech, checkedRecruit } = this.props;
    if(todo.category=="Technical Issue"){
      if(checkedTech==true){
        return (
          <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
            <h4 >{todo.title}</h4>
              <span
                onClick={() => this.handleCompleteClick(todoId)}
                className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
              >
                <i className="large material-icons">move to solved</i>
              </span>
            <h5 >{todo.category}</h5>
            <h6>{todo.content}</h6>
          </div>
        );
      }else{return null}
    }else if (todo.category=="Campus Recruitment") {
        if(checkedRecruit==true){
          return (
            <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
              <h4 >{todo.title}</h4>
                <span
                  onClick={() => this.handleCompleteClick(todoId)}
                  className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
                >
                  <i className="large material-icons">move to solved</i>
                </span>
              <h5 >{todo.category}</h5>
              <h6>{todo.content}</h6>
            </div>
          );
        }else{return null}
      }else if (todo.category=="Password Issue") {
        if(checkedPassword==true){
          return (
            <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
              <h4 >{todo.title}</h4>
                <span
                  onClick={() => this.handleCompleteClick(todoId)}
                  className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
                >
                  <i className="large material-icons">move to solved</i>
                </span>
              <h5 >{todo.category}</h5>
              <h6>{todo.content}</h6>
            </div>
          );
        }else{return null}
      }else{
        return (
          <div>
            <p>This should not happen. This means the request has an invalid category.</p>
          </div>
        )
      }
    }
  }


export default connect(null, { completeToDo })(ToDoListItem);
