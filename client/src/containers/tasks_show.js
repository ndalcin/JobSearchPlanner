import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, deleteTask } from '../actions';
import TaskItemShow from '../components/task_item_show';

class TasksShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if (!this.props.task) { // if the user is coming from the index page, we don't need to refetch the post because it already exists in state
      this.props.fetchTask(id);
    }
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params // action creater- deleteTask - needs id of task to send over
    this.props.deleteTask(id, () => { // callback function, called once deleteTask action completes, reroute to index page
      this.props.history.push('/tasks');
    });
  }

  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <TaskItemShow onClick={this.onDeleteClick} key={task.id} task={task} />
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) { // ownProps looks at a component's own properties that have been passed to it from some other component
  return { task: tasks[ownProps.match.params.id] }; // Here, tasks is the value from the RootReducer/application state
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);
