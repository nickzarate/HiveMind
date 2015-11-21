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

var Question = Parse.Object.extend("HealthQuestions");
var query = new Parse.Query(Question);
var index = 1 + Math.floor(Math.random()*2);
console.log(index);
query.equalTo("index", index);
var name;
var x1;
var x2;
var x3;
var y;
var answers = [];
var answer;

query.first({
  success: function(question) {
    name = question.get("name");
    x1 = question.get("x1");
    x2 = question.get("x2");
    x3 = question.get("x3");
    y = question.get("y");
    answers = question.get("answers");
    answer = question.get("answer");
    question.set("objectId", "1");
    question.save();
  },
  error: function(object, error) {
  }
});

var HealthHome = React.createClass ({
  getInitialState: function() {
    return {
      numWax: 6,
    };
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
        <HealthQuestionBody name={name} x1={x1} x2={x2} x3={x3}/>
        <HealthQuestionAnswer answers={answers} answer={answer}
        onDecrement={this.decrementWax} numWax={this.state.numWax} onAnswered={this.goHome}/>
      </View>
    );
  }
});

module.exports = HealthHome;