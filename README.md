# The Complete JS 2020 Udemy Day2
 summarizing what I learned

 [Build a Game]

1. define variables scores, roundScore, activePlayer

2. define var x

3. hide dice variable
   id: score-0, score-1, current-0, current-1 
   change text to zero

4. add event 'click to class: btn-roll
   declare (anonymous)function
   1. define dice -> random number

   2. define diceDOM -> display the result
   - diceDOM = class:dice
   - diceDOM : display set to block
   - diceDOM : add dice-.png image

   3. update the round score IF the rolled number was NOT a 1
      if 
        - round score is the same as dice number
        - current player change text to round score
      
      else -> next player's turn
	      - (ternery operator)
		      conditional:activePlayer === 0
          true: activePlayer = 1
          false: active Player = 0, roundScore = 0
        - id:current-0, current-1 's text change to 0
	      - add 'active' toggle -> class: player-0-panel, player-1-pannel
        - class: dice 's display change to none




  
