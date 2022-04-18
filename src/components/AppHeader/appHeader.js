import React from 'react';
import './appHeader.css';
import Theme from '../Theme/Theme.jsx';
const AppHeader = ({ done, allPosts }) => {
    let Title;
    if ((allPosts === 1) || (allPosts === 0)) {
        Title = <h2>{allPosts} task, of which {done} is completed </h2>
    } else {
        Title = <h2>{allPosts} tasks, of them {done} is completed </h2>
    }
    return (
        <div className="app-header d-flex">
            <h1 id='titleToDoList'>To Do List</h1>
            <Theme/>
            {Title}
        </div>
    )
}
export default AppHeader;
