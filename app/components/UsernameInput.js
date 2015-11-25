'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  View,
  Image,
  TextInput,
} = React;

var UsernameInput = React.createClass ({
  getInitialState: function() {
    return {
      email: '',
    };
  },

  handleEmailChange: function(event) {
    this.setState ({
      email: event.nativeEvent.text
    });
  },

  handleEmailSubmit: function() {
    this.props.onEmailChange(this.state.email);
  },

  render: function() {
    return (
      <View style={styles.usernameInput}>
        <TextInput style={styles.inputTest}
        placeholder=' EMAIL'
        value={this.state.email}
        onChange={this.handleEmailChange}
        autoFocus={true}
        enablesReturnKeyAutomatically={true}
        selectTextOnFocus={true}
        keyboardType={'email-address'}
        onEndEditing={this.handleEmailSubmit}/>

        <Image source={require('./usernamePic.png')} style={styles.iconTest}/>
      </View>
    );
  }
});

module.exports = UsernameInput;