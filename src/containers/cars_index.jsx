/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCar = ({ id, brand, model, owner, plate }) => {
    return (
      <div className="card flex-column my-3">
        <img className="card-img-top" alt={`A ${brand} ${model} car.`} src="..." />
        <div className="card-body">
          <h5 className="card-title">{`${brand} - ${model}`}</h5>
          <p className="card-text">{`Owner: ${owner}`}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <ul>
        {
          this.props.cars.map(this.renderCar)
        }
      </ul>
    );
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
