import React from 'react';
import './ScrollUpButton.css';


export default class ScrollUpButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.onScrollToUp = this.onScrollToUp.bind(this);
        // this.onScroll = this.onScroll.bind(this);
    }
    
    // onScroll(){
        
    // }

    onScrollToUp(){
        if(window.pageYOffset>10){
            window.scrollTo(0, 0);
        }
    }

    render() {
         let classNames = "upbtn";
        if(window.pageYOffset>10){
            classNames += " upbtnShow";
        }
        return (
            <div
            className={classNames}
            onClick={this.onScrollToUp}
            // onChange={this.onScroll}
            >
            </div>
        )
    }

}
