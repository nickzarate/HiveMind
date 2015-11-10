'use-strict'

var React = require('react-native');

var yellow = '#EDF518';
var black = '#202100';

var {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight,
} = React;

var styles=StyleSheet.create({
	container: {
    flex: 1,
	},
  progress: {
    height: 25,
    borderWidth: 3,
    borderColor: black,
    backgroundColor: yellow,
  }
});

var ProgressNode = React.createClass ({

	render: function() {
		return (
      <View style={styles.container}>
        <View style={styles.progress}>
        </View>
      </View>
		);
	}

});

module.exports = ProgressNode;