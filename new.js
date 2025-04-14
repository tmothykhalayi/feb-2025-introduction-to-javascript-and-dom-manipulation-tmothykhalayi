// Task 1: Change text content dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const textElement = document.getElementById('text');

changeTextBtn.addEventListener('click', () => {
    textElement.textContent = 'The text content has been successfully changed!';
});

// Task 2: Modify CSS styles via JavaScript
const toggleStyleBtn = document.getElementById('toggleStyleBtn');

toggleStyleBtn.addEventListener('click', () => {
    const currentColor = textElement.style.color;

    // Toggle text color between red and green
    if (currentColor === 'red') {
        textElement.style.color = 'green';
    } else {
        textElement.style.color = 'red';
    }
});

// Task 3: Add or remove an element when a button is clicked
const addElementBtn = document.getElementById('addElementBtn');
const newElementContainer = document.getElementById('newElementContainer');

addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new paragraph has been added dynamically!';
    newElementContainer.appendChild(newElement);
});
