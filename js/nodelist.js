// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// create 
// document.createElement('p')

// create element and set innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'new born footballer';

// find the parent where will add the child

const playersList = document.getElementById('player-list');

// append the child to the parent

playersList.appendChild(newChild);