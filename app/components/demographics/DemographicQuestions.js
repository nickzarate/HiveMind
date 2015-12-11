'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');
var Demographic1 = require('./Demographic1');
var Demographic2 = require('./Demographic2');
var Demographic3 = require('./Demographic3');
var Demographic4 = require('./Demographic4');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var DemographicQuestions = React.createClass ({

  render: function() {
    var Component = Demographic1
    if (this.props.progressIndex === 2) {
      Component = Demographic2
    } else if (this.props.progressIndex === 3) {
      Component = Demographic3
    } else if (this.props.progressIndex === 4) {
      Component = Demographic4
    }
    return <Component style={styles.bodyView}/>
  }
});

module.exports = DemographicQuestions;