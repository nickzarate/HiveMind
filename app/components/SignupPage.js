 'use-strict'

var React = require('react-native');
//var EnterEmailAddress = require('./EnterEmailAddress2');

var FBSDKLogin = require('hivemind/node_modules/react-native-fbsdklogin');

var {
  FBSDKLoginButton
} = FBSDKLogin;

var FBSDKCore = require('hivemind/node_modules/react-native-fbsdkcore');
var {
  FBSDKAccessToken
} = FBSDKCore;


var yellow = '#EDF518';
var black = '#202100';

var {
	View,
	Text,
  Navigator,
	TextInput,
	StyleSheet,
	TouchableHighlight,
} = React;

var styles=StyleSheet.create({
	container: {
		flex: 25,
		backgroundColor: yellow,
		alignItems: 'center',
	},
	lowerContainer: {
		flex: 75,
		backgroundColor: black,
		alignItems: 'center',
		height: 600,
		justifyContent: 'center',
	},
	button: {
    backgroundColor: yellow,
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
    marginTop: 60,
    marginBottom: 60,
	},
	buttonText: {
		fontSize: 28,
		color: black,
		backgroundColor: yellow,
		fontFamily: 'marker felt',
	},
	titleText: {
		fontSize: 75,
		color: black,
		fontWeight: 'bold',
		marginTop: 40,
		marginBottom: 40,
		fontFamily: 'marker felt'
	},
});

var SignupPage = React.createClass({

	_handlePress: function() {
		this.props.navigator.push({id: 2})
	},

	login: function() {
		console.log("sign in with facebook!");
	},

	render: function() {
		return (
			<View>
				<View style={styles.container}>
					<Text style={styles.titleText}> HIVEMIND </Text>
				</View>
				<View style={styles.lowerContainer}>

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
          readPermissions={[]}
          publishPermissions={['publish_actions']} />


					<TouchableHighlight style={styles.button} onPress={this._handlePress}>
						<Text style={styles.buttonText}> Sign in with Email </Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
});

module.exports = SignupPage;