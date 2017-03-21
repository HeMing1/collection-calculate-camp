'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var dValue = number_a - number_b;
  var result = [];
  for (var i = 0; i < Math.abs(dValue) + 1; i++) {
    result.push(number_a - i * (dValue / Math.abs(dValue) || 0));
  }
  return result;
}

function get_integer_interval1(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a<number_b){
    for(var i = number_a;i<=number_b;i++){
      result.push(i);
    }
  }else{
    for(var i = number_a;i>=number_b;i--){
      result.push(i);
    }
  }
  return result;
}


module.exports = get_integer_interval;

