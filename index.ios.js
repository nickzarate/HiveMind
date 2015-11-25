'use-strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
var LoginPage = require('./app/components/LoginPage');
var EnterDemographics = require('./app/components/EnterDemographics');
var MainPage = require('./app/components/MainPage');
var HealthHome = require('./app/components/HealthHome');
var EducationHome = require('./app/components/EducationHome');
var HealthQuestion = require('./app/components/HealthQuestion');
var SignUpPage = require('./app/components/SignUpPage');
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
    var Component = LoginPage
    
    if (route.id === 2) {
      Component = SignUpPage
    } else if (route.id === 3) {
      Component = EnterDemographics
    } else if (route.id === 4) {
      Component = MainPage
    } else if (route.id === 5) {
      Component = HealthHome
    } else if (route.id === 6) {
      Component = EducationHome
    } else if (route.id === 7) {
      Component = HealthQuestion
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
