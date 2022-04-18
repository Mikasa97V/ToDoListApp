import React, { Component } from 'react';
import './postListItem.css';


export default class PostListItem extends Component {

    
    render() {
        const { label, onDelete, onToggleImportant, onToggleDone, important, done} = this.props;
        let classNames = "app-list-item d-flex justify-content-between",
            classNameOfStar = "fa fa-star starColorImportant";

        if (important) {
            classNameOfStar = "fa fa-star";
            classNames += ' important';
        }
        if (done) {
            classNames += ' done';
        }
        return (
            <div className={classNames}>
                <span 
                onClick={() => {
                    onToggleDone()
                }}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                <div className="pretty p-default p-curve p-thick">
                        <input type="checkbox" />
                        <div className="state p-info">
                        <label></label>
                        </div>
                    </div>
                    <button type="button" 
                        className="btn-star btn-sm knopka"
                        onClick={onToggleImportant}>
                        <i className={classNameOfStar}></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    
                </div>
            </div>

        )
    }
}
// className="btn-trash btn-sm"
// className="fa fa-trash-o"