 'use-strict'

var React = require('react-native');
//var EnterEmailAddress = require('./EnterEmailAddress2');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var styles=require('hivemind/app/Styles');

var FBSDKLogin = require('hivemind/node_modules/react-native-fbsdklogin');
var {
  FBSDKLoginButton
} = FBSDKLogin;
var FBSDKCore = require('hivemind/node_modules/react-native-fbsdkcore');
var {
  FBSDKAccessToken
} = FBSDKCore;

Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  View,
  Text,
  Navigator,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;




// Parse.FacebookUtils.init({ // this line replaces FB.init({
//       appId      : '520219378144945', // Facebook App ID
//       status     : true,  // check Facebook Login status
//       cookie     : true,  // enable cookies to allow Parse to access the session
//       xfbml      : true,  // initialize Facebook social plugins on the page
//       version    : 'v2.5' // point to the latest Facebook Graph API version
//     });
//     Parse.FacebookUtils.logIn(null, {
//       success: function(user) {
//         if (!user.existed()) {
//           alert("User signed up and logged in through Facebook!");
//         } else {
//           alert("User logged in through Facebook!");
//         }
//       },
//       error: function(user, error) {
//         alert("User cancelled the Facebook login or did not fully authorize.");
//       }
//     });

 // <TouchableHighlight style={styles.button} onPress={this.loginWithFacebook}>
 //            <Text style={styles.signUpButtonText}> Sign in with Facebook </Text>
 //          </TouchableHighlight>

 




var SignupPage = React.createClass({

  _handlePress: function() {
    this.props.navigator.push({id: 2})
  },

  login: function() {
    console.log("sign in with facebook!");
  },

  loginWithFacebook: function() {
    
  },

  render: function() {
    return (
      <View>
        <View style={styles.smallYellowContainer}>
          <Text style={styles.titleText}> HIVEMIND </Text>
        </View>
        <View style={styles.smallBlackContainer}>
          <FBSDKLoginButton
           onLoginFinished={(error, result) => {
             if (error) {
               alert('Error logging in.');
             } else {
               if (result.isCancelled) {
                 alert('Login cancelled.');
               } else {
                 alert('Logged in.');
               }
             }
           }}
           onLogoutFinished={() => alert('Logged out.')}
           readPermissions={['public_profile']}
           publishPermissions={[]} />

          <TouchableHighlight style={styles.button} onPress={this._handlePress}>
            <Text style={styles.signUpButtonText}> Sign in with Email </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

module.exports = SignupPage;