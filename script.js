function handleClick(buttonElement) {
    alert('Button pressed');

    // Modify the button's style directly using the passed element
    buttonElement.style.width = '150px';
    buttonElement.style.height = '50px';
    buttonElement.style.backgroundColor = 'blue';
}
