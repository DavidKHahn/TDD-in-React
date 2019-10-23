## TDD-in-React

**RULES TO FOLLOW WHEN TDD:**

    - Red, Green and Refactor.
    - *Write a failing test, a passing test and improve code.*
    - *Feature Tours:* https://iamvery.com/2018/11/14/feature-tours.html

### Tools Used:

**Cypress**: Mainly used for end-to-end testing (similar to Mocha for test runner, Chai for expectations, Sinon for test doubles except Cypress runs all of these under the hood)

    yarn add --dev cypress

**Enzyme**: React Component testing

    yarn add --dev enzyme enzyme-adapter-react-16

**Jest**: Unit testing

    yarn add --dev jest @babel/preset-react @babel/plugin-syntax-dynamic-import babel-jest babel-core@^7.0.0-0 @babel/core

**ESLint**: Formatting JS

    yarn add --dev eslint eslint-config-codingitwrong babel-eslint eslint-plugin-jest

    yarn add --dev eslint-plugin-react

    yarn add --dev eslint-plugin-cypress

**Materialize**: Materialize CSS for UI designs (https://materializecss.com/getting-started.html)

    Include inside index.html:

    <!-- Import Google Icon Font -->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Import materialize.css -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

**Babel**: JS Compiler mainly used to convert ECMAScript syntax for compatibility

    yarn add --dev @babel/plugin-proposal-class-properties

**Circle CI**:

`chmod +x bin/cypress` in master (CLI) after creating a bin folder in root of project with a cypress file containing:

    #!/bin/bash

    yarn start & wait-on http://localhost:1234
    $(yarn bin)/cypress run

Return to CircleCI dashboard and run setup for the project being used.

**Formik**:

Using Formik for form validation: https://github.com/jaredpalmer/formik

**React-Router-Dom**:

    https://reacttraining.com/react-router/web/guides/quick-start

    yarn add react-router-dom

**Redux**:

    yarn add redux react-redux redux-devtools-extension

