/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { createCar } from '../actions/index';
import Aside from '../components/aside';

const required = value => (value ? undefined : 'Required');
const license = value => (value && /^[A-Z0-9]{3,8}$/.test(value.replace(/\s/g, '')) ? undefined : 'Invalid license plate. Must be only numbers or capital letters and no more than 8');

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (promise) => {
      this.props.history.push('/');
      return promise;
    });
  }

  renderField({ input, label, type, meta: { touched, error, active } }) {
    let feedback = null;
    let inputClasses = "form-control";

    if ((touched || active) && error) {
      feedback = (<div className="invalid-feedback d-block">{error}</div>);
      inputClasses += " is-invalid";
    } else if ((touched || active) && !error) {
      feedback = (<div className="valid-feedback d-block">Looks good!</div>);
      inputClasses += " is-valid";
    }

    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} className={inputClasses} type={type} />
        {feedback}
      </div>
    );
  }

  renderForm = () => {
    const { handleSubmit, invalid, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="needs-validation w-100 m-3" noValidate>
        <Field label="Brand" name="brand" type="text" component={this.renderField} validate={[required]} />
        <Field label="Model" name="model" type="text" component={this.renderField} validate={[required]} />
        <Field label="Owner" name="owner" type="text" component={this.renderField} validate={[required]} />
        <Field label="Plate" name="plate" type="text" component={this.renderField} validate={[required, license]} />
        <button className="btn btn-primary" type="submit" disabled={invalid || submitting}>Add car</button>
      </form>
    );
  }

  renderAside = () => {
    return (
      <Aside key="aside" garage={this.props.garage}>
        <Link className="btn btn-primary" to="/">Back to list</Link>
      </Aside>
    );
  }

  render() {
    return [
      this.renderAside(),
      this.renderForm()
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newPostForm' })(connect(mapStateToProps, { createCar })(CarsNew));
