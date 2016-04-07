// store all the sentences as indexs of and array
// like this ["Lusindiso : 100MB .", Lolito : 400MB ",]
//use map to map data
//use match to get the name
//use match for the digits.
//loop through your map to get the max




person1 =  "Walter sent: It was 67MB. Is that everything? I’m busy, you know."
person2 =  "Jesse sent: Damn, it was like 300MB. Dat Snaptalk is a data hog, yo."
person3 =  "Saul sent: I think 283MB. That’s what the guy at the store said. I think it means MegaBites."
person4 =  "Gus sent: Around 150MB. I have the receipts if you need more precise figures."



var person1 =  person1.replace(" sent", " ")
                      .replace("It was", " ")
                      .split(".")
    console.log(person1);

var person2 = person2.replace(" sent", " ")
                      .replace("Damn,", " ")
                      .replace("it was like", " ")
                      .split(".");
    console.log(person2)

var person3 = person3 .replace(" sent", " ")
                      .replace("I think", " ")
                      .split(".");
      console.log(person3)


var person4 = person4.replace(" sent", " ")
                      .replace("Around", " ")
                      .split(".");
    console.log(person4)

for (var i = 0; i < person1.length; i++){
//printing out only the indexes
        console.log(person1[0])
        console.log(person2[0])
        console.log(person3[0])
        console.log(person4[0]);


}
