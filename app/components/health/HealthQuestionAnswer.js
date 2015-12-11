'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('hivemind/app/components/BeesWaxHeader');
var Answer = require('hivemind/app/components/Answer');
var answers = [0,0,0,0,0,0];

var {
  View,
  Text,
  TouchableHighlight,
} = React;

var HealthQuestionAnswer = React.createClass ({

  componentDidMount: function() {
    console.log("in health answer question did mount function");
  },

  decrementWax: function(answerIndex) {
    answers[answerIndex] += 1;
    this.props.onDecrement();
    if (this.props.numWax === 1) {
      var points = answers[this.props.answer] * 50;
      var currentUser = Parse.User.current();
      currentUser.increment("honey", points);
      currentUser.save();

      var saveAnswer = function(healthAnswer) {
        currentUser.get("answerHistory").add("healthData", healthAnswer);//answerHistory.healthData.add("healthAnswer", healthAnswer);                
        currentUser.save();
      };

      var HealthAnswer = Parse.Object.extend("HealthAnswer");
      var healthAnswer = new HealthAnswer();
      healthAnswer.set("healthQuestion", this.props.questionPointer);
      healthAnswer.set("answers", answers);
      healthAnswer.save({
        success: function(healthAnswer) {
          saveAnswer(healthAnswer);
        },
        error: function(error) {
          console.log("in error");
        }
      });
      this.props.onAnswered();
    }
  },
  
  render: function() {
    return (
      <View style={styles.healthQuestionAnswerView}>
        <View>
          <Answer choice={0} text={this.props.answers[0]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={3} text={this.props.answers[3]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
        <View>
          <Answer choice={1} text={this.props.answers[1]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={4} text={this.props.answers[4]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
        <View>
          <Answer choice={2} text={this.props.answers[2]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={5} text={this.props.answers[5]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
      </View>
    );
  }
});

module.exports = HealthQuestionAnswer;