import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';


class TasksNew extends Component {


  renderTextField(field){
    //destructuring to pull off meta from field object
    const { input, label, meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <input
          placeholder={label}
          className="form-control"
          type="text"
          {...input}   // autogenerates the event handlers on field
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }
  renderTextAreaField(field){
    return (
      <div className="form-group">
        <textarea
          placeholder={field.label}
          className="form-control"
          type="textarea"
          rows="5"
          {...field.input}   // autogenerates the event handlers on field
        />
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
    // {onSubmit is our unique event handler}
    return (
      <div className="container">
        <div className="row">
          <br />
          <h3>Add a new task</h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Name"
              name="name"
              component={this.renderTextField}
            />
            <Field
              label="Description"
              name="description"
              component={this.renderTextField}
            />
            <Field
              label="Optional Notes"
              name="notes"
              component={this.renderTextAreaField}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
        </div>
      </div>
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
