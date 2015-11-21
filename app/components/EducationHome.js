'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var EducationHome = React.createClass ({
  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Education Home </Text>
      </View>
    );
  }
});

module.exports = EducationHome;