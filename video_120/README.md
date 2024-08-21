# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Step 1 : Installing react redux
step 2 : create redux/store.js and copy code from https://redux-toolkit.js.org/tutorials/quick-start
step 3 : then we import store and provider from redux/store.js and react-redux respectively and wrap up the the app in provider in main.jsx
step 4 : create a new file called counterSlice.js in redux and copy code from https://redux-toolkit.js.org/tutorials/quick-start
step 5 : import counterReducer from "./counter/counterSlice" and add it to the store