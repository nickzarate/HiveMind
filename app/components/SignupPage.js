'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');
var styles=require('hivemind/app/Styles');
var UsernameInput = require('./login/UsernameInput');
var PasswordInput = require('./login/PasswordInput');

//var Parse = require('parse').Parse;
//var ParseReact = require('parse-react');
Parse.initialize("8ZueyV5UhsgHnpXH4vtzdVaHGsTV6LInmaQBMNhi", "QB8RQclB0LpKANbkXrLzDHOf7ss3GfMnjuzossH8");
var success = true;

var {
  View,
  Text,
  Image,
  Component,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS,
} = React;


 // <TextInput
 //          style={styles.loginInput}
 //          placeholder=' Email'
 //          value={this.state.username}
 //          onChange={this.handleEmailChange}
 //          autoFocus={true}
 //          enablesReturnKeyAutomatically={true}
 //          selectTextOnFocus={true}
 //          keyboardType={'email-address'} />

 //        <TextInput
 //          style={styles.loginInput}
 //          placeholder=' Password'
 //          onSubmitEditing={this.captureUser}
 //          value={this.state.password}
 //          onChange={this.handlePasswordChange}
 //          enablesReturnKeyAutomatically={true}
 //          selectTextOnFocus={true}
 //          secureTextEntry={true} />

var SignUpPage = React.createClass ({

  getInitialState: function() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },

  goBack: function() {
    this.props.navigator.pop();
  },

  setEmailState: function(email) {
    this.setState({
      email: email,
    });
  },

  setPasswordState: function(password) {
    this.setState({
      password: password,
    });
  },

  successful: function() {
    console.log("before push");
    this.props.navigator.push({id: 'home'})
    console.log("after push");
  },

  captureUser: function() {
    
    var proceed = function(user) {
      //Give the new user an empty answer history!
      var AnswerHistory = Parse.Object.extend("AnswerHistory");
      var answerHistory = new AnswerHistory();
      answerHistory.save({
        success: function(answerHistory) {
          user.set("answerHistory", answerHistory);
          user.set("honey", 0);
          user.save({
            success: function() {
              push();
            }
          });
        }
      });
      var push = function() {
        this.props.navigator.push({id: 'home'});
      }.bind(this);

    }.bind(this);

    var user = new Parse.User();
    user.set("username", this.state.email);
    user.set("email", this.state.email);
    user.set("password", this.state.password);

    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);

    user.signUp(null, {
      success(user) {
        proceed(user);
      },
      error(user, error) {
        console.log(user);
        console.log(error);
        alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  render: function() {
    return (
      <View style={styles.blackContainer}>
        <TouchableHighlight style={styles.backButton} onPress={this.goBack}>
          <Text style={styles.back}> BACK </Text>
        </TouchableHighlight>

          <UsernameInput onEmailChange={this.setEmailState}/>
          <PasswordInput onPasswordChange={this.setPasswordState}/>
          <TouchableHighlight style={styles.loginButton} onPress={this.captureUser}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableHighlight>
          
      </View>
    );
  }
});

module.exports = SignUpPage;