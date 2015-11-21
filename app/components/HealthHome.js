'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var BeesWax = require('./BeesWax');

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