import { FETCH_CARS, CREATE_CAR } from '../actions/index';

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case CREATE_CAR:
      return action.payload;
    default:
      return state;
  }
};

export default carsReducer;
