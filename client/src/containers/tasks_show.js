import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, deleteTask } from '../actions';
import { Link } from 'react-router-dom';

class TasksShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if (!this.props.task) { // if the user is coming from the index page, we don't need to refetch the post because it already exists in state
      this.props.fetchTask(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params // action creater- deleteTask - needs id of task to send over
    this.props.deleteTask(id, () => { // callback function, called once deleteTask action completes, reroute to index page
      this.props.history.push('/');
    });
  }

  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Task
        </button>
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) { // Here, tasks is the value from the RootReducer/application state
  return { task: tasks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);
