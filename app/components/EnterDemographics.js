'use-strict'

var React = require('react-native');
var ProgressNode = require('./ProgressNode');
//var Parse = require('parse').Parse;
//var ParseReact = require('parse-react');

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
	bodyView: {
		flex: 1,
		backgroundColor: black,
    height: 800,
	},
  headerView: {
    flexDirection: 'row',
    flex: 1,
  },

	backButton: {
		backgroundColor: black,
    borderRadius: 15,
    borderWidth: 0,
    padding: 5,
    width: 110,
    height: 60
	},
	back: {
		fontFamily: 'marker felt',
		fontWeight: 'bold',
		fontSize: 30,
		color: yellow,
		backgroundColor: black,
		alignSelf: 'center',
	},
});

var EnterDemographics = React.createClass ({

	goBack: function() {
		this.props.navigator.pop();
	},

  stateNum: function() {
    return 3;
  },

	render: function() {
		return (
      <View>
        <View style={styles.headerView}>
          <ProgressNode>
          </ProgressNode>
          <ProgressNode>
          </ProgressNode>
          <ProgressNode>
          </ProgressNode>
          <ProgressNode>
          </ProgressNode>
          <ProgressNode>
          </ProgressNode>
          <ProgressNode>
          </ProgressNode>
        </View>
        <View style={styles.bodyView}>
				  <TouchableHighlight style={styles.backButton} onPress={this.goBack}>
            <Text style={styles.back}> BACK </Text>
				  </TouchableHighlight>
				  <Text style={styles.back}>Successfully created a new user!</Text>
        </View>
      </View>
		);
	}
});

module.exports = EnterDemographics;