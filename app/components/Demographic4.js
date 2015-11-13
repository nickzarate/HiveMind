'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  View,
  Text,
  StyleSheet,
} = React;

var Demographic4 = React.createClass ({

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Page 4 </Text>
      </View>
    );
  }
});

module.exports = Demographic4;