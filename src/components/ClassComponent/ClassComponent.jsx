/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor called');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps called');
    console.log('nextProps, prevState', nextProps, prevState);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    console.log('nextProps, nextState', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate called');
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
    return 'Snapshot captured';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate called');
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
    console.log('Snapshot:', snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    console.log('rendered called');
    return (
      <div>
        <h2>
          Counter:
          {' '}
          {this.state.count}
        </h2>
        <button type="button" onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
