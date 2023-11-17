# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# React Starter Project

This is a starter project for building React applications. It provides a basic setup with commonly used tools and libraries.

## Description

This project serves as a foundation for building modern web applications using React. It includes a preconfigured setup with useful features such as hot reloading, bundling, and linting.

## UI Component Library

This project utilizes the following UI component libraries:

- [DaisyUI](https://daisyui.com/): A lightweight and modular UI component library for React applications. It provides a set of customizable components that can be easily integrated into your project.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework that allows you to rapidly build custom user interfaces. Tailwind CSS provides a comprehensive set of pre-designed utility classes that can be used to style your components.

## State Management with Redux Toolkit

For state management, this project incorporates [Redux Toolkit](https://redux-toolkit.js.org/). Redux Toolkit is the official recommended way to write Redux logic. It simplifies the process of setting up and managing Redux by providing a set of opinionated tools and best practices.

With Redux Toolkit, you can define slices of your application state, write reducers and actions in a concise manner, and handle asynchronous operations using Redux Thunk or Redux Saga. It also includes utilities for creating immutable state updates and managing the Redux store.

To get started with Redux Toolkit, refer to the [official documentation](https://redux-toolkit.js.org/) for detailed usage instructions and examples.

## Form Handling with react-hook-form

This project uses [react-hook-form](https://react-hook-form.com/) for form handling. react-hook-form is a flexible and performant library for managing forms in React applications. It provides a simple and intuitive API for handling form validation, submission, and state management.

To get started with react-hook-form, refer to the [official documentation](https://react-hook-form.com/get-started) for detailed usage instructions and examples.

## Data Fetching with React Query

For data fetching and state management, this project incorporates [React Query](https://react-query.tanstack.com/). React Query is a powerful library that simplifies data fetching and caching in React applications. It provides a declarative API for making HTTP requests, handling caching, and managing the state of your data.

With React Query, you can easily fetch data from your API endpoints, handle loading and error states, and manage the data cache. It also integrates well with other popular libraries such as Axios and GraphQL.

To get started with React Query, refer to the [official documentation](https://react-query.tanstack.com/) for detailed usage instructions and examples.

## Folder Structure

The project follows a standard folder structure for organizing your code:

├── src
│ ├── constants -> any constants are global
│ │ └── index.ts -> global constants
│ │ └── types.ts -> global types
│ │
│ ├── components -> global components like buttons, inputs
│ │ └── index.ts -> export all components
│ │ └── types.ts -> types of global components
│ │
│ ├── helpers -> global functions like date formatting
│ │
│ ├── hooks -> custom hooks
│ │
│ ├── layouts
│ │
│ ├── modules -> like users, authentication
│ │
│ ├── router -> config of router
│ │
│ ├── store -> gkibal state managment
│ │
│ ├── styles -> global styles
│ │
│ ├── setupAxios -> axios interceptor
