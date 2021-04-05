const BASE_URL = 'https://wagon-garage-api.herokuapp.com';
export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, brand, model, owner, plate) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ brand, model, owner, plate })
  })
    .then(response => response.json());

  return {
    type: CREATE_CAR,
    payload: promise
  };
}
