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