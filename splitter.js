function initRun() {
  fetch('https://raw.githubusercontent.com/thepatriotscommandxs/thepatriotscommandxs.github.io/main/data/20th-century-african-leaders.txt')
      .then(response => response.text())
      .then(text => {
      
          let full = text.split("']\n");
          const rand = Math.abs(Math.round(Math.random() * full.length-2));

       


          full.join('').split('');

          function checkStr() {
          if(full[rand]=="undefined") {
            const rand = Math.abs(Math.round(Math.random() * full.length-2));
            rand = abs(rand);

            checkStr()
            
            }
            
            else {       



            let AnsHint = full[rand].split("', '");
            console.log("", AnsHint)
            let Ans = AnsHint[0].replace("['","");

            let ArrayAns = Ans.split(" ");
            console.log("", ArrayAns)

            let Hint = AnsHint[1].replace(/;/gi,"-")
            console.log("", Hint)

            let sentences = Hint.split(". ")
              
              
              CurrentHint += sentences[count]+ "."
  
  
              //document.getElementById('DUMMY').innerHTML = count;
              console.log("", count)
           //document.getElementById('Prompt').innerHTML = ArrayAns+" ====>> "+CurrentHint;
           console.log("", CurrentHint)

              
              
              
              
              
              
            }
      }
          
          checkStr()
          
          
          
  
          
          
          
          
      });
  
  
  }
  
  let CurrentHint = '';
  
  let count = 0;
  
  
  
  function addCount(){
    count+=1
  
  
    document.getElementById('DUMMY').innerHTML = count;
    
    
    CurrentHint += sentence[count] + "."
    
    
    
    document.getElementById('Prompt').innerHTML = ArrayAns+"   "+CurrentHint;
  
  
  }
  
      
  initRun()
      
