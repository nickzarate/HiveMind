'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles=require('hivemind/app/Styles');
Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;



var Demographic1 = React.createClass ({
  addInfo: function() {
    var currentUser = Parse.User.current();
    currentUser.save({
      honey: 0,
    });
  },

  render: function() {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.userCharText}> Name </Text>
        <View style={styles.horizontalUserChar}>
          <TextInput style={styles.input} placeholder='First'/>
          <TextInput style={styles.input} placeholder='Last'/>
        </View>
        <Text style={styles.userCharText}> Age </Text>
        <View style={styles.horizontalUserChar}>
          <TextInput style={styles.input} placeholder='Age'/>
        </View>
        <TouchableHighlight style={styles.backButton} onPress={this.addInfo}>
          <Text style={styles.back}> Honey </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Demographic1;