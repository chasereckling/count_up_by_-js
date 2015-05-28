var countBy = function(number1, number2) {
  var new_array = [];
  for (var index = number2; index <= number1; index += number2) {
    new_array.push(index);
  }
    return new_array
};
