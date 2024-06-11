
/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'clown', 'alien', 'robot', 'heart', 'green_heart', 'boom', 'bomb', 'nails', 'brain', 'eyes', 'policeman', 'bed'];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
};



const compare = () => {
  
};

const render = () => {
  //resultDisplayEl.
}


const play = (event) => {
  getPlayerChoice(event);
  compare();
  render();
}

const mixing = () => {

}

const flipping = () => {

}
/*----------------------------- Event Listeners -----------------------------*/



