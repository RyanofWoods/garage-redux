/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  renderCar = ({ id, brand, model, owner, plate }) => {
    return (
      <div className="card flex-column my-3">
        <img className="card-img-top" alt={`A ${brand} ${model} car.`} src="..." />
        <div className="card-body">
          <h5 className="card-title">{`${brand}$ - {model}`}</h5>
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
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
