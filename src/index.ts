// DEMO JOKE APP
//import generateJoke from './generateJoke'
import "./styles/main.scss";
const logo = require("./assets/laughing.svg") as string;

const laughImg = document.getElementById('laughImg')! as HTMLImageElement
laughImg.src = logo

console.log("Hello from Index.ts!");

// const jokeBtn = document.getElementById('jokeBtn')!
// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()
