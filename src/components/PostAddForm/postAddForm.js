import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './postAddForm.css';
export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }
    createNotification = (type) => {
        return () => {
          switch (type) {
            case "info":
              NotificationManager.info('Enter the task name');
              break;
              default:
                  break;
            };
            
    }};
    render() {
        const {onDeleteAllItems} = this.props;
        let test,
        value = this.state.text;
        if(value === ""){
            test = <button 
            type="submit"
            className="btn btn-outline-secondary"
            onClick={this.createNotification('info')}>
            Add task
        </button>
        } else {
            test = <button 
            type="submit"
            className="btn btn-outline-secondary"
            >
            Add task
        </button>
        }
        return (
            <div>
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Name task"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                {test}
                <button 
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onDeleteAllItems}>
                    Remove all
                </button>
            </form>
            <NotificationContainer/>
            </div>
        )
    }
}
