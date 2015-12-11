'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('hivemind/app/components/BeesWaxHeader');
var Answer = require('hivemind/app/components/Answer');
var answers = [0,0,0,0,0,0,0,0,0];

var {
  View,
  Text,
  TouchableHighlight,
} = React;

var EducationQuestionAnswer = React.createClass ({

  componentDidMount: function() {
    console.log("in education answer question did mount function");
  },

  decrementWax: function(answerIndex) {
    answers[answerIndex] += 1;
    this.props.onDecrement();
    if (this.props.numWax === 1) {
      var points = answers[this.props.answer] * 50;
      var currentUser = Parse.User.current();
      currentUser.increment("honey", points);
      currentUser.save();
      var that = this;

      var saveAnswerToRound = function(educationAnswer) {
        //Create a new array representing ONE round of education questions/answers
        var EducationRound = Parse.Object.extend("EducationRound");
        var educationRound = new EducationRound();
        educationRound.add("educationAnswers", educationAnswer);
        educationRound.save({
          success: function(educationRound) {
            saveRound(educationRound);
          },
          error: function(error) {
            alert("error " + error.code);
          }
        });

        var saveRound = function(educationRound) {
          currentUser.get("answerHistory").add("educationData", educationRound);
          currentUser.get("answerHistory").set("latestEducationRound", educationRound)
          currentUser.save();
        }.bind(this);
      };

      var saveAnswer = function(educationAnswer) {
        console.log(this);
        if (this.props.newRound) {
          saveAnswerToRound(educationAnswer);
        } else {
          currentUser.get("answerHistory").get("latestEducationRound").add("educationAnswers", educationAnswer);
          currentUser.save();
        }
      }.bind(this);

      var EducationAnswer = Parse.Object.extend("EducationAnswer");
      var educationAnswer = new EducationAnswer();
      educationAnswer.set("educationQuestion", this.props.questionPointer);
      educationAnswer.set("answers", answers);
      educationAnswer.save({
        success: function(educationAnswer) {
          saveAnswer(educationAnswer);
        },
        error: function(error) {
          alert("error " + error.code);
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
          <Answer choice={6} text={this.props.answers[6]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
        <View>
          <Answer choice={1} text={this.props.answers[1]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={4} text={this.props.answers[4]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={7} text={this.props.answers[7]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
        <View>
          <Answer choice={2} text={this.props.answers[2]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={5} text={this.props.answers[5]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
          <Answer choice={8} text={this.props.answers[8]} onDecrement={this.decrementWax} totalNumWax={this.props.numWax}/>
        </View>
      </View>
    );
  }
});

module.exports = EducationQuestionAnswer;