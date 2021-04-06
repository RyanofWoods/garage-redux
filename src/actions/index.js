const BASE_URL = 'https://wagon-garage-api.herokuapp.com';
export const FETCH_CARS = 'FETCH_CARS';
const CREATE_CAR = 'CREATE_CAR';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: CREATE_CAR,
    payload: promise
  };
}
