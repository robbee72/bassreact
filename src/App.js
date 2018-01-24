import React, { Component } from 'react';
import update from 'react-addons-update';
import questionsOnJavascript from './api/questionsOnJavascript';
import JSQuiz from './components/JSQuiz';
import Grade from './components/Grade';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countdown: 30,
      counter: 0,
      questionId: 1,
      question: {},
      multiChoices: [],
      answer: '',
      answersCount: {
        Incorrect: 0,
        Correct: 0
      },
      grade: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledMultiChoices = questionsOnJavascript.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: questionsOnJavascript[0].question,
      multiChoices: shuffledMultiChoices[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < questionsOnJavascript.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setGrades(this.getGrades()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: questionsOnJavascript[counter].question,
        multiChoices: questionsOnJavascript[counter].answers,
        answer: ''
    });
  }

  getGrades() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setGrades(grade) {
    if (grade.length === 1) {
      this.setState({ grade: grade[0] });
    } else {
      this.setState({ grade: 'Undetermined' });
    }
  }
// questionTotal={questionsOnJavascript.length} replace on line 121
  renderJSQuiz() {
    return (
      <JSQuiz
        answer={this.state.answer}
        multiChoices={this.state.multiChoices}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={questionsOnJavascript.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderGrade() {
    return (
      <Grade quizGrade={this.state.grade} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Questions: Javascript</h2>
        </div>
        {this.state.grade ? this.renderGrade() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
