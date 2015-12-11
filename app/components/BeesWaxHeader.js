'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var BeesWax = require('./BeesWax');

var {
  View,
} = React;


    // var beesWaxRows = [];
    // for (let i in this.props.numWax) {
    //   beesWaxRows.push(
    //     <BeesWax/>
    //   );
    // }

    // return(
    //   <View style={styles.beesWaxHeader}>
    //     {beesWaxRows}
    //   </View>
    // );


var BeesWaxHeader = React.createClass ({

  render: function() {
    if (this.props.numWax === 11) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 10) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 9) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 8) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 7) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 6) {
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
    } else if (this.props.numWax === 5) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 4) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 3) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 2) {
      return (
        <View style={styles.beesWaxHeader}>
          <BeesWax/>
          <BeesWax/>
        </View>
      );
    } else if (this.props.numWax === 1) {
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