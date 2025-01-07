### How to Select DOM Elements

1. getElementById  
Id should be unique for the page.
If not element with the id is found, null is returned.

```javascript
const person_name = document.getElementById('person_name')
console.log(person_name);
```

2. getElementsByClassName  
This method takes in the value of a class attribute as an argument and selects all elements in the DOM that has the given class.

```javascript
const person_age = document.getElementsByClassName('class_age');
console.log(person_age);
console.log(person_age[0]);
```
3. getElementsByTagName  
This method will select elements using their tag name. For example, getElementByTagName('p') will select all paragraphs on the page.

```javascript
const person_info = document.getElementsByTagName('p')
console.log(person_info)
console.log(person_info[0])
```

4. querySelector  
You can use this method to select any HTML element in the DOM. It returns only one element: the first element that matches the given selector.
The querySelector method works like how CSS selectors work.
```javascript
const person_sex = document.querySelector('.sex');
console.log(person_sex)
```
another example
```javascript
const thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn);
```

5. querySelectorAll  
Like the querySelector method, querySelectorAll also selects HTML elements using CSS selectors. The difference is that it returns all elements that match the selector instead of returning only the first one.

```javascript
const allBtns = document.querySelectorAll('button')
console.log(allBtns);
```

### How to Change the Content of DOM Elements

1. The innerHTML Property  
This is a method that allows you to read or update both the structure and content and structure of elements.

```javascript
const topicElement = document.querySelector('#topic')
console.log(topicElement.innerHTML)
topicElement.innerHTML = "JavaScript array methods"
console.log(topicElement.innerHTML) 
topicElement.innerHTML = "<b>JavaScript</b> array methods" // could be html too
```
> If the content you're inserting comes from user input or any untrusted source, be sure to validate and sanitize it before using innerHTML to prevent XSS attacks. You can use a library like DOMPurify to do this.


2. The innerText and textContent Properties  
Both innerText and textContent ignore HTML tags and treat them as part of a string. You can use both methods to read or update the text of DOM elements.
A key difference between the two is in how they treat the text. Using innerText returns the text as it appears on the screen. And using textContent returns text as it appears in the markup. 

innerText : only returns the text that appears on the screen

textContent : returns the text that may not be visible(hidden elements)

```javascript
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
```

### How to Work with Attributes of DOM Elements

To interact with and manipulate HTNL attributes using JavaScript, we can use methods like getAttribute and setAttribute to directly access the properties.

1. The getAttribute Method  
We can use this method to get the value of an existing attribute on an element.
It accepts an argument (the name of the attribute) and returns the value of the attribute.
If the attribute you passed to it as an argument does not exist on the element, the method will return null.

```html
<img src="image.jpg" alt="An example image">
```

```javascript
const imageElement = document.querySelector('img')
console.log(imageElement.getAttribute('src'))
```

2. The setAttribute Method  
This is used to set or change the attribute of an element. The method takes in two arguments. The first argument is the name of attribute you want to change, and the second is the new value you want to give the attribute.

```html
<img src="image.jpg" alt="An example image">
```

```javascript
const imageElement = document.querySelector('img')
console.log(imageElement.setAttribute('src','new-image.jpg'))
```

3. The removeAttribute Method
We pass in the name of the attribute you want to remove from the element as arguments to the method.

```html
<img src="image.jpg" alt="An example image" height="200">
```

```javascript
const imageElement = document.querySelector('img')
console.log(imageElement.removeAttribute('height'))
console.log(imageElement.getAttribute('height'))
```

4. The hasAttribute Method
You can use this method to check whether or not an element has a specific attribute.

```html
<img src="image.jpg" alt="An example image" height="200">
```

```javascript
const imageElement = document.querySelector('img')

console.log(imageElement.hasAttribute('height'))
console.log(imageElement.hasAttribute('width'))
```

### How to Change the Styles on DOM Elements

#### Setting Styles With the .style Property
You use the .style property when you want to make specific changes to a single element. The .style property allows you to set styles directly as inline styles for elements. This means it overrides the styles you have in your CSS stylesheet.

```javascript
const header = document.querySelector('h1');
console.log(header.style);
header.style.color = 'white';
/* apply style */
header.style.backgroundColor = 'green'
/* delete style */
header.style.backgroundColor = ''
```

#### Setting Styles with Classes
With classes, you can create styles once and apply it to different elements. This helps make your code become more maintainable. 
**The className Property**
The className property represent the class attribute of a DOM element.
The className also reads or replace the current class.

```html
<p id="jollof_rice" class="food rice-dish">Jollof rice</p>
```

```javascript
const jollofParagraph = document.getElementById('jollof_rice')
console.log(jollofParagraph.className);
jollofParagraph.className = 'favorite'
console.log(jollofParagraph.className);
```
**The classList Property**
With the classList property, you can add and remove classes. You can also toggle classes, replace existing class values with new ones, and even check if the class contains a specific value.

```html
<p id="football" class="football">Football</p>
```

```javascript
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
```

**Toggling a Class with the classList.toggle()**
When you use the toggle property, it first checks if the class exists. If it exists, it will remove it. And if it doesn't exist, it will add it.

```javascript
footballParagraph.classList.toggle('favorite')
console.log(footballParagraph.classList);
```

### How to Traverse the DOM
To traverse the DOM means to move between the different elements/nodes within the HTML document. This may includes selecting or accessing parent, child, or sibling elements (or nodes). You do this to get information or manipulate the document structure.

#### Selecting a Parent with parentNode vs parentElement

```html
  <div class="container">
    <p class="full-text">
        <i id="italics">Some italicized text</i>
    </p>
  </div>
```

```javascript
const italicizedText = document.getElementById("italics")
console.log(italicizedText.parentElement);
console.log(italicizedText.parentNode);
console.log(italicizedText.parentNode.parentNode)
```

#### Selecting Elements with childNodes vs children

- childNodes: returns a NodeList of all the child nodes within the selected elements. It will include elements and non-element nodes like text nodes, comment nodes, and so on.

- .children: returns an HTML collection of only the child elements (element nodes) of the selected objects. It will not include any non-element nodes like texts or comments.

```javascript
const container = document.querySelector('.container');
const containerChildren = container.children;
console.log(containerChildren);
const containerChildNodes = container.childNodes;
console.log(containerChildNodes);
```
#### Selecting the First or Last Child/Element

- firstChild: Selects only the first child node of the parent element.
- lastChild: Selects only the last child node of the parent element.
- firstElementChild: Selects only the first child element of the parent.
- lastElementChild: Selects only the last child element of the parent.


