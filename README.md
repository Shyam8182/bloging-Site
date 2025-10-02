# Bloging-Site

[![JavaScript](https://img.shields.io/badge/Primary%20Language-JavaScript-yellow)](https://www.javascript.com/)

## Description

No description provided for this repository.

## Key Features and Highlights

- Utilizes Redux Toolkit for state management
- Integrates Tailwind CSS with Vite for styling
- Employs TinyMCE React for rich text editing
- Uses Appwrite for backend services
- Parses HTML with html-react-parser
- Implements React Router for navigation
- Incorporates React Hook Form for form handling

## Installation

To get started with the Bloging-Site application, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bloging-Site.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Usage Examples

Here is an example of how to use the Bloging-Site application:

```javascript
// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';

// Define a simple component
const App = () => {
  return (
    <div>
      <h1>Welcome to Bloging-Site!</h1>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
```

## Dependencies

The Bloging-Site application relies on the following dependencies:

- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit): ^2.8.2
- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): ^4.1.10
- [@tinymce/tinymce-react](https://www.npmjs.com/package/@tinymce/tinymce-react): ^6.2.1
- [appwrite](https://www.npmjs.com/package/appwrite): ^18.1.1
- [html-react-parser](https://www.npmjs.com/package/html-react-parser): ^5.2.5
- [react](https://www.npmjs.com/package/react): ^19.1.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.1.0
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): ^7.58.1
- [react-redux](https://www.npmjs.com/package/react-redux): ^9.2.0
- [react-router](https://www.npmjs.com/package/react-router): ^7.6.2
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^7.6.2
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.1.10

## Contributing

If you would like to contribute to the Bloging-Site project, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature
- Make your changes
- Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
