const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`${answer} is a nice name :)`);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Wow ${answer} is interesting!`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`${answer} is an awsome choice`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`So, ${answer} is your favourite meal `);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`${answer} is yummy`);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
            console.log(`${answer}`);
            console.log('You are awsome >^_^<')
          
            rl.close();
          });
        
          //rl.close();
        });
      
        //rl.close();
      });
    
      //rl.close();
    });
  
    //rl.close();
  });

});


// rl.question('What\'s an activity you like doing? ', (answer) => {
//   console.log(`Wow ${answer} is interesting!`);

//   rl.close();
// });



// rl.question('What do you listen to while doing that? ', (answer) => {
//   console.log(`${answer} is an awsome choice`);

//   rl.close();
// });


// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
//   console.log(`So, ${answer} is your favourite meal `);

//   rl.close();
// });


// rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
//   console.log(`${answer} is yummy`);

//   rl.close();
// });

// rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
//   console.log(`${answer}`);
//   console.log('You are awsome >^_^<')

//   rl.close();
// });


























// rl.question('What is your favorite food? ', (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
// });



// r1.on(‘close’, function() {
//     // Put your algorithm here. You have access to inputNumbers
//     // and can be assured all the inputs are in.
//     console.log(inputNumbers);
// });