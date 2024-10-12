const diceImages = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
  ];
  
  let count = 0;

  function rollDice() {
    console.log('Hello');
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
  
    document.getElementById('dice1').src = diceImages[dice1 - 1];
    document.getElementById('dice2').src = diceImages[dice2 - 1];
  
    const sum = dice1 + dice2;
    document.getElementById('sum').textContent = `Sum: ${sum}`;
  
    let message = '';
    if (dice1 === dice2) {
      message = 'You rolled doubles!';
    }
    document.getElementById('message').textContent = message;
  
    count++;
    document.getElementById('counter').textContent = `Rolls: ${count}`;
  }
  
  document.getElementById('button').addEventListener('click', rollDice);