# Tic Tac Toe Tech Test
This project implements the logic behind a game of tic tac toe with javascript and Node.js. Users are able to `Withdraw` and Deposit amounts from their Account as well as view a list of transactions. The application interface is served via the node REPL using the command line interface.

```
# # # # # # # # # # # # # # # # # # # # #
 _   _         _                _             
| | (_)       | |              | |            
| |_ _  ___   | |_ __ _  ___   | |_ ___   ___
| __| |/ __|  | __/ _` |/ __|  | __/ _ \ / _ \
| |_| | (__   | || (_| | (__   | || (_) |  __/
\__|_|\___|   \__\__,_|\___|   \__\___/ \___|

# # # # # # # # # # # # # # # # # # # # #
```

## Specification
The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## Approach
Having constructed user stories and deciding on an MVP, I decided to research methods for determining the win condition of a game. This felt like it may have a strong influence on the design of the application. I decided to use [magic squares](https://en.wikipedia.org/wiki/Magic_square) with a [combination](https://en.wikipedia.org/wiki/Combination) function to evaluate the win condition.

I afforded more time to diagramming than usual for this project, attempting a more detailed domain model upfront before starting to write any code.

I chose to use javascript and Node.js for this project to build on my knowledge of a prior project and decided on three new frameworks for testing: Mocha, Chai (assertion) and Sinon (mocking & doubling).

### Domain model
![Domain Model](https://github.com/joemaidman/tic-tac-toe/blob/master/screenshots/domainModelTicTacToe.png)

## Challenges
-

## User Stories
**MVP**
```
As a game
So that I can have a competitive element
I want to have two Players

As a game
So that the game can progress
I want to switch the current player when a player claims a field on the board

As a game
So that the player can move on with their life
I want to finish when a player wins or all fields on the board have been taken

As a player
So that I can take my turn
I want to be able to claim a field on the board

As a moral player
So that I don't cheat
I shouldn't be able to claim a field on the board that is already claimed

As a moral player
So that I don't cheat
I shouldn't be able to take my turn if it is not my turn

As a player
So that I can win a game
I want to be declared the winner when I have claimed a complete row, column or diagonal on the board
```

**Additional features**
```
As the first player
So that I can have my favourite symbol
I want to select whether I am X or O

As a winning player
So that I can feel even better about winning
I want to receive a congratulatory message when I win

As a losing player
So that I can feel better about losing
I want to receive an encouraging message when I lose
```

## Technologies
- javascript
- [node.js](https://nodejs.org/en/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Sinon](http://sinonjs.org/)

## Principles, patterns and behaviours
- [Module pattern](https://en.wikipedia.org/wiki/Module_pattern)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))
- [Object Orientated Design](https://en.wikipedia.org/wiki/Object-oriented_programming)
- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)

## Installaton
- Clone the repo.
- `cd` to the project folder.
- Run `npm install` to install project dependencies.

## Testing
- Run `npm test` which is defined as `mocha` via the `package.json` file.

## Usage
- Run `node`
- Run `.load ./app.js`, a file which
- An example user session is as follows:

```

```

## Future improvements
- Add a basic user interface
....
