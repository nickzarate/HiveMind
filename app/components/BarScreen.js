'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');
var {
  View,
  Text,
  StyleSheet,
} = React;

var BarScreen = React.createClass ({

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Bar Screen </Text>
      </View>
    );
  }
});

module.exports = BarScreen;