import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';

class TasksNew extends Component {

  renderField(field){
    //destructuring to pull off meta from field object
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <input
          placeholder={field.label}
          className="form-control"
          type="text"
          {...field.input}   // autogenerates the event handlers on field
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }
  // touched state occurs when the field has been focused on and then tabbed away

  onSubmit(values) {    
    this.props.createTask(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // handleSubmit is a function from redux-form
    const { handleSubmit } = this.props;

    return (
      // onSubmit is our unique event handler
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

// validations for input fields
function validate(values){
  const errors = {};
  // Validate inputs from 'values'
  if (!values.name) {
    errors.name = "Enter a name!";
  }
  if (!values.description) {
    errors.description = "Enter a description!";
  }
  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'TasksNewForm'
})(
  connect(null,{ createTask })(TasksNew)
);
