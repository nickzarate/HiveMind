'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('hivemind/app/components/BeesWaxHeader');

var {
  View,
  Text,
} = React;


// <Text style={styles.infoText}> Age: {this.props.x1} </Text>
//         <Text style={styles.infoText}> Weight: {this.props.x2} </Text>
//         <Text style={styles.infoText}> Height: {this.props.x3} </Text>


var EducationQuestionBody = React.createClass ({

  render: function() {
    return (
      <View style={styles.educationQuestionBodyView}>
        <Text style={styles.infoText}> Years of experience at current job: {this.props.yearsExperience} </Text>
        <Text style={styles.infoText}> Total years of education: {this.props.yearsEducation} </Text>
        <Text style={styles.questionText}> Guess what test subject #{this.props.observationID}'s hourly wage is based on the given information. </Text>
      </View>
    );
  }
});

module.exports = EducationQuestionBody;