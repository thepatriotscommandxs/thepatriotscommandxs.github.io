const fs = require('fs');
const https = require('https');

// Get the text file from the GitHub repository
https.get('https://raw.githubusercontent.com/thepatriotscommandxs/thepatriotscommandxs.github.io/main/data/20th-century-african-leaders.txt', (res) => {
  let data = '';
  // Read the data in chunks
  res.on('data', (chunk) => {
    data += chunk;
  });
  // Once the file is read, index the sentences
  res.on('end', () => {
    const sentences = data.split("']\n");
    const rand = Math.round(Math.random() * sentences.length);
    document.getElementById("text").innerText=sentences[rand];
    console.log(`${sentences[rand]}`);
    
  });
});