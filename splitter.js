fetch('https://raw.githubusercontent.com/thepatriotscommandxs/thepatriotscommandxs.github.io/main/total.txt')

.then(response => response.text())
  .then(text => {
      let full = text.split("']\r\n");

      const rand = Math.round(Math.random() * full.length);
      
      console.log(full)
    
    
    })