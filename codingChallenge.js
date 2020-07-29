/* Let's build a fun quiz game in the console!

1. Build a function constructor called Question to describe a question.
A question should include:
a) question itself
b) the answers from which the player can choose the correct one(choose an adequate data structure here, array, object, etc.)

2. Create a couple of questions using the constructor

3.Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers
(each question should have a number) Hint: write a method for the Qeustion object for this task.

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6.Check if the answer is correct and print to the console whether the answer is correct or nor
Hint:write another method for this

7.Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code
hint:we learned a special technique to do exactly that.
*/

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedius'], 2);

var question = [q1, q2, q3];

