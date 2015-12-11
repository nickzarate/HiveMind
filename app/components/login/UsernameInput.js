'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

// <Image source={require('./usernamePic.png')} style={styles.iconTest}/>


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
        <TextInput
        onFocus={this.props.onFocus}
        style={styles.inputTest}
        placeholder=' EMAIL'
        value={this.state.email}
        onChange={this.handleEmailChange}
        selectTextOnFocus={true}
        keyboardType={'email-address'}
        onEndEditing={this.handleEmailSubmit}/>

        <Image source={require('image!usernamePic')} style={styles.iconTest}/>
        
      </View>
    );
  }
});

module.exports = UsernameInput;