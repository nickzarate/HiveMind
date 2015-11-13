'use-strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var SignupPage = require('./app/components/SignupPage');
var EnterLoginInformation = require('./app/components/EnterLoginInformation');
var EnterDemographics = require('./app/components/EnterDemographics');
var MainPage = require('./app/components/MainPage');
var styles=require('hivemind/app/Styles');

Parse.initialize("JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK", "Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5");

var {
  Text,
  View,
  Component,
  Navigator,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
} = React;

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
    } else if (route.id === 4) {
      Component = MainPage
    }
    return <Component navigator={nav}/>
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
