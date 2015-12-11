'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var styles = require('hivemind/app/Styles');
Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var EducationStats = React.createClass ({
  goHome: function() {
    Parse.Cloud.run('hello', {movie: 'the matrix'}, {
      success: function(message) {
        console.log(message);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      },
    });
    this.props.navigator.popToTop();
  },

  render: function() {
    return (
      <View style={styles.categoryView}>
        <Text style={styles.back}> Education Stats </Text>
        <TouchableHighlight style={styles.backButton} onPress={this.goHome}>
          <Text style={styles.back}> home </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = EducationStats;