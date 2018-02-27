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
        <br/>
        <Link to="/tasks" className="btn btn-info">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Task
        </button>
        <div className="container">
          <br />
          <h3>{task.name}</h3>
          <h4>{task.description}</h4>
          <h4>Date: {task.date_formatted}</h4>
          <h4>Task Type: {task.type.name}</h4>
          {task.notes ?
            <div>
              <h4>Notes:</h4>
              <h5>{task.notes}</h5>
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) { // ownProps looks at a component's own properties that have been passed to it from some other component
  return { task: tasks[ownProps.match.params.id] }; // Here, tasks is the value from the RootReducer/application state
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);
