# The Complete JS 2020 Udemy Day2
 summarizing what I learned

 [Build a Game]

1. define variables scores, roundScore, activePlayer

2. hide dice variable
   id: score-0, score-1, current-0, current-1 
   change text to zero

3. add event 'click to class: btn-roll
   declare (anonymous)function
   1. define dice -> random number

   2. define diceDOM -> display the result
   - diceDOM = class:dice
   - diceDOM : display set to block
   - diceDOM : add dice-.png image

   3. update the round score IF the rolled number was NOT a 1
      - if 
        - round score is the same as dice number
        - current player change text to round score
      
      - else -> next player's turn
	      - (ternery operator)
		      conditional:activePlayer === 0
          true: activePlayer = 1
          false: active Player = 0, roundScore = 0
        - id:current-0, current-1 's text change to 0
	      - add 'active' toggle -> class: player-0-panel, player-1-pannel
        - class: dice 's display change to none

4. declare function when click add as an event to class:btn-hold 
      1.add CURRENT score to GLOBAL score
      	- active player's scores += round score
      	- update the UI
      	- change text to scores[activePlayer] in ID:'score-' + activePlayer 
      2. check if player won the game
        if scores[active player] get 50 scores
        id:'name-'_activePlayer -> change text to 'winner!'
        class: dice 's display change to none
	class:player- + activePlayer + -panel -> add'winner' in their class
        class:player- + activePlayer + -panel -> remove'active' in their class
      3.else
        * above else (next player's turn) extract function has titled 'nextPlayer'

5. class: btn-news -> add event when click call function 'init'
      declare function 'init'
      call function 'init' at the beginning part

6. add function init
   - change text to 'Player1' at id:name-0
   - change text to 'Player2' at id:name-1
   - player-0-panel: remove 'winner' in class
   - player-1-panel: remove 'winner' in class
   - player-0-panel: remove 'active' in class
   - player-1-panel: remove 'active' in class
   - player-0-panel: add 'active' in class
		
7. define gamePlaying variable at first line,
    add gamePlaying variable is true at function init  
   
   - class:btn-roll 
     add if(gamePlaying) 

   - class: btn-hold
     add if(gamePlaying) 
     when player won the game, add -> gamePlaying = false

* extra

  1. a player looses his entire score when he rolls two 6 in a row. After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable) 

2. Add an input field to the HTML where players can set the winning score,
so that they can change the predefined score of 100.
HINT: you can read that value with the .value property in JS. This is a good opportunity to use google to figure this out.

3. Add another dice to the game , so that there are two dices now.
 The player looses his current score when one of the is a 1.
HINT: you will need CSS to position the second dice, so take a look at the CSS code for the first one.