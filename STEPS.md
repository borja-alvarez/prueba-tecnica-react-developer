# Steps

## Init project

```sh
# Use the default values except for the test option where you # should use jest.
npm init

# Install jest
npm install --save-dev jest

# Install React
npm install react
npm install react-dom

# Install webpack and plugins
npm install --save-dev webpack 
npm install --save-dev webpack-cli 
npm install --save-dev webpack-dev-server

# Install Babel and plugins
npm install --save-dev @babel/core  
npm install --save-dev @babel/preset-env 
npm install --save-dev @babel/preset-react
npm install --save-dev babel-loader
```

## Configure webpack

```sh
# create config file
touch webpack.config.js
# create entry point
mkdir src
touch src/index.js
# create output folder
mkdir dist
touch dist/index.html
```

## Configure babel
```sh
# create config file
touch .babelrc
```

## Running the app
```sh
# create main component
touch src/app.jsx
```

## Create basic test
```sh
# Intall React testing libraries
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/dom
npm install --save-dev @testing-library/jest-dom
npm install --save-dev jest-environment-jsdom

# create test folder
mkdir test
touch test/index.test.js

# create test config
touch jest.config.js
```

## Install ESlint and prettier
```sh
# Install dependencies
npm install --save-dev eslint  
npm install --save-dev prettier 
npm install --save-dev eslint-plugin-react 
npm install --save-dev eslint-config-prettier 
npm install --save-dev eslint-plugin-prettier 

# Create eslint config file
touch eslint.config.js

# Create prettier config file
touch .prettierrc

```