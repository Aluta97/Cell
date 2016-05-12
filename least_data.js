module.exports = function(least){


  var max = 10000;
   var names2 = "";
   least.forEach(function(byte){
     //console.log(bytes.MB);
       var newData = byte.MB;
       var newNames = byte.name;
        // console.log(newNames);
     if(newData < max){
        max = newData;
        names2 = newNames;
      }

   });
        return(names2);

}
