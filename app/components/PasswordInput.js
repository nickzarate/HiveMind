'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  View,
  Image,
  TextInput,
} = React;

var PasswordInput = React.createClass ({
  render: function() {
    return (
      <View style={styles.usernameInput}>
        <TextInput style={styles.inputTest} placeholder='PASSWORD'/>
        <Image source={require('./PasswordPic.png')} style={styles.iconTest}/>
      </View>
    );
  }
});

module.exports = PasswordInput;