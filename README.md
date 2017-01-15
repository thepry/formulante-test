This is proof of concept project for reactive programming in Javascript. The library files are located in `src/formulante.js` and `src/formulante`. `create-react-app` is used for initial bootstraping.

Fetch the repo and run

```
  npm install
  npm start
```

## Concept

The main idea is to implement "excel like" object in Javascript. So there are two basic objects: Cell and Formula. Cell is used for storing a value, while Formula can only depends on other Cells and Formulas value.

```javascript
import { Cell, Formula } from './formulante'


// Cell is simply for storing value
let name = new Cell('Username');
let greetings = new Cell('Hello');

// Note that even though name and greetings are Cell object, we refer to them as to primitive values in our code.
let greetingsMessage = new Formula((greetings, name) => `${greetings}, ${name}!`, greetings, name);

// Formula can depend on other Formula
let finalMessage = new Formula((greetingsMessage) => `${greetingsMessage} Now you see how it works.`, greetingsMessage);

finalMessage.value(); // 'Hello, Username! Now you see how it works.'

greetings.set('Hi');
finalMessage.value(); // 'Hi, Username! Now you see how it works.'

// Formula tracks when any of value that it depends on was updated
finalMessage.on('change', () => {
    console.log('final message was updated')
    console.log(finalMessage.value())
  }
);

greetings.set('Bye');
// 'final message was updated'
// 'Bye, Username! Now you see how it works.'

```


