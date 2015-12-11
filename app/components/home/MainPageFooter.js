'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

var MainPageFooter = React.createClass ({
  switchToBar: function() {
    this.props.onScreenChange('bar');
  },

  switchToHome: function() {
    this.props.onScreenChange('home');
  },

  render: function() {
    if (this.props.mainScreen === 'home') {
      return (
        <View style={styles.mainPageFooter}>
          <View style={styles.mainPageFooter}>
            <Text style={styles.back}> HOME </Text>
          </View>
          <View style={styles.mainPageFooter}  onPress={this.switchToBar}>
            <Image source={require('image!deactivatedMore')} style={styles.more} onPress={this.switchToBar}/>
          </View>
        </View>
      );
    } else if (this.props.mainScreen === 'bar') {
      return (
        <View style={styles.mainPageFooter}>
          <View style={styles.mainPageFooter}>
            <Text style={styles.unchosen} onPress={this.switchToHome}> HOME </Text>
          </View>
          <View style={styles.mainPageFooter}>
            <Image source={require('image!activatedMore')} style={styles.more}/>
          </View>
        </View>
      );
    }
  }
});

module.exports = MainPageFooter;