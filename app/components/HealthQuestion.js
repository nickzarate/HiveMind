'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('./BeesWaxHeader');
var HealthQuestionBody = require('./HealthQuestionBody');
var HealthQuestionAnswer = require('./HealthQuestionAnswer');

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var questionPointer;

var HealthQuestion = React.createClass ({
  getInitialState: function() {
    return {
      numWax: 6,
      overall_health: 0,
      weekly_exercise_minutes: 0,
      answers: ["", "", "", "", "", ""],
      answer: 5,
      observationID: 0,
    };
  },

  componentDidMount: function() {

    var updateState = function(question) {
      questionPointer = question;
      console.log("in update state!");
      this.setState({
        overall_health: question.get("overall_health"),
        weekly_exercise_minutes: question.get("weekly_exercise_minutes"),
        answers: question.get("answers"),
        answer: question.get("answer"),
        observationID: question.get("observationID"),
      })
    }.bind(this);

    var HealthQuestion = Parse.Object.extend("HealthQuestion");
    var query = new Parse.Query(HealthQuestion);
    var observationID = 1 + Math.floor(Math.random() * 99);
    query.equalTo("observationID", observationID);
    query.first({
      success: function(question) {
        updateState(question);
      },
      error: function(object, error) {
        alert("Couldn't find the object you were looking for");
      }
    });
  },

  decrementWax: function() {
    if (this.state.numWax > 0) {
      this.setState({
        numWax: this.state.numWax - 1,
      });
    }
  },

  goHome: function() {
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <View>
        <BeesWaxHeader numWax={this.state.numWax}/>

        <HealthQuestionBody
        weekly_exercise_minutes={this.state.weekly_exercise_minutes}
        overall_health={this.state.overall_health}
        observationID={this.state.observationID}/>

        <HealthQuestionAnswer
        answers={this.state.answers}
        answer={this.state.answer}
        numWax={this.state.numWax}
        onDecrement={this.decrementWax}
        onAnswered={this.goHome}
        questionPointer={questionPointer}/>

      </View>
    );
  }
});

module.exports = HealthQuestion;