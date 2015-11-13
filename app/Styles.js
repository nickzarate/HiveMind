'use-strict'
var React = require('react-native');
var yellow = '#EDF518';
var black = '#202100';

var {
  StyleSheet,
} = React


var Styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  blackContainer: {
    flex: 1,
    height: 800,
    backgroundColor: black,
  },
  bodyView: {
    flex: 1,
    backgroundColor: black,
    height: 650,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    fontFamily: 'marker felt',
    fontWeight: 'bold',
    fontSize: 30,
    color: yellow,
    backgroundColor: black,
    alignSelf: 'center',
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
  icon: {
    height: 15,
    width: 15,
  },
  input: {
    backgroundColor: yellow,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 60,
    height: 50,
    fontFamily: 'marker felt',
    fontWeight: 'bold',
    fontSize: 26,
  },
  firstDemographic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: black,
    height: 100,
  },
  otherDemographic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: black,
    height: 100,
  },
  buttonText: {
    fontFamily: 'marker felt',
    fontWeight: 'bold',
    fontSize: 30,
    color: yellow,
    backgroundColor: black,
    height: 60
  },
  btn: {
    backgroundColor: black,
    borderRadius: 15,
    borderWidth: 0,
    padding: 5,
    width: 150,
    height: 60,
    alignItems: 'center',
  },
  activated: {
    flex: 1,
    height: 25,
    borderWidth: 3,
    borderColor: black,
    backgroundColor: yellow,
  },
  deactivated: {
    flex: 1,
    height: 25,
    borderWidth: 1,
    borderColor: yellow,
    backgroundColor: black,
  },
  titleText: {
    fontSize: 75,
    color: black,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
    fontFamily: 'marker felt'
  },
  smallYellowContainer: {
    backgroundColor: yellow,
    alignItems: 'center',
  },
  smallBlackContainer: {
    backgroundColor: black,
    alignItems: 'center',
    height: 600,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: yellow,
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
    marginTop: 60,
    marginBottom: 60,
  },
  signUpButtonText: {
    fontSize: 28,
    color: black,
    backgroundColor: yellow,
    fontFamily: 'marker felt',
  },
});

module.exports = Styles;