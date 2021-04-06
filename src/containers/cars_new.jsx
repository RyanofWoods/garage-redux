/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions/index';

class CarsNew extends Component {
  onSubmit = (values) => {
      this.props.createCar(this.props.garage, values, (car) => {
      debugger
      this.props.history.push('/');
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type}{...field.input} />
      </div>
    );
  }

  render() { // brand model owner plate
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Brand" name="brand" type="text" component={this.renderField} />
        <Field label="Model" name="model" type="text" component={this.renderField} />
        <Field label="Owner" name="owner" type="text" component={this.renderField} />
        <Field label="Plate" name="plate" type="text" component={this.renderField} />
        <button className="btn btn-primary" type="sumbit" disabled={ pristine || submitting}>Add car</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newPostForm' })(connect(mapStateToProps, { createCar })(CarsNew)) // connect(mapStateToProps, mapDispatchToProps)(CarsNew);
