import Header from "./MyComponents/Header";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Load Todos from Local Storage
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // State
  const [todos, setTodos] = useState(initTodo);

  // Save Todos to Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (title, desc) => {
    let SNo;

    if (todos.length === 0) {
      SNo = 1;
    } else {
      SNo = todos[todos.length - 1].SNo + 1;
    }

    const myTodo = {
      SNo: SNo,
      title: title,
      desc: desc,
      status: "Pending",
    };

    setTodos([...todos, myTodo]);
  };

  // Delete Todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Update Todo
  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.SNo === updatedTodo.SNo ? updatedTodo : todo
      )
    );
  };

  // Change Status
  const changeStatus = (todo, status) => {
    setTodos(
      todos.map((item) =>
        item.SNo === todo.SNo
          ? { ...item, status: status }
          : item
      )
    );
  };

  return (
    <>
      <Router>
        <Header title="TaskPulse" searchBar={false} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />

                  <Todos
                    todos={todos}
                    onDelete={onDelete}
                    updateTodo={updateTodo}
                    changeStatus={changeStatus}
                  />
                </>
              );
            }}
          />

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
        {/* Header background color */}
        
      </Router>
    </>
  );
}

export default App;