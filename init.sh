#!/bin/bash
# Inicializacion del proyecto
npm init --yes
# Instalacion de modulos
npm install express morgan oracledb
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D 
npm install @babel/plugin-proposal-class-properties
npm install nodemon -D
npm install react react-dom react-scripts
npm install webpack webpack-cli 
npm install @material-ui/core @material-ui/icons

# Agregar scripts al archivo package.json
node << EOF
    const fs = require('fs')
    let package = require('./package.json')
    package.scripts = {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "webpack": "webpack --mode development --watch"
    }
   fs.writeFile('./package.json', JSON.stringify(package, null, 2), (err) => {
    if (~err) console.log('The start, dev and webpack commands are ready to use')
    })
EOF
