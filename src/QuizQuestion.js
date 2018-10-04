import React, { Component } from 'react';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { quiz_question: { answer_options, instruction_text } } = this.props;
    return (
      <main>
        <section>
          <p>{instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;