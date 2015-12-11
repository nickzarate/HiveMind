'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React;

var HomeScreen = React.createClass ({
  educationRound: function() {
    this.props.category(2);
  },

  render: function() {
    return (
      <View style={styles.home}>
        <Text style={styles.homeTitle}> HiveMind Health </Text>
        <Text style={styles.homeText} onPress={this.educationRound}> New Round </Text>
      </View>
    );
  }
});

module.exports = HomeScreen;