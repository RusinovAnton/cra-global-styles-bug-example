import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';

import ReactTable from 'react-table';

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    },
  },
  {
    name: 'John Doe',
    age: 26,
    friend: {
      name: 'Ralph',
      age: 23,
    },
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
  },
  {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name, // Custom value accessors!
  },
  {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age',
  },
];

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        React-table global styles problem:
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export { App as AppUnwrapped };
export default hot(module)(App);
