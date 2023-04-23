const numberOfHands = 1326;
let numberOfChosenHands = 0;
let numberOfChosenHandsRemoveBoardCard = 0;
let countOpenHand = {1:0, 13:0, 12:0, 11:0, 10:0, 9:0, 8:0, 7:0, 6:0, 5:0, 4:0, 3:0, 2:0}

function board(){
  countOpenHand = {1:0, 13:0, 12:0, 11:0, 10:0, 9:0, 8:0, 7:0, 6:0, 5:0, 4:0, 3:0, 2:0}
  inputBoardCards = document.getElementById('inputBoard').value;
  boardCards = inputBoardCards.split(',')
  console.log('boardCards.length');
  console.log(boardCards.length);
  if(boardCards[0]==0){
    console.log('入力されていない。')
  }else if(boardCards.length > 5){
    errorWords="入力カードが多い。"
    console.log('カードが多い')
  }else{
    console.log('qqqqqqqqqqqqq');
    console.log(boardCards);
    console.log(boardCards[0]);
    document.getElementById('board1').textContent = boardCards[0];
    let boardCard1 = boardCards[0].slice(0,-1);
    console.log('number');
    console.log(boardCard1);
    console.log('boardCards');
    console.log(boardCards);
    boardCard1 = convertToNumber(boardCard1);
    console.log('number');
    console.log(boardCard1);
    countOpenHand[boardCard1]+=1;
    if(boardCards.length > 1){
      document.getElementById('board2').textContent = boardCards[1];
      console.log('boardCards1');
      console.log(boardCards[1]);
      boardCard2 = boardCards[1].slice(0,-1);
      boardCard2 = convertToNumber(boardCard2);
      console.log('number1');
      console.log(boardCard2);
      countOpenHand[boardCard2]+=1;
    }
    if(boardCards.length > 2){
      document.getElementById('board3').textContent = boardCards[2];
      console.log('boardCards2');
      console.log(boardCards[2]);
      boardCard3 = boardCards[2].slice(0,-1);
      boardCard3 = convertToNumber(boardCard3);
      console.log('number2');
      console.log(boardCard3);
      countOpenHand[boardCard3]+=1;
    }
    if(boardCards.length > 3){
      document.getElementById('board4').textContent = boardCards[3];
      boardCard4 = boardCards[3].slice(0,-1);
      boardCard4 = convertToNumber(boardCard4);
      console.log('number3');
      console.log(boardCard4);
      countOpenHand[boardCard4]+=1;
    }
    if(boardCards.length > 4){
      document.getElementById('board5').textContent = boardCards[4];
      boardCard5 = boardCards[4].slice(0,-1);
      boardCard5 = convertToNumber(boardCard5);
      countOpenHand[boardCard5]+=1;
    }
  }
  inputHandCards = document.getElementById('inputHand').value;
  handCards = inputHandCards.split(',')
  if(handCards.length == 2){
    document.getElementById('hand1').textContent = handCards[0];
    // let hand1 = handCards[0].slice(0,-1);
    // hand1 = convertToNumber(hand1);
    // countOpenHand[hand1]+=1;
    document.getElementById('hand2').textContent = handCards[1];
    // let hand2 = handCards[1].slice(0,-1);
    // hand2 = convertToNumber(hand2);
    // countOpenHand[hand2]+=1;
  }else{
    errorWords="ハンドの数は2です。"
  }
  console.log('aaaaaaaaaaaaaaaaa');
  console.log(countOpenHand[1]);
  console.log(countOpenHand[13]);
  console.log(countOpenHand[12]);
  console.log(countOpenHand[7]);
  console.log(countOpenHand[8]);
  console.log(countOpenHand[9]);
  console.log('bbbbbbbbbbbb');
  numberOfChosenHands = 0;
  numberOfChosenHandsRemoveBoardCard = 0;
  for (i = 0; i < rangeChosenHands.length; i++) {
    let rangeClasses = rangeChosenHands[i].classList;
    let rangeHand = rangeChosenHands[i].textContent;
    // console.log(chosenHand);
    if(rangeHand.length > 2){
      rangeHand = rangeHand.slice(0,-1);
    }
    countChosenHands(rangeClasses, rangeHand);
    ratioOfHand();
  }
}



