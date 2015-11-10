'use-strict'

var React = require('react-native');
var Parse = require('parse/react-native');

//var Parse = require('parse').Parse;
//var ParseReact = require('parse-react');
//var Test = require('./Test2');

Parse.initialize("8ZueyV5UhsgHnpXH4vtzdVaHGsTV6LInmaQBMNhi", "QB8RQclB0LpKANbkXrLzDHOf7ss3GfMnjuzossH8");

var yellow = '#EDF518';
var black = '#202100';
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

var styles=StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black,
	},
	backButton: {
		backgroundColor: black,
	    borderRadius: 15,
	    borderWidth: 0,
	    padding: 5,
	    width: 110,
	    height: 60
	},
	back: {
		fontFamily: 'marker felt',
		fontWeight: 'bold',
		fontSize: 30,
		color: yellow,
		backgroundColor: black,
		height: 60
	},
	input: {
		backgroundColor: yellow,
	    borderRadius: 15,
	    borderWidth: 1,
	    paddingHorizontal: 15,
	    marginTop: 30,
	    marginBottom: 60,
	    height: 50,
	    fontFamily: 'marker felt',
	    fontWeight: 'bold',
	    fontSize: 26,
	},
});

var EnterLoginInformation = React.createClass ({

	getInitialState: function() {
		return (
			this.state = {
				username: '',
				email: '',
				password: '',
			}
		);
	},

	goBack: function() {
		this.props.navigator.pop();
	},

	handleEmailChange: function(event) {
		this.setState ({
			username: event.nativeEvent.text
		});
	},

	handlePasswordChange: function(event) {
		this.setState ({
			password: event.nativeEvent.text
		});
	},

	successful: function() {
		console.log("before push");
		this.props.navigator.push({id: 3})
		console.log("after push");
	},

	captureUser: function() {

		var user = new Parse.User();
		user.set("username", this.state.username);
		user.set("email", this.state.username);
		user.set("password", this.state.password);
		//this.props.navigator.push({id: 3});

		user.signUp(null, {
			success(user) {
			},
			error(user, error) {
			    alert("Error: " + error.code + " " + error.message);
			    success={false};
			}
		});
		if (success) {
			this.props.navigator.push({id: 3});
		}
	},

	render: function() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.backButton} onPress={this.goBack}>
					<Text style={styles.back}> BACK </Text>
				</TouchableHighlight>
				<TextInput
					style={styles.input}
					placeholder=' Email'
					value={this.state.username}
					onChange={this.handleEmailChange}
					autoFocus={true}
					enablesReturnKeyAutomatically={true}
					selectTextOnFocus={true}
					keyboardType={'email-address'} />

				<TextInput
					style={styles.input}
					placeholder=' Password'
					onSubmitEditing={this.captureUser}
					value={this.state.password}
					onChange={this.handlePasswordChange}
					enablesReturnKeyAutomatically={true}
					selectTextOnFocus={true}
					secureTextEntry={true} />
				<Text style={styles.back}>{this.state.username}</Text>
				<Text style={styles.back}>{this.state.password}</Text>
			</View>
		);
	}
});

module.exports = EnterLoginInformation;