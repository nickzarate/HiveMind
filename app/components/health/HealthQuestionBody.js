'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles = require('hivemind/app/Styles');
var BeesWaxHeader = require('hivemind/app/components/BeesWaxHeader');

var {
  View,
  Text,
  TouchableHighlight,
} = React;


// <Text style={styles.infoText}> Age: {this.props.x1} </Text>
//         <Text style={styles.infoText}> Weight: {this.props.x2} </Text>
//         <Text style={styles.infoText}> Height: {this.props.x3} </Text>


var HealthQuestionBody = React.createClass ({
  getInitialState: function() {
    return {
      herokuText: 'not working',
    };
  },

  changeText: function() {
    var that = this;
    console.log("in change text");
    Parse.Cloud.run('hello', {movie: 'the matrix', movie2: 'other'}, {
      success: function(hello) {
        console.log("in success")
        that.setState({
          herokuText: hello,
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      },
    });
    console.log("end of change text");
  },

  render: function() {
    return (
      <View style={styles.healthQuestionBodyView}>
        <Text style={styles.infoText}> Minutes of weekly exercise: {this.props.weekly_exercise_minutes} </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.back} onPress={this.changeText}> Tap </Text>
        </TouchableHighlight>

        <Text style={styles.infoText}> {this.state.herokuText} </Text>
        
        <Text style={styles.questionText}> Guess what test subject #{this.props.observationID}'s self reported overall health is based on the given information. </Text>
      </View>
    );
  }
});

module.exports = HealthQuestionBody;