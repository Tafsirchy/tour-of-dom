// 1. parent node 

const mainContainer = document.getElementById('main-container');

// 2. create a child node

const placesSection = document.createElement('section')

// create h1 element

const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit';

placesSection.appendChild(h1);

// create ul element

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'dhaka';
ul.appendChild(li1);

placesSection.appendChild(ul);

const li2 = document.createElement('li');
li2.innerText = 'chittagong';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'cox bazar';
ul.appendChild(li3);

// 3. append child node to parent node

mainContainer.appendChild(placesSection);

// easier way to create and append child node / HTML elements

const booksSection = document.createElement('section');
booksSection.innerHTML =`
<h1>books i want to read</h1>
<ul>
    <li>C</li>
    <li>C++</li>
    <li>JAVASCRIPT</li>
</ul>
`
mainContainer.appendChild(booksSection);