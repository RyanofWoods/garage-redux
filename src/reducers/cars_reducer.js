import { FETCH_CARS } from '../actions/index';

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default carsReducer;
