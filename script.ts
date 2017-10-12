$(function() {
  class Die {
    index: number;
    value: number;
    div;
    click;
    dblClick;
    constructor(id: number) {
      this.index = id;
      this.div = $(`#container`).append(`<div class="die" id="${this.index}"></div>`);
      this.click = $(`#${this.index}`).click( (event) => {
        this.roll();
      })
      this.dblClick = $(`#${this.index}`).dblclick( (event) => {
        let diceIndex = searchIndex(this.index, dice);
        $(`#${this.index}`).remove();
        dice.splice(diceIndex, 1);
      })
    };
    roll() {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      this.value = randomNumber; 
      $(`#${this.index}`).empty();
      $(`#${this.index}`).append(randomNumber.toString());
    };
  }
  let dice = [],
      counter = 0;
  function searchIndex(a: number,b) {
    for (let i = 0; i < b.length; i++){
      if (b[i].index === a) {
        return i;
      }
    }
  }   
  $(`#generate`).click( (event) => {
    let newDie = new Die(counter);

    newDie.roll();
    dice.push(newDie);
    counter++;
  })
  $(`#roll`).click( (event) => {
    for (let i = 0; i < dice.length; i++) {
      dice[i].roll();
    }
  })
  $(`#sum`).click( (event) => {
    let sumDice = 0;
    for (let i = 0; i < dice.length; i++) {
      sumDice += dice[i].value;
    };
    alert(sumDice);
  })
})