/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCar = ({ id, brand, model, owner }) => {
    return (
      <div className="card card-car flex-column">
        <Link to={`/cars/${id}`} key={id} className="text-dec-none" >
          <div className="card-body">
            <h5 className="card-title">{`${brand} - ${model}`}</h5>
            <p className="card-text">{`Owner: ${owner}`}</p>
          </div>
        </Link>
      </div>
    );
  }

  renderAside = () => {
    return (
      <Aside key="aside" garage={this.props.garage}>
        <Link className="btn btn-primary" to="/cars/new">Add a car</Link>
      </Aside>
    );
  }

  render() {
    return [
      this.renderAside(),
      <div className="flex w-100">
        {this.props.cars.map(this.renderCar)}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
