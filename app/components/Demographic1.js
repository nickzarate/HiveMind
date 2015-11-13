'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles=require('hivemind/app/Styles');
Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React;

var Demographic1 = React.createClass ({

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.back}> Page 1 </Text>
        <TouchableHighlight style={styles.back}>
          <Text> Add test: 2 </Text>
        </TouchableHighlight>
      </View>
      );
  }
});

module.exports = Demographic1;