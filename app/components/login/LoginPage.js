 'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var UsernameInput = require('./UsernameInput');
var PasswordInput = require('./PasswordInput');

var FBSDKLogin = require('hivemind/node_modules/react-native-fbsdklogin');
var {
  FBSDKLoginButton,
  FBSDKLoginManager,
} = FBSDKLogin;
var FBSDKCore = require('hivemind/node_modules/react-native-fbsdkcore');
var {
  FBSDKAccessToken,
  FBSDKGraphRequest,
} = FBSDKCore;

//EXAMPLE FOR GETTING A USERS CHARACTERISTCS : (age-range)
var fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
  if (error) {
    alert('Error making request.');
  } else {
    console.log(result);
  }
}, '/me/?fields=age_range');

//EXAMPLE FOR GETTING A USERS ACCESS TOKEN
var token;
FBSDKAccessToken.getCurrentAccessToken(tempToken => {
  if (tempToken) {
    token = tempToken
  }
});
//EXAMPLE END-----------------------------


Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  Image,
  Navigator,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} = React;

var LoginPage = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
    };
  },

  _handlePress: function() {
    this.props.navigator.push({id: 'signup'})
  },

  _handleFacebookPress: function() {
    var that = this;
    FBSDKLoginManager.logInWithReadPermissions(["email", "user_friends"], (error, result) => {
      if (error) {
        alert('Error logging in.');
      } else {
        if (result.isCancelled) {
          alert('Login cancelled.');
        } else {
          console.log(result);
          // var authData = {
          //   id: result.credentials.userId,
          //   access_token: result.credentials.token,
          //   expiration_date: result.credentials.tokenExpirationDate
          // };

          // console.log(authData.id);
          // console.log(authData.access_token);
          // console.log(authData.expiration_date);

          Parse.FacebookUtils.logIn(authdata, {
            success: function(user) {
              if (user.existed()) {
                console.log('user already logged in');
                that.props.navigator.push({id: 'home'});
              } else {
                console.log('getting additional user information');
              }
            }
          })
          this.props.navigator.push({id: 'home'});
        }
      }
    });
  },

  loginUser: function() {
    var login = function() {
      this.props.navigator.push({id: 'home'});
    }.bind(this);
    var that = this;

    Parse.User.logIn(this.state.email, this.state.password, {
      success: function(user) {
        that.props.navigator.push({id: 'home'});
      },
      error: function(user, error) {
        console.log("Incorrect email or password, try again!");
      },
    });
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

  switchToSignUpPage: function() {
    this.props.navigator.push({id: 'signup'});
  },

  scrollDown: function() {
    this.refs.scrollView.scrollTo(220);
  },

  render: function() {
    return (
      <View style={styles.backgroundContainer}>
        <ScrollView ref="scrollView" style={styles.scrollView}>
          <View style={styles.smallYellowContainer}>
            <Text style={styles.titleText}> HIVEMIND </Text>
          </View>
          <View style={styles.smallBlackContainer}>

            <TouchableHighlight style={styles.blueButton} onPress={this._handleFacebookPress}>
              <Text style={styles.signUpButtonTextBlue}> Connect to Facebook </Text>
            </TouchableHighlight>

            <Text style={styles.orText}> OR </Text>
            <UsernameInput onFocus={this.scrollDown} onEmailChange={this.setEmailState}/>
            <PasswordInput onFocus={this.scrollDown} onPasswordChange={this.setPasswordState}/>

            <TouchableHighlight style={styles.loginButton} onPress={this.loginUser}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableHighlight>

            <View style={styles.rowContainer}>
              <Text style={styles.disclosureText}>Forgot Password?</Text>
              <Text style={styles.disclosureText} onPress={this.switchToSignUpPage}>Don't have an account?</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
});

module.exports = LoginPage;