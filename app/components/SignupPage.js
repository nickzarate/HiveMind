 'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var UsernameInput = require('./UsernameInput');
var PasswordInput = require('./PasswordInput');
var Line = require('./Line');
//var {Icon,} = require('react-native-icons');

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
var token2;

//EXAMPLE FOR GETTING A USERS CHARACTERISTCS : (age-range)

var fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
  if (error) {
    alert('Error making request.');
  } else {
    console.log(result);
  }
}, '/me/?fields=age_range');

//EXAMPLE FOR GETTING A USERS ACCESS TOKEN

FBSDKAccessToken.getCurrentAccessToken(token => {
  if (token) {
    token2 = token
  }
});
Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  Image,
  Navigator,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;


// <FBSDKLoginButton
//             onLoginFinished={(error, result) => {
//               if (error) {
//                 alert('Error logging in.');
//               } else {
//                 if (result.isCancelled) {
//                   alert('Login cancelled.');
//                 } else {
//                   //fetchFriendsRequest.start();
//                   this.props.navigator.push({id: 3});
//                 }
//               }
//             }}
//             // onLogoutFinished={}
//             readPermissions={['public_profile']}
//             publishPermissions={[]}
//           />

// <TouchableHighlight style={styles.button} onPress={this._handlePress}>
//             <Text style={styles.signUpButtonText}> Sign in with Email Address </Text>
//           </TouchableHighlight>



var SignupPage = React.createClass({

  _handlePress: function() {
    this.props.navigator.push({id: 2})
  },

  _handleFacebookPress: function() {
    //FBSDKLoginManager.setLoginBehavior(GlobalStore.getItem('behavior', 'native'));
    FBSDKLoginManager.logInWithReadPermissions([], (error, result) => {
      if (error) {
        alert('Error logging in.');
      } else {
        if (result.isCanceled) {
          alert('Login cancelled.');
        } else {
          this.props.navigator.push({id: 3});
        }
      }
    });
  },

  render: function() {
    return (
      <View>
        <View style={styles.smallYellowContainer}>
          <Text style={styles.titleText}> HIVEMIND </Text>
        </View>
        <View style={styles.smallBlackContainer}>
          <UsernameInput/>
          <PasswordInput/>
          <Text style={styles.disclosureText}>If you don't have an account we'll create one for you!</Text>

          <View style={styles.rowContainer}>
            <Image source={require('./line.png')} style={styles.leftLine}/>
            <Text style={styles.orText}> OR </Text>
            <Image source={require('./line.png')} style={styles.rightLine}/>
          </View>

          <TouchableHighlight style={styles.blueButton} onPress={this._handleFacebookPress}>
            <Text style={styles.signUpButtonTextBlue}> Sign in with Facebook </Text>
          </TouchableHighlight>

          
        </View>
      </View>
    );
  }
});

module.exports = SignupPage;