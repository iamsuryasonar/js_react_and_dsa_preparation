/* getElementById */

const person_name = document.getElementById('person_name')
console.log(person_name);

/* getElementByClassName */

const person_age = document.getElementsByClassName('class_age');
console.log(person_age);
console.log(person_age[0]);

/* getElementByTagName */

const person_info = document.getElementsByTagName('p')
console.log(person_info)
console.log(person_info[0])

/* querySelector */

const person_sex = document.querySelector('.sex');
console.log(person_sex)

//another example
const thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn);

/* querySelectorAll */
const allBtns = document.querySelectorAll('button')
console.log(allBtns);

/* innerHTML */
const topicElement = document.querySelector('#topic')
console.log(topicElement.innerHTML);

/* update innerHTML */
topicElement.innerHTML = 'Javascript array methods'
/* 
this could be html too not just string
topicElement.innerHTML = "<b>JavaScript</b> array methods"
*/
console.log(topicElement.innerHTML);


const example1 = document.querySelector('#inner-text');
const example2 = document.querySelector('#text-content');

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;

example1.innerText = address;
example2.textContent = address;

console.log(example1.innerText);
console.log(example2.textContent);

/* setAttribute */
const imageElement = document.querySelector('img')
console.log(imageElement.getAttribute('src'));
// imageElement.setAttribute('src', 'new-image.jpg')
console.log((imageElement.getAttribute('src')));

/* removeAttribute */
imageElement.removeAttribute('height')
console.log(imageElement.getAttribute('height'))

/* The hasAttribute Method */
console.log(imageElement.hasAttribute('src'))
console.log(imageElement.hasAttribute('heigth'))

let undef;
// console.log(undef.toString());

/* Setting Styles With the .style Property */
const header = document.querySelector('h1');
console.log(header.style);
header.style.color = 'white';
/* apply style */
header.style.backgroundColor = 'green'
/* delete style */
header.style.backgroundColor = ''

/* Setting Styles with Classes */

/* The className Property */
const jollofParagraph = document.getElementById('jollof_rice')
console.log(jollofParagraph.className);
jollofParagraph.className = 'favorite'
console.log(jollofParagraph.className);

/* The classList Property */
const footballParagraph = document.getElementById('football')
console.log(footballParagraph.classList);
footballParagraph.classList.add('fav', 'sports')
console.log(footballParagraph.classList);
footballParagraph.classList.remove('fav')
console.log(footballParagraph.classList);
footballParagraph.classList.replace('football', 'favorite')
console.log(footballParagraph.classList);
const isFav = footballParagraph.classList.contains('favorite')
console.log(isFav);

/* Toggling a Class with the classList.toggle() */
footballParagraph.classList.toggle('favorite') // this will remove favorite since it already exist
console.log(footballParagraph.classList);

footballParagraph.classList.toggle('favorite') // this will add favorite since it doesn't exist
console.log(footballParagraph.classList);

/* Selecting a Parent with parentNode vs parentElement */

const italicizedText = document.getElementById("italics")
console.log(italicizedText.parentElement);
console.log(italicizedText.parentNode)
console.log(italicizedText.parentNode.parentNode)

/* Selecting Elements with childNodes vs children */

const container = document.querySelector('.container');
const containerChildren = container.children;
console.log(containerChildren);
const containerChildNodes = container.childNodes;
console.log(containerChildNodes);

