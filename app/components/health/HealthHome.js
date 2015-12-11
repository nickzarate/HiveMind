'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWax = require('hivemind/app/components/BeesWax');

var numDummyData = 100;
var answers = ["0-20", "20-40", "40-60", "60-80", "80-100", "other"];

Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");


var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var HealthHome = React.createClass ({
  question: function() {
    this.props.navigator.push({id: 7});
  },

  goBack: function() {
    this.props.navigator.pop();
  },

  bonusRound: function() {
    for (var i = 1; i <= numDummyData; i++) {
      var exercise_minutes = 1 + Math.floor(Math.random() * 99);
      var health = 30 + 0.15 * exercise_minutes - 0.0005 * exercise_minutes * exercise_minutes
      var HealthQuestion = Parse.Object.extend("HealthQuestion");
      var healthQuestion = new HealthQuestion();
      healthQuestion.set("overall_health", health);
      healthQuestion.set("weekly_exercise_minutes", exercise_minutes);
      healthQuestion.set("observationID", i);
      healthQuestion.set("answers", answers);
      if (health < 20) {
        healthQuestion.set("answer", 0);
      } else if (health < 40) {
        healthQuestion.set("answer", 1);
      } else if (health < 60) {
        healthQuestion.set("answer", 2);
      } else if (health < 80) {
        healthQuestion.set("answer", 3);
      } else if (health < 100) {
        healthQuestion.set("answer", 4);
      } else {
        healthQuestion.set("answer", 5);
      }

      healthQuestion.save(null, {
        success: function(healthQuestion) {
          // Execute any logic that should take place after the object is saved.
        },
        error: function(healthQuestion, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
        }
      });
    }
  },

  render: function() {
    return (
      <View style={styles.categoryView}>
        <TouchableHighlight style={styles.backButton} onPress={this.goBack}>
          <Text style={styles.back}> BACK </Text>
        </TouchableHighlight>
        <Text style={styles.back}> Health Home </Text>
        <TouchableHighlight style={styles.btn} onPress={this.question}>
          <Text style={styles.back}> START </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={this.bonusRound}>
          <Text style={styles.back}> BONUS </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = HealthHome;