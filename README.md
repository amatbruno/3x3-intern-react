# 3x3_Intern Project
The 3x3 Intern project is an educational and non-lucrative project where is used to learn and practice with design and functional technologies like;
 - HTML
 - CSS
 - JavaScript (React.js)
 - Node.js
 - PostgreSQL

This project has been created with the Vite framework.

 It's important to understand that possibly exists some code bad practices or desing fails but is made it 100% by myself with the objective
 to understant how works an entire full-stack webpage.


1. Running project
- First, Node.js needs to be installed  on your PC: https://nodejs.org/en .
- Then download the project and intiate it in a splitted console;
  - Type;
  ```html
  npm install
  npm run dev
  ```
  
- Then, if you want to test the database, download the database manager PostgreSQL: https://www.postgresql.org/download/ .
- Before activation, you need to create the database with the following parameters:
  ```html
  - Database name: 3z3_inside
  - Necessary tables: players, users and incidents
  ```
- Now follow this steps in a second terminal;
  - Type;
  ```html
  cd src/js
  node index.js
  ```

  (For the above last two steps, you need to configure the src/js/index.cjs file with the commented params in configuration section)
  
Any suggestion or pull request is welcome, thanks for seeing!.
-----------------------------------------------------------------------------

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
