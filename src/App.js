import React, {Component} from 'react';
import AddTask from './AddTask.js';
import PrintTask from './PrintTask.js';
import './App.css';

class App extends Component{
  state = {
    tasks : []
  }

  addTask = (task) =>{
    //console.log(task);
    let tasks = {...task};
    this.setState({
      tasks:[...this.state.tasks, tasks]
    });
  }

  deleteTask = (id) => {
    //console.log(id);
    let newTaskList = this.state.tasks.filter(task => {
      return task.id != id;
    });

    this.setState({
      tasks: newTaskList
    });
  }

  editTask = (editText) => {
    console.log(editText);
  }
      render(){
        return (
          <div className="App">
          <AddTask addTask={this.addTask}/>
          <hr/>
          <PrintTask tasks = {this.state.tasks} deleteTask = {this.deleteTask} editTask = {this.editTask}/>
          </div>
        );
      }
}

export default App;
