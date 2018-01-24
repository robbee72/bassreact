import React from 'react';
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Grade(props) {

  return (
    <ReactCSSTransitionGroup
      className="container grade"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Your answer is <strong>{props.quizGrade}</strong>!
      </div>
    </ReactCSSTransitionGroup>
  );

}

Grade.propTypes = {
  quizGrade: PropTypes.string.isRequired,
};

export default Grade;
