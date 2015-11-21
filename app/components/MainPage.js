'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');
var MainPageFooter = require('./MainPageFooter');
var HomeScreen = require('./HomeScreen');
var BarScreen = require('./BarScreen');

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var MainPage = React.createClass ({
  getInitialState: function() {
    return {
      mainScreen: 'home',
    };
  },

  switchToCategory: function(category) {
    if (category === 1) {
      this.props.navigator.push({id: 5})
    } else if (category === 2) {
      this.props.navigator.push({id: 6})
    }
  },

  switchScreen: function(mainScreen) {
    this.setState ({
      mainScreen: mainScreen,
    });
  },

  render: function() {
    var Component = HomeScreen;
    if (this.state.mainScreen === 'bar') {
      Component = BarScreen;
    }
    return (
      <View>
        <Component health={this.switchToCategory}/>
        <MainPageFooter mainScreen={this.state.mainScreen} onScreenChange={this.switchScreen}/>
      </View>
    );
  }
});

module.exports = MainPage;