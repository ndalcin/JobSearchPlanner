import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import TaskItem from '../components/task_item';

class TasksContainer extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        Tasks Container
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { fetchTasks })(TasksContainer);
