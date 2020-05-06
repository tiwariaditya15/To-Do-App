import React, {Component} from 'react';
import cancel from './delete.webp';
import edit from './edit.png';
class PrintTask extends Component{
    
    render(){
        const tasks = this.props.tasks;
        const printTasks = tasks.map(ele => {
            return (
                <div className = "Print-Tasks">
                        {ele.task}
                        <img src = {cancel} onClick = {() => {this.props.deleteTask(ele.id)}}/> 
                        <img src = {edit} onClick = {() => {this.props.editTask(ele.task)}}/>   
                </div>
            );
        });
        return(
            <div className = "PrintTask">
                    {printTasks}
            </div>
        );
    }
}
export default PrintTask;