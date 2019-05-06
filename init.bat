npm init --yes

npm install express morgan mysql oracledb --silent
npm install react react-dom react-scripts --silent
npm install webpack webpack-cli --silent
npm install @material-ui/core @material-ui/icons --silent 
npm install nodemon -D --silent
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D --silent 
npm install @babel/plugin-proposal-class-properties -D --silent

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
