import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  /**
   * 
   * @description event handler that checks if button clicked
   * by user corresponds to the right answer
   * 
   * @method handleClick
   * @memberof QuizQuestionButton
   * 
   */
  handleClick () {
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    const { button_text } = this.props;
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>{button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;