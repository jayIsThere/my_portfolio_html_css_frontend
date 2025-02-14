# my_portfolio_old_html_site

## Description

This project is a simple portfolio website that showcases my experiences, qualifications, and personal interests. The website consists of several HTML pages with embedded CSS styles and JavaScript functionalities.

## Directory Structure

```plaintext
my_portfolio_old_html_site/
├── page/
│   ├── index.html
│   ├── resume.html
│   ├── qualification.html
│   ├── private.html
│   ├── certificate.html
│   ├── contact.html
│   ├── auswertung.php
│   ├── feedbackTable.php
├── img/
│   ├── portrait.jpg
│   ├── sunset.jpg
│   ├── sushi.jpg
│   ├── pasta.jpg
│   ├── suppe.jpg
│   ├── luna.jpg
│   ├── jaehan.jpg
│   ├── program1.png
│   ├── program2.png
│   ├── program3.png
├── vid/
│   ├── luna.MOV
├── style/
│   ├── style.css
├── js/
│   ├── script_cert.js
│   ├── script_contact.js
```


## Included Files

### 1. HTML Pages

- `index.html` - Home page introducing myself and my career background.
- `resume.html` - Contains detailed information about my previous experiences.
- `qualification.html` - Shows my professional qualifications and skills.
- `private.html` - Presents my hobbies with images and videos.
- `certificate.html` - Allows sending a certificate selection via email (JavaScript functionality included).
- `contact.html` - Contact form (JavaScript funcitionality included).
- `feedback.html` - Feedback form linked to PHP.

### 2. Backend (PHP)

- `auswertung.php` - Receives and processes form submissions, saving them in an XML file in the same directory for further processing.
- `feedbackTable.php` - Reads the generated XML files and displays the data in a structured table.

### 3. Images & Videos

- Included in `img/` and `vid/`.
- `private.html` uses images and videos to showcase personal content.

### 4. Styles & Scripts

- `style/style.css` - Contains the central styles for all HTML pages.
- `js/script_cert.js` - Contains JavaScript code for form processing (e.g., automatic email sending in `certificate.html`).
- `js/script_contact.js` - Contains JavaScript code for form processing (e.g., automatic email sending in `contact.html`).

## Requirements

- A web server (e.g., XAMPP or Apache) for the PHP files.
- A browser to view the HTML pages.

## Installation & Usage

1. Clone or download the repository.
2. If PHP functionalities are needed, run the project in XAMPP (htdocs folder) or on a local server.
3. Open `index.html` in a browser and explore the website.
4. Fill out and submit the feedback form.
5. Feedback data can be visualized through `feedbackTable.php`.

## Future Updates

- Implement a Java-based XML parser for DTD validation.
- Improve UI design with responsive features.
- Expand the feedback system to include a database connection.

## Developer

Jaehan Kim

Thank you for checking it out! 🚀

