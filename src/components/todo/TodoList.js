import React from "react";
import { Link } from "react-router-dom";

import "./TodoList.scss";

const TodoListComponent = () => {
  const css_prefix = "todolist__";
  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}headingdiv`}>
        <h3 className={`${css_prefix}heading`}>TodoList</h3>
      </div>
      <Link className={`${css_prefix}link4`} to="/home">
        Go Home
      </Link>
    </div>
  );
};

export const TodoList = TodoListComponent;
