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

  decrementWax: function(answerIndex) {
    answers[answerIndex] += 1;
    this.props.onDecrement();
    if (this.props.numWax === 1) {
      var points = answers[this.props.answer] * 50;
      var currentUser = Parse.User.current();
      currentUser.increment("honey", points);
      currentUser.save();
      var that = this;

      var EducationAnswer = Parse.Object.extend("EducationAnswer");
      var educationAnswer = new EducationAnswer();
      educationAnswer.set("educationQuestion", this.props.questionPointer);
      educationAnswer.set("answers", answers);
      var estimate = Number(this.props.estimate);
      educationAnswer.set("pointEstimate", estimate);
      educationAnswer.save({
        success: function(educationAnswer) {
          saveAnswer(educationAnswer);
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });

      var saveAnswer = function(educationAnswer) {
        var answerHistory = currentUser.get("answerHistory");
        answerHistory.fetch({
          success: function(answerHistory) {
            if (that.props.newRound) {
              console.log("first question");
              answerHistory.set("latestEducationRound", []);
            } else {
              console.log("not the first question");
            }
            answerHistory.add("latestEducationRound", educationAnswer);
            answerHistory.save({
              success: function() {
                that.props.onAnswered();
              },
              error: function(error) {
                alert("Couldn't save answer history: Error: " + error.code + " " + error.message);
              }
            })
          },
          error: function(error) {
            alert("Couldn't fetch answer history: Error: " + error.code + " " + error.message);
          }
        });
      };
    };
  },










    //   var saveAnswerToRound = function(educationAnswer) {
    //     //Create a new array representing ONE round of education questions/answers
    //     var EducationRound = Parse.Object.extend("EducationRound");
    //     var educationRound = new EducationRound();
    //     educationRound.add("educationAnswers", educationAnswer);
    //     educationRound.save({
    //       success: function(educationRound) {
    //         saveRound(educationRound);
    //       },
    //       error: function(error) {
    //         alert("Error: " + error.code + " " + error.message);
    //       }
    //     });

    //     var saveRound = function(educationRound) {
    //       currentUser.get("answerHistory").add("educationData", educationRound);

    //       currentUser.save({
    //         success: function() {
    //           that.props.onAnswered();
    //         },
    //         error: function(error) {
    //           alert("Error: " + error.code + " " + error.message);
    //         }
    //       });
    //     }.bind(this);
    //   }.bind(this);

    //   var deleteLatestRound = function() {
    //     var answerHistory = currentUser.get("answerHistory");
    //     answerHistory.fetch({
    //       success: function(answerHistory) {
    //         answerHistory.set("latestEducationRound", []);
    //       },
    //       error: function(error) {
    //         alert("Error: " + error.code + " " + error.message);
    //       }
    //     });
    //   }

    //   var saveAnswer = function(educationAnswer) {
    //     if (this.props.newRound) {
    //       console.log("first question")
    //       deleteLatestRound();
    //       saveAnswerToRound(educationAnswer);
    //     } else {
    //       console.log("second question")
    //       currentUser.get("answerHistory").add("latestEducationRound", educationAnswer);
    //       currentUser.save({
    //         success: function() {
    //           that.props.onAnswered();
    //         },
    //         error: function(error) {
    //           alert("Error: " + error.code + " " + error.message);
    //         },
    //       });
    //     }
    //   }.bind(this);
    // }
  //},
  
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