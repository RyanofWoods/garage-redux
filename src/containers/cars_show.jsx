/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    if (this.props.cars === []) {
      this.props.fetchCars(this.props.garage);
    }
  }

  renderCar = ({ id, brand, model, owner, plate }) => {
    return (
      <div className="card flex-column my-3">
        <img className="card-img-top" alt={`A ${brand} ${model} car.`} />
        <div className="card-body">
          <h5 className="card-title">{`${brand} - ${model}`}</h5>
          <p className="card-text">{`Owner: ${owner}`}</p>
          <p className="card-text">{`Plate: ${plate}`}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.renderCar(this.props.car)
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(car => car.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
