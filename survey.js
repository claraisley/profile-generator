const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newObject = {

}

  rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    newObject['name'] = answer;
  
    rl.question(`What's an activity you like doing? `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      newObject['activity'] = answer;


      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
  
        newObject['meal'] = answer;
  
        rl.question(`What do you listen to while doing that? `, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
    
          newObject['music'] = answer;
    
          console.log(`
          ${newObject.name} likes to ${newObject.activity}. 
          They love to eat ${newObject.meal} right before doing ${newObject.activity}. 
          Their favourite thing to listen to while doing that is ${newObject.music}.
          `)
          rl.close();
          });
        });
    });
});