// 初期レンジのハンド数カウント
let rangeChosenHands = document.getElementsByClassName('chose');
for (i = 0; i < rangeChosenHands.length; i++) {
  let rangeClasses = rangeChosenHands[i].classList;
  let rangeHand = rangeChosenHands[i].textContent;
  // console.log(chosenHand);
  if(rangeHand.length > 2){
    rangeHand = rangeHand.slice(0,-1);
  }
  countChosenHands(rangeClasses, rangeHand);
  ratioOfHand();
}

// ハンドの選択
let handElements = document.getElementsByClassName('hand');
for (i = 0; i < handElements.length; i++) {
  handElements[i].addEventListener("click", function() {
    let classes = this.classList
    this.classList.toggle('chose');
    let chosenHand = this.textContent;
    console.log(chosenHand);
    if(chosenHand.length > 2){
      chosenHand = chosenHand.slice(0,-1);
    }
    countChosenHands(classes, chosenHand);
  });
}

// 選ばれたハンドのカウント
function countChosenHands(classes, chosenHand){
  let hand1 = chosenHand[0];
  let hand2 = chosenHand[1];
  hand1 = convertToNumber(hand1);
  hand2 = convertToNumber(hand2);
  let minNumberOfOpenHand = Math.min(countOpenHand[hand1],countOpenHand[hand2]);
  let absNumberOfOpenHand = Math.abs(countOpenHand[hand1]-countOpenHand[hand2]);
  console.log('absNumberOfOpenHand');
  console.log(absNumberOfOpenHand);
  if(classes.contains("pocket")){
    // chosenHand = chosenHand.slice(0,-1);
    if(classes.contains("chose")){
      numberOfChosenHands += 6; 
      console.log('yyyyyyyyyyyyy');
      console.log(hand1);
      console.log(countOpenHand[hand1]);
      if(countOpenHand[hand1] == 0){
        numberOfChosenHandsRemoveBoardCard += 6; 
      }else if(countOpenHand[hand1] == 1){
        numberOfChosenHandsRemoveBoardCard += 3; 
      }else if(countOpenHand[hand1] == 2){
        numberOfChosenHandsRemoveBoardCard += 1;
      }
    }else{
      numberOfChosenHands -= 6; 
      console.log('xxxxxxxxxxx');
      console.log(hand1);
      console.log(countOpenHand[hand1]);
      if(countOpenHand[hand1] == 0){
        numberOfChosenHandsRemoveBoardCard -= 6; 
      }else if(countOpenHand[hand1] == 1){
        numberOfChosenHandsRemoveBoardCard -= 3; 
      }else if(countOpenHand[hand1] == 2){
        numberOfChosenHandsRemoveBoardCard -= 1;
      }
    }
  }else if(classes.contains("suit")){
    // todo以下厳密には計算できていない
    console.log('minNumberOfOpenHand');
    console.log(minNumberOfOpenHand);
    console.log('countOpenHand[hand1]');
    console.log(hand1);
    console.log(countOpenHand[hand1]);
    console.log('countOpenHand[hand2]');
    console.log(hand2);
    console.log(countOpenHand[hand2]);
    if(classes.contains("chose")){
      numberOfChosenHands += 4; 
      if(countOpenHand[hand1] == 0 && countOpenHand[hand2] == 0){
        numberOfChosenHandsRemoveBoardCard += 4; 
      }else if(minNumberOfOpenHand == 0){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard += 3; 
        }else if(absNumberOfOpenHand == 2){
          numberOfChosenHandsRemoveBoardCard += 2; 
        }else if(absNumberOfOpenHand == 3){
          numberOfChosenHandsRemoveBoardCard += 1;
        }else{
          numberOfChosenHandsRemoveBoardCard += 0;
        } 
      }else if(minNumberOfOpenHand == 1){
        numberOfChosenHandsRemoveBoardCard += 2; 
      }else if(minNumberOfOpenHand >= 2){
        numberOfChosenHandsRemoveBoardCard += 1; 
      }
    }else{
      numberOfChosenHands -= 4; 
      if(countOpenHand[hand1] == 0 && countOpenHand[hand2] == 0){
        numberOfChosenHandsRemoveBoardCard -= 4;
      }else if(minNumberOfOpenHand == 0){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard -= 3; 
        }else if(absNumberOfOpenHand == 2){
          numberOfChosenHandsRemoveBoardCard -= 2; 
        }else if(absNumberOfOpenHand == 3){
          numberOfChosenHandsRemoveBoardCard -= 1;
        }else{
          numberOfChosenHandsRemoveBoardCard -= 0;
        } 
      }else if(minNumberOfOpenHand == 1){
        numberOfChosenHandsRemoveBoardCard -= 2; 
      }else if(minNumberOfOpenHand >= 2){
        numberOfChosenHandsRemoveBoardCard -= 1; 
      }
    }
  }else{
    if(classes.contains("chose")){
      numberOfChosenHands += 12;
      if(countOpenHand[hand1] == 0 && countOpenHand[hand2] == 0){
        numberOfChosenHandsRemoveBoardCard += 12;
      }else if(minNumberOfOpenHand == 0){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard += 9;
        }else if(absNumberOfOpenHand == 2){
          numberOfChosenHandsRemoveBoardCard += 6;
        }else if(absNumberOfOpenHand == 3){
          numberOfChosenHandsRemoveBoardCard += 3;
        }else{
          numberOfChosenHandsRemoveBoardCard += 0;
        }
      }else if(countOpenHand[hand1] == 1 && countOpenHand[hand2] == 1){
        numberOfChosenHandsRemoveBoardCard += 6;
      }else if(minNumberOfOpenHand == 1){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard += 4;
        }else{
          numberOfChosenHandsRemoveBoardCard += 2;
        }
      }else if(countOpenHand[hand1] == 2 && countOpenHand[hand2] == 2){
        numberOfChosenHandsRemoveBoardCard += 3;
      }else{
        numberOfChosenHandsRemoveBoardCard += 1;
      }
    }else{
      numberOfChosenHands -= 12; 
      if(countOpenHand[hand1] == 0 && countOpenHand[hand2] == 0){
        numberOfChosenHandsRemoveBoardCard -= 12;
      }else if(minNumberOfOpenHand == 0){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard -= 9;
        }else if(absNumberOfOpenHand == 2){
          numberOfChosenHandsRemoveBoardCard -= 6;
        }else if(absNumberOfOpenHand == 3){
          numberOfChosenHandsRemoveBoardCard -= 3;
        }else{
          numberOfChosenHandsRemoveBoardCard -= 0;
        }
      }else if(countOpenHand[hand1] == 1 && countOpenHand[hand2] == 1){
        numberOfChosenHandsRemoveBoardCard -= 6;
      }else if(minNumberOfOpenHand == 1){
        if(absNumberOfOpenHand == 1){
          numberOfChosenHandsRemoveBoardCard -= 4;
        }else{
          numberOfChosenHandsRemoveBoardCard -= 2;
        }
      }else if(countOpenHand[hand1] == 2 && countOpenHand[hand2] == 2){
        numberOfChosenHandsRemoveBoardCard -= 3;
      }else{
        numberOfChosenHandsRemoveBoardCard -= 1;
      }
    }
  }
  console.log(numberOfChosenHands);
  console.log("numberOfChosenHands");
  console.log(numberOfChosenHandsRemoveBoardCard);
  console.log("numberOfChosenHandsRemoveBoardCard");
  ratioOfHand();
}

