import React from 'react';
import './Theme.css';

let classNames = "";
export default class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked: false
        }
    }
    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked });
        let vnt = this.state.checked;

        if (!vnt) {
            classNames = "dark";
            document.body.style.backgroundColor = "#282c34";
            document.body.style.color = "white";
            document.getElementById('AppHeader').style.color = 'white';
            document.getElementById('titleToDoList').style.color = "#17a2b8";
            let elements = document.getElementsByClassName('changeBGC');
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = '#6c757d';
                console.log(typeof(document.getElementsByClassName('changeBGC')));
            }
            let stars = document.getElementsByClassName('starColorImportant');
            for (let i = 0; i < stars.length; i++) {
                console.log(stars.length);
                console.log(stars[i]);
                stars[i].style.color = '#17a2b8';
            }
        } else {
            classNames = "light";
            document.body.style.backgroundColor = "";
            document.body.style.color = "black";
            document.getElementById('AppHeader').style.color = 'black';
            document.getElementById('titleToDoList').style.color = "brown";
            let elements = document.getElementsByClassName('changeBGC');
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'white';
            }
            let stars = document.getElementsByClassName('starColorImportant');
            for (let i = 0; i < stars.length; i++) {
                console.log(stars.length);
                console.log(stars[i]);
                stars[i].style.color = '#FFD700';
            }

        }
    }
    render() {
        return (
            <div className={classNames}>
                <div className="pretty p-switch p-fill">
                    <input type="checkbox"
                        value="false"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <div className="state p-info">
                        <label>Theme</label>
                    </div>
                </div>
            </div>
        )
    }
}
