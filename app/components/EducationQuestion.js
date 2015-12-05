'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('./BeesWaxHeader');
var EducationQuestionBody = require('./EducationQuestionBody');
var EducationQuestionAnswer = require('./EducationQuestionAnswer');

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var questionPointer;

var EducationQuestion = React.createClass ({
  getInitialState: function() {
    return {
      numWax: 6,
      yearsExperience: 0,
      yearsEducation: 0,
      answers: ["", "", "", "", "", ""],
      answer: 5,
      observationID: 0,
    };
  },

  componentDidMount: function() {

    var updateState = function(question) {
      questionPointer = question;

      this.setState({
        yearsExperience: question.get("yearsExperience"),
        yearsEducation: question.get("yearsEducation"),
        answers: question.get("answers"),
        answer: question.get("answer"),
        observationID: question.get("observationID"),
      })
    }.bind(this);

    var EducationQuestion = Parse.Object.extend("EducationQuestion");
    var query = new Parse.Query(EducationQuestion);
    var observationID = 1 + Math.floor(Math.random() * 99);
    query.equalTo("observationID", observationID);
    query.first({
      success: function(question) {
        updateState(question);
      },
      error: function(object, error) {
        //alert("Couldn't find the object you were looking for");
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

        <EducationQuestionBody
        yearsExperience={this.state.yearsExperience}
        yearsEducation={this.state.yearsEducation}
        observationID={this.state.observationID}/>

        <EducationQuestionAnswer
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

module.exports = EducationQuestion;