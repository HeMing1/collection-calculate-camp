'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var evenCollection =[];
  collection.forEach(function (item){
    if(item%2==0){
      evenCollection.push(item);
    }
  })
  return evenCollection;
}

module.exports = collect_all_even;
