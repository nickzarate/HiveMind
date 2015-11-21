'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var BeesWaxHeaderVertical = require('./BeesWaxHeaderVertical');
var Answer = require('./Answer');

var {
  View,
  Text,
  TouchableHighlight
} = React;

var Answer = React.createClass ({

  getInitialState: function() {
    return {
      numWax: 0,
    }
  },

  addWax: function() {
    if (this.props.totalNumWax > 0) {
      this.setState({
        numWax: this.state.numWax + 1,
      });
      this.props.onDecrement(this.props.choice);
    }
  },

  render: function() {
    return (
      <View style={styles.horizontalAnswer}>
        <BeesWaxHeaderVertical style={styles.beesWaxHeaderVertical} numWax={this.state.numWax}/>
        <TouchableHighlight style={styles.answer} onPress={this.addWax}>
          <Text style={styles.answerText}> {this.props.text} </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Answer;