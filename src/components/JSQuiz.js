import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import MultiChoice from '../components/MultiChoice';

function JSQuiz(props) {

  function renderMultiChoices(key) {
    return (
      <MultiChoice
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={2500}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={2000}
    >
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="multiChoices">
          {props.multiChoices.map(renderMultiChoices)}
        </ul>
      </div>
    </ReactCSSTransitionGroup>
  );
}

JSQuiz.propTypes = {
  answer: PropTypes.string.isRequired,
  multiChoices: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default JSQuiz;
