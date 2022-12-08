function getTitles() {
  fetch("https://github.com/thepatriotscommandxs/thepatriotscommandxs.github.io/tree/main/data")
      .then((result) => { return result.text(); })
      .then((text) => { 
      text = text.replaceAll ("\r", "").replaceAll ("\n", "");
      
      full = text.split('-open Link--primary" title="');
      //document.getElementById('Logger').innerHTML = full

        
      full.splice(0,1)
        
        for(i = full.length-1;i--;) {
          const reg = /data-turbo-frame="repo-content-turbo-frame"+.*/gi
          if(full[i]!=undefined) {
          
          full[i] = full[i].replace(reg,"")

          full[i] = full[i].replace('"',"")
          
          }
        }  
        const results = full.filter(element => {
          if (Object.keys(element).length !== 0) {
            return true;
          }
        
          return false;
        });

        const rand2 = Math.round(Math.random() * full.length);
        console.log(results)
        //window.webSite = full[rand2]
      });}
      getTitles()
