'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  View,
  Text,
  StyleSheet,
} = React;

var Demographic2 = React.createClass ({

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Page 2 </Text>
      </View>
      );
  }
});

module.exports = Demographic2;