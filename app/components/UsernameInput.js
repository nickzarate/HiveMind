'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  View,
  Image,
  TextInput,
} = React;

var UsernameInput = React.createClass ({
  render: function() {
    return (
      <View style={styles.usernameInput}>
        <TextInput style={styles.inputTest} placeholder='EMAIL'/>
        <Image source={require('./usernamePic.png')} style={styles.iconTest}/>
      </View>
    );
  }
});

module.exports = UsernameInput;