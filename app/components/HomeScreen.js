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
  categoryHealth: function() {
    this.props.health(1);
  },

  categoryEducation: function() {
    this.props.health(2);
  },

  render: function() {
    return (
      <View style={styles.categoryView}>
        <TouchableHighlight style={styles.categoryButton} onPress={this.categoryHealth}>
          <Text style={styles.back}> HiveMind Health </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.categoryButton} onPress={this.categoryEducation}>
          <Text style={styles.back}> HiveMind Education </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = HomeScreen;