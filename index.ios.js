'use-strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react');
//var EnterDemographics = require('./app/components/demographics/EnterDemographics');
var styles = require('hivemind/app/Styles');

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
    //Default Component
    var Component = require('./app/components/login/LoginPage')
    
    if (route.id === 'signup') {
      Component = require('./app/components/SignUpPage')
    } else if (route.id === 'home') {
      Component = require('./app/components/home/MainPage')
    } else if (route.id === 'health home') {
      Component = require('./app/components/health/HealthHome')
    } else if (route.id === 'education home') {
      Component = require('./app/components/education/EducationHome')
    } else if (route.id === 'health question') {
      Component = require('./app/components/health/HealthQuestion')
    } else if (route.id === 'education question') {
      Component = require('./app/components/education/EducationQuestion')
    } else if (route.id === 'education stats') {
      Component = require('./app/components/education/EducationStats')
    }
    return <Component navigator={nav} router={route}/>
  },

  render: function() {
    var currentUser = Parse.User.currentAsync();
    if (currentUser) {
      return (
        <Navigator
          initialRoute={{id: 'home'}}
          renderScene={this._renderScene} />
      );
    } else {
      return (
        <Navigator
          initialRoute={{id: 'login'}}
          renderScene={this._renderScene} />
      );
    }
  }
});


AppRegistry.registerComponent('hivemind', () => hivemind);
