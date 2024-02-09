import { counter } from "./app/app";
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(input.value);
  const newValue = counter(input.value);
  console.log(newValue);
  input.value = `${newValue}`;
});