// 選択したハンドの割合計算と出力
function ratioOfHand(){
  let ratioOfChosenHand = numberOfChosenHands/numberOfHands;
  let ratioOfChosenHandsRemoveBoardCard = numberOfChosenHandsRemoveBoardCard/numberOfHands;
  document.getElementById('numberOfChosenHand').textContent = numberOfChosenHands;
  document.getElementById('numberOfChosenHandsRemoveBoardCard').textContent = numberOfChosenHandsRemoveBoardCard;
  document.getElementById('ratioOfChosenHand').textContent = Math.floor(ratioOfChosenHand*10000)/100;
  document.getElementById('ratioOfChosenHandsRemoveBoardCard').textContent = Math.floor(ratioOfChosenHandsRemoveBoardCard*10000)/100;
}

console.log('aaaaaaaaaaaaaaaaa');
  console.log(countOpenHand[1]);
  console.log(countOpenHand[13]);
  console.log(countOpenHand[12]);
  console.log(countOpenHand[7]);
  console.log(countOpenHand[8]);
  console.log(countOpenHand[9]);
  console.log('bbbbbbbbbbbb');




// 入力したa,k,qなどを配列のkeyの数字に変更する
function convertToNumber(number){
  if(number=="a"||number=="A"){
    number=1;
  }else if(number=="k"||number=="K"){
    number=13;
  }else if(number=="q"||number=="Q"){
    number=12;
  }else if(number=="j"||number=="J"){
    number=11;
  }else if(number=="t"||number=="T"){
    number=10;
  }
  return number;
}