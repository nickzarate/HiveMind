'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var SignupPage = require('./app/components/SignupPage');
var EnterLoginInformation = require('./app/components/EnterLoginInformation');
var EnterDemographics = require('./app/components/EnterDemographics');

Parse.initialize("8ZueyV5UhsgHnpXH4vtzdVaHGsTV6LInmaQBMNhi", "QB8RQclB0LpKANbkXrLzDHOf7ss3GfMnjuzossH8");


var {
  Text,
  View,
  Component,
  Navigator,
  StyleSheet,
  AppRegistry,
  
  TouchableHighlight,
} = React;

var styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});


var hivemind = React.createClass ({
    mixins: [ParseReact.Mixin],

    observe: function(props, state) {

    },
  
  _renderScene: function(route, nav) {
    var Component = SignupPage
    if (route.id === 2) {
      Component = EnterLoginInformation
    } else if (route.id === 3) {
      Component = EnterDemographics
    }
    return <Component navigator={nav} />
  },

  render: function() {
    var currentUser = Parse.User.currentAsync();
     if (currentUser) {
       return (
         <Navigator
           initialRoute={{id: 1}}
           renderScene={this._renderScene} />
       );
     } else {
      return (
        <Navigator
          initialRoute={{id: 1,}}
          renderScene={this._renderScene} />
      );
    }
  }
});


AppRegistry.registerComponent('hivemind', () => hivemind);
