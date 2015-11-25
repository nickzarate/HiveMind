'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('./BeesWaxHeader');

var {
  View,
  Text,
} = React;


// <Text style={styles.infoText}> Age: {this.props.x1} </Text>
//         <Text style={styles.infoText}> Weight: {this.props.x2} </Text>
//         <Text style={styles.infoText}> Height: {this.props.x3} </Text>


var HealthQuestionBody = React.createClass ({

  render: function() {
    return (
      <View style={styles.healthQuestionBodyView}>
        <Text style={styles.infoText}> Minutes of weekly exercise: {this.props.weekly_exercise_minutes} </Text>
        
        <Text style={styles.questionText}> Guess what test subject #{this.props.observationID}'s self reported overall health is based on the given information. </Text>
      </View>
    );
  }
});

module.exports = HealthQuestionBody;