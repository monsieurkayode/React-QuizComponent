import React, { Component } from 'react';

/**
 * 
 * @class QuizEnd
 * @extends Component
 */
class QuizEnd extends Component {
  /**
   * 
   * @description resets the local state
   * to restart the quiz from the beginning
   * after all questions have been exhausted
   * 
   * @method handleResetClick
   * @memberof QuizEnd
   */
  handleResetClick () {
    this.props.resetClickHandler();
  }

  render() {
    return (
      <div className="quiz-end">
        <p className="question">Thanks for playing!</p>
        <a href='#' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;