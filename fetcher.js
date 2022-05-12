const website = process.argv[2];
const path = process.argv[3];

const fs = require('fs')
const request = require('request');


request(website, (error, response, body) => {
  if(error) {
    console.log('error:', error); // Print the error if one occurred
  } 
  fs.writeFile(`${path}`, body, err => {
      if (err) {
      return err;
  }
  console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  
  });
});

