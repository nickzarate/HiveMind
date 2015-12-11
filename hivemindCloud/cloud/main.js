
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  console.log("in parse cloud function");
  response.success("Hello world!");
});

Parse.Cloud.define("analyzeRound", function(request, response) {
  var buildMatrices = function() {

    //Desired arrays to be filled
    var y = [];
    var y_i = [];
    var x = [];
    var x_i = [];
    var p = [];
    var p_i = [];

    var user = Parse.User.currentAsync();
    var educationRound = user.get("answerHistory").get("latestEducationRound");
    var educationAnswer;
    var educationQuestion;

    for (var i = 0; i < educationRound.length; i++) {
      educationAnswer = educationRound[i];
      p_i.push(educationAnswer.get("pointEstimate"));
      p.push(p_i);
      educationQuestion = educationAnswer.get("educationQuestion");
      x_i.push(educationQuestion.get("yearsEducation"));
      x_i.push(educationQuestion.get("yearsExperience"));
      x.push(x_i);
      y_i.push(educationQuestion.get("hourlyWage"));
      y.push(y_i);
    }
  };

  var transposeMatrix = function(arr) {
    var matrix_i = [];
    var matrix = [];
    
    for (var j = 0; j < arr[0].length; j++) {
      for (var k = 0; k < arr.length; k++) {
        matrix_i.push(arr[k][j]);
      }
      matrix.push(matrix_i);
      matrix_i.length = 0;
    }
    return matrix;
  };

  var inverseMatrix = function(arr) {
    var det1 = arr[0][0] * arr[1][1];
    var det2 = arr[1][0] * arr[0][1];
    var dividend = det1 - det2;

    var temp = arr[0][0];
    arr[0][0] = arr[1][1];
    arr[1][1] = temp;
    arr[0][1] = -arr[0][1];
    arr[1][0] = -arr[1][0];

    arr = divideMatrix(arr, dividend);

    return arr;
  };

  var divideMatrix = function(arr, dividend) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        arr[i][j] = arr[i][j] / dividend;
      }
    }
    return arr;
  };

  var multiplyMatrix = function(arr1, arr2) {
    var matrix = [];
    var matrix_i = [];
    position = 0;

    for (var l = 0; l < arr1.length; l++) {
      for (var k = 0; k < arr2[0].length; k++) {
        for (var j = 0; j < arr1[0].length; j++) {
          position += arr1[l][j] * arr2[j][k];
        }
        matrix_i.push(position);
      }
      matrix.push(matrix_i);
      matrix_i.length = 0;
    }
    return matrix;
  };

  var testMatrix = [
    [2,4],
    [2,6],
  ];
  test = divide(test, 2);
  for (var i = 0; i < test.length; i++) {
    console.log(test[i]);
  }

  response.success(test);

});