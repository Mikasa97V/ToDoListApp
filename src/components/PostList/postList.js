import React from 'react';
import PostListItem from '../PostListItem/postListItem';
import './postList.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleDone}) => {
    console.log(posts);

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (<div>
            <li key={id} className="list-group-item changeBGC" > 
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                    /> 
            </li>
            </div>
        )
    });
    return (
        <>
        <ul className="app-list list-group">
            {elements}
        </ul>
        
        </>
    )
}
export default PostList;