// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// create 
// document.createElement('p')

// 1. create element and set innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'new born footballer';

// 2. find the parent where will add the child

const playersList = document.getElementById('player-list');

// 3. append the child to the parent

playersList.appendChild(newChild);