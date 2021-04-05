const BASE_URL = 'https://wagon-garage-api.herokuapp.com';
export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
