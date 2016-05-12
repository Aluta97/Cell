module.exports = function() {

  person1 =  "Walter sent: It was 67MB. Is that everything? I’m busy, you know.";
  person2 =  "Jesse sent: Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
  person3 =  "Saul sent: I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
  person4 =  "Gus sent: Around 150MB. I have the receipts if you need more precise figures.";



var person1 =  person1.replace(" sent", " ")
                      .replace("It was", " ")
                      .replace("MB", "")
                      .replace(" :  ", "")
                      .split(".");
    // console.log(person1);

var person2 = person2.replace(" sent", " ")
                      .replace("Damn,", " ")
                      .replace("  it was like", " ")
                      .replace("MB", "")
                      .replace(" :  ", "")
                      .split(".");
    // console.log(person2)

var person3 = person3 .replace(" sent", " ")
                      .replace("I think", " ")
                      .replace("MB", "")
                       .replace(" :  ", "")
                      .split(".");
      // console.log(person3)


var person4 = person4.replace(" sent", " ")
                      .replace("Around", " ")
                      .replace("MB", "")
                       .replace(" :  ", "")
                      .split(".");

    // console.log(person4)

var data = [];

//pushing every index into an array
data.push(person1[0],
        person2[0],
        person3[0],
        person4[0]
      );
 //console.log(data);

var arr = [];

 data = data.map(function(part){
    var newPart = part.split(" ");
  //  console.log(newPart);

       arr.push({
         name : newPart[0],
         MB : Number(newPart[1])
       });  //  }
  });
//  console.log(arr);

  var min = 0;
  var names = "";
  arr.forEach(function(bytes){
    //console.log(bytes.MB);
      var newData = bytes.MB;
      var newNames = bytes.name;
       // console.log(newNames);
    if(newData > min){
       min = newData;
       names = newNames;
     }

  });
      // console.log(names);
  //     return names;

}
