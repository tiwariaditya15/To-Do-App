import React, {Component} from 'react';
import PrintTask from './PrintTask';


class AddTask extends Component{
    state = {
        task : '',
        id:null
    }
    
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            id: Math.floor(Math.random() * Math.floor(15))
        });
       
     }

    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            task : '',
            id: null
        });
        
    }
    render(){
        return(
            <div className = "AddTask">
                    <form onSubmit = {this.handleSubmit}>
                    <input type = "text" id = "task" placeholder = "Enter Task" value = {this.state.task} onChange = {this.handleChange}/>
                    <button>Add Task</button>
                    <span id = "msg"></span>
                    </form>
            </div>
        );
    }
}
export default AddTask;