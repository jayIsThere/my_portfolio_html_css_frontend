# My HTML/CSS/JavaScript Website Frontend

This repository contains the frontend part of my personal website built using **HTML**, **CSS**, and **JavaScript**.

## Features
- Basic layout and design using **HTML** and **CSS**
- Interactive elements powered by **JavaScript** (e.g., form validation, dynamic content updates)
- Static website with responsive design

## Structure
- **page/**: Contains HTML files for different pages (`index.html`, `resume.html`, etc.)
- **style/**: Contains CSS files for styling the website
- **js/**: JavaScript files for client-side functionality
- **img/**: Image assets used throughout the website

## How to Use
To view the site, open the HTML files in your browser. You can also run a local server to simulate a more accurate environment.

## Connection with Backend
The form in this frontend will send POST requests to the backend API located in the `my_portfolio_php_backend` repository. Specifically, the `auswertung.php` file in the backend will handle the form data from this frontend.

### Example:
```html
<form action="http://localhost/my_portfolio_php_backend/auswertung.php" method="POST">
```

[Back to my website portfolio](https://github.com/JayIsThere/my_portfolio)
