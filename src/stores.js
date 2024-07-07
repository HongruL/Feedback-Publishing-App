import { writable } from "svelte/store";

const storedRatings = JSON.parse(localStorage.getItem('ratings')) || [];

export const ratings = writable(storedRatings);

ratings.subscribe(value => {
  localStorage.setItem('ratings', JSON.stringify(value));
});
