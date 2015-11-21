'use-strict'

var React = require('react-native');
var ProgressBar = require('./ProgressBar');
var DemographicQuestions = require('./DemographicQuestions');
var Footer = require('./Footer');
var styles=require('hivemind/app/Styles');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var EnterDemographics = React.createClass ({

  getInitialState: function() {
    return {
        progressIndex: 1,
    };
  },

  handleProgressChange: function(progressIndex) {
    this.setState({
      progressIndex: progressIndex,
    });
  },

  enterMain: function() {
    this.props.navigator.push({id: 4})
  },

  goBack: function() {
    this.props.navigator.pop()
  },

  render: function() {
    return (
      <View>
        <ProgressBar progressIndex={this.state.progressIndex} />
        <DemographicQuestions progressIndex={this.state.progressIndex} />
        <Footer progressIndex={this.state.progressIndex} numBars={4} onProgressChange={this.handleProgressChange} enterMain={this.enterMain} />
      </View>
    );
  }
});

module.exports = EnterDemographics;