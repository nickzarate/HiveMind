'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  View,
  Image,
  TextInput,
} = React;

var PasswordInput = React.createClass ({
  getInitialState: function() {
    return {
      password: '',
    };
  },

  handlePasswordChange: function(event) {
    this.setState ({
      password: event.nativeEvent.text
    });
  },

  handlePasswordSubmit: function() {
    this.props.onPasswordChange(this.state.password);
  },

  render: function() {
    return (
      <View style={styles.passwordInput}>
        
        <TextInput
          style={styles.inputTest}
          placeholder=' PASSWORD'
          value={this.state.password}
          onChange={this.handlePasswordChange}
          enablesReturnKeyAutomatically={true}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onEndEditing={this.handlePasswordSubmit} />

        <Image source={require('./PasswordPic.png')} style={styles.iconTest}/>
      </View>
    );
  }
});

module.exports = PasswordInput;