'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var BeesWax = require('./BeesWax');

var {
  View,
} = React;

var BeesWaxHeader = React.createClass ({

  render: function() {
    if (this.props.numWax > 5) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax > 4) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax > 3) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax > 2) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax > 1) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax > 0) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
        </View>
      );
    } else {
      return (
        <View style={styles.beesWaxHeader}/>
      );
    }
  }
});

module.exports = BeesWaxHeader;