import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

/**
 * 
 * @class QuizQuestion
 * @extends Component
 */
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }

  /**
   * 
   * @description event handler that checks if button clicked
   * by user corresponds to the right answer
   * 
   * @method handleClick
   * @memberof QuizQuestion
   * 
   * @param {string} buttonText 
   */
  handleClick (buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false});
      return this.props.showNextQuestionHandler();
    }

    this.setState({ incorrectAnswer: true});
  }

  render() {
    return (
      <main>
        <section className="question-wrapper">
          <p className="question">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) =>
              <QuizQuestionButton
                key={index}
                button_text={answer_option}
                clickHandler={this.handleClick.bind(this)}
              />
            )}
          </ul>
        </section>
        <p
          style={{visibility: this.state.incorrectAnswer ? '' : 'hidden'}}
          className="error"
        >
          Sorry, that's not right
        </p>
      </main>
    );
  }
}

export default QuizQuestion;