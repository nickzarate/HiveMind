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
  question: function() {
    this.props.navigator.push({id: 8});
  },

  goBack: function() {
    this.props.navigator.pop();
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
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.back}> BONUS </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = EducationHome;