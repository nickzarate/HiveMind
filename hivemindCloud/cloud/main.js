
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  console.log("in parse cloud function");
  response.success("Hello world!");
});

      //OUTSIDE FOR LOOP


              // INSIDE FOR LOOP
        

Parse.Cloud.define("analyzeRound", function(request, response) {

  //Desired arrays to be filled
  var x = [];
  var y = [];
  var p = [];
  var x_i = [];
  var y_i = [];
  var p_i = [];

  var user = request.user;
  var educationQuestion;

  var answerHistory = user.get("answerHistory");
  answerHistory.fetch({
    success: function(answerHistory) {
      var EducationRound = Parse.Object.extend("EducationRound");
      var educationRound = new EducationRound();
      educationRound.set("educationAnswers", answerHistory.get("latestEducationRound"));
      educationRound.save({
        success: function(educationRound) {
          answerHistory.add("educationData", educationRound);
          answerHistory.save({
            success: function(answerHistory) {
              var educationAnswers = educationRound.get("educationAnswers");
              for (var i = 0; i < educationAnswers.length; i++) {
                var educationAnswer = educationAnswers[i];
                var EducationAnswer = Parse.Object.extend("EducationAnswer");
                var query = new Parse.Query(EducationAnswer);
                query.get(educationAnswer.id, {
                  success: function(educationAnswer2) {
                    p_i.push(educationAnswer2.get("pointEstimate"));
                    p.push(p_i);
                    var EducationQuestion = Parse.Object.extend("EducationQuestion");
                    var query2 = new Parse.Query(EducationQuestion);
                    query2.get(educationAnswer2.get("educationQuestion").id, {
                      success: function(educationQuestion) {
                        var yearsEducation = educationQuestion.get("yearsEducation");
                        var yearsExperience = educationQuestion.get("yearsExperience");
                        var hourlyWage = educationQuestion.get("hourlyWage");
                        x_i.push(yearsEducation);
                        x_i.push(yearsExperience);
                        x.push(x_i);
                        y_i.push(hourlyWage);
                        y.push(y_i);
                        var phi = [];
              var xTranspose = transposeMatrix(x);
              var inverse = multiplyMatrix(xTranspose, x);
              inverse = inverseMatrix(inverse);
              //phi = multiplyMatrix(inverse, xTranspose);
              //phi = multiplyMatrix(phi * p);
              //getPhi(x, y, p);
              //phi = getPhi(x, y, p);
              response.success(inverse);
                      },
                      error: function(error) {
                      }
                    });
                  },
                  error: function(error) {
                  }
                });
                p_i = [];
                y_i = [];
                x_i = [];
              }

              var transposeMatrix = function(arr) {
                var matrix_i = [];
                var matrix = [];
                
                for (var j = 0; j < arr[0].length; j++) {
                  for (var k = 0; k < arr.length; k++) {
                    matrix_i.push(arr[k][j]);
                  }
                  matrix.push(matrix_i);
                  var matrix_i = [];
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
                var matrix_iArray = [];
                position = 0;

                for (var l = 0; l < arr1.length; l++) {
                  for (var k = 0; k < arr2[0].length; k++) {
                    for (var j = 0; j < arr1[0].length; j++) {
                      position += arr1[l][j] * arr2[j][k];
                    }
                    matrix_i.push(position);
                    position = 0;
                  }
                  matrix.push(matrix_i);
                  var matrix_i = [];
                }
                return matrix;
              };


              //response.success(x);
              


              

            },
            error: function(error) {
              response.error("failed");
            }
          });
        },
        error: function(error) {
          response.error("failed");
        }
      });
    },
    error: function(error) {
      response.error("failed");
    },
  });
});