import React from 'react';

class LifecycleClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Initialization');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state with props');
    return null; 
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted');

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Decide to update');
  
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture snapshot before update');
   
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component updated');
   
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmounting');
   
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    console.log('Render: UI rendering');
    return (
        <div className='Para'>
          <hr></hr>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleClassComp;
