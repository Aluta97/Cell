module.exports = function(most){

  var min = 0;
   var names = "";
    most.forEach(function(bytes){
      //console.log(bytes.MB);
        var newData = bytes.MB;
        var newNames = bytes.name;
         // console.log(newNames);
      if(newData > min){
         min = newData;
         names = newNames;
       }

    });
      //   console.log(names);
            return names;
}
