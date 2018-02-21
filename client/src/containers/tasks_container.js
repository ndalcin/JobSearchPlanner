import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import TaskItem from '../components/task_item';

class TasksContainer extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return _.map(this.props.tasks, task => {
      return (
        <TaskItem
          key={task.id}
          task={task}
        />
      );
    });
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div>
        <h3>Tasks</h3>
        <ol className="list-group">
          {this.renderTasks()}
        </ol>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list
  };
}

export default connect(mapStateToProps, { fetchTasks })(TasksContainer);
