import React, { Component } from 'react';
import s from './Clock.module.css';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString(),
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    render() {
      return (
          <div className={s.clock}>
              <div className="clock-block">{this.state.time}</div>
          </div>
      );
    }
  }
  
  export default Clock;