import React, { Component } from 'react';
import { shuffle } from 'underscore';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');
quizData.quiz_questions = shuffle(quizData.quiz_questions);
/**
 * @class Quiz
 * @extends Component
 */
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }

  /**
   * 
   * @description mutates the state of the
   * quiz_posiiton to derive the next question
   * for the quiz next round
   * 
   * @method showNextQuestion
   * @memberof Quiz
   */
  showNextQuestion () {
    this.setState(prevState =>({
      quiz_position: prevState.quiz_position + 1
    }));
  }

  /**
   * @description resets the local state
   * to restart the quiz from the beginning
   * after all questions have been exhausted
   * 
   * @method handleResetClick
   * @memberof Quiz
   */
  handleResetClick () {
    this.setState({
      quiz_position: 1
    });
  }

  render() {
    const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;
    return (
      <div id="card">
        <div id="heading">
          <h2>Quizzer</h2>
          { isQuizEnd ?
          <p>Click on Reset Quiz to play again.</p> :
          <p>Select a correct option from the list of options below.</p>
          }
        </div>
        {isQuizEnd ?
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> :
          <QuizQuestion
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        }
      </div>
    );
  }
}

export default Quiz;