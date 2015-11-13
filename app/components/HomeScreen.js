'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');
var {
  View,
  Text,
  StyleSheet,
} = React;

var HomeScreen = React.createClass ({

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Home Screen </Text>
      </View>
    );
  }
});

module.exports = HomeScreen;