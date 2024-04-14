import { loader } from './refs.js';
export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hiddeLoader() {
  loader.classList.add('is-hidden');
}
