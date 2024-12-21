# Web App with Interactive Button

This web application features a button that enlarges and turns blue when clicked.

## Features

- A single button that changes size and color upon interaction.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Open `index.html` in your preferred web browser.

## Usage

- Click the button to see it enlarge and turn blue.

## Code Example

Here is a simple example of the HTML, CSS, and JavaScript used:

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Button</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="interactiveButton">Click Me!</button>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
#interactiveButton {
    padding: 10px 20px;
    font-size: 16px;
    transition: all 0.3s ease;
}

#interactiveButton.enlarged {
    font-size: 24px;
    background-color: blue;
    color: white;
}
```

### JavaScript (script.js)
```javascript
document.getElementById('interactiveButton').addEventListener('click', function() {
    this.classList.toggle('enlarged');
});
```

## License

This project is licensed under the MIT License.