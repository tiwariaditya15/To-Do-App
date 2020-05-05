import React, {Component} from 'react';


class AddTask extends Component{
    state = {
        task : null,
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
    }
    render(){
        return(
            <div className = "AddTask">
                    <form onSubmit = {this.handleSubmit}>
                    <input type = "text" id = "task" placeholder = "Enter Task" onChange = {this.handleChange}/>
                    <button>Add Task</button>
                    </form>
            </div>
        );
    }
}
export default AddTask;