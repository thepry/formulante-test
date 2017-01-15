import React, { Component } from 'react';
import Markdown from 'react-markdown'
import './App.css';

import { Cell, Formula } from './formulante'

let name = new Cell('Eugene')
let greetings = new Cell('Hello', (v) => v.toUpperCase());
let greetingsMessage = new Formula((greetings, name) => `${greetings}, ${name}!`, greetings, name)
let finalMessage = new Formula((greetingsMessage) => `${greetingsMessage} Now you see how it works.`, greetingsMessage)

let nameMarkdown = `
  \`\`\`js
    let name = new Cell('Eugene')
  \`\`\`
`

let greetingsMarkdown = `
  \`\`\`js
    let greetings = new Cell('Hello', (v) => v.toUpperCase());
  \`\`\`
`

let greetingsMessageMarkdown = `
  \`\`\`js
    let greetingsMessage = new Formula((greetings, name) => \`\${greetings}\, \${name}\!\`, greetings, name)
  \`\`\`
`
let finalMessageMarkdown = `
  \`\`\`js
    let finalMessage = new Formula((greetingsMessage) => \`\${greetingsMessage}\ Now you see how it works.\`, greetingsMessage)
  \`\`\`
`

let initialText = 'This is proof of concept for reactive programming components in Javascript. Each of react components listents to its owns object changes and updates on change event.'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Block'>
          {initialText}
        </div>
        <InputBlock obj={name} msg={nameMarkdown} />
        <InputBlock obj={greetings} msg={greetingsMarkdown} />
        <FormulaBlock obj={greetingsMessage} msg={greetingsMessageMarkdown} />
        <FormulaBlock obj={finalMessage} msg={finalMessageMarkdown} />
      </div>
    );
  }
}

class BaseBlock extends Component {
  constructor(props){
    super(props);
    this.props.obj.on('change', () => this.forceUpdate());
  }
}

class InputBlock extends BaseBlock {
  handleChange = (e) => {
    this.props.obj.set(e.target.value)
  }

  render() {
    return (
      <div className='Block'>
        <input value={this.props.obj._value} onChange={this.handleChange} />
        <Markdown source={this.props.msg}/>
      </div>
    );
  }
}

class FormulaBlock extends BaseBlock {
  render() {
    return (
      <div className='Block'>
        {this.props.obj.value()}
        <Markdown source={this.props.msg}/>
      </div>
    );
  }
}

export default App;
