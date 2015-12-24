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

  startRound: function(category) {
    if (category === 1) {
      this.props.navigator.push({id: 'health question'})
    } else if (category === 2) {
      this.props.navigator.push({
        id: 'education question',
        count: 1,
        newRound: true,
      })
    }
  },

  switchScreen: function(mainScreen) {
    this.setState ({
      mainScreen: mainScreen,
    });
  },

  render: function() {
    var Component = HomeScreen;
    if (this.state.mainScreen === 'more') {
      Component = BarScreen;
    }
    return (
      <View>
        <Component category={this.startRound}/>
        <MainPageFooter mainScreen={this.state.mainScreen} onScreenChange={this.switchScreen}/>
      </View>
    );
  }
});

module.exports = MainPage;