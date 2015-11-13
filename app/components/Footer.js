'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

var Footer = React.createClass ({

  previous: function() {
    this.props.onProgressChange(this.props.progressIndex - 1);
  },

  next: function() {
    this.props.onProgressChange(this.props.progressIndex + 1);
  },

  enterMain: function() {
    this.props.enterMain();
  },

  render: function() {
    console.log("in footer");
    if (this.props.progressIndex === 1) {
      return (
        <View style={styles.firstDemographic}>
          <TouchableHighlight style={styles.btn} onPress={this.next}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableHighlight>
        </View>
      );
    } else if (this.props.progressIndex < this.props.numBars) {
      console.log("progress index = not finished");
      return (
        <View style={styles.otherDemographic}>
          <TouchableHighlight style={styles.btn} onPress={this.previous}>
            <Text style={styles.buttonText}> PREV </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={this.next}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      console.log("progress index = finished");
      return (
        <View style={styles.otherDemographic}>
          <TouchableHighlight style={styles.btn} onPress={this.previous}>
            <Text style={styles.buttonText}> PREV </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={this.enterMain}>
            <Text style={styles.buttonText}> SUBMIT </Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
});

module.exports = Footer;