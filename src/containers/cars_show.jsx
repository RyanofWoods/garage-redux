/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';
import { Link } from 'react-router-dom';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentDidMount() {
    if (!this.props.cars) {
      this.props.fetchCars(this.props.garage);
    }
  }

  renderCar = ({ brand, model, owner, plate }) => {
    return (
      <div className="card card-car flex-column">
        <div className="card-body">
          <h5 className="card-title">{`${brand} - ${model}`}</h5>
          <p className="card-text">{`Owner: ${owner}`}, {`Plate: ${plate}`}</p>
        </div>
      </div>
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
    if (this.props.car) {
      return [
        this.renderAside(),
        this.renderCar(this.props.car)
      ];
    }
    return [
      this.renderAside(),
      <div className="m-4">This car does not exist.</div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    garage: state.garage,
    car: state.cars.find(car => car.id === id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
