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


var HealthQuestionBody = React.createClass ({

  render: function() {
    return (
      <View style={styles.healthQuestionBodyView}>
        <Text style={styles.infoText}> Name: {this.props.name} </Text>
        <Text style={styles.infoText}> Age: {this.props.x1} </Text>
        <Text style={styles.infoText}> Weight: {this.props.x2} </Text>
        <Text style={styles.infoText}> Height: {this.props.x3} </Text>
        <Text style={styles.questionText}> Guess what {this.props.name}'s BMI is based on the given information. </Text>
      </View>
    );
  }
});

module.exports = HealthQuestionBody;