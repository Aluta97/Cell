// store all the sentences as indexs of and array
// like this ["Lusindiso : 100MB .", Lolito : 400MB ",]
//use array to map data
//use math to get the biggest
//loop through your loop to get the max




person1 =  "Walter sent: It was 67MB. Is that everything? I’m busy, you know."
person2 =  "Jesse sent: Damn, it was like 300MB. Dat Snaptalk is a data hog, yo."
person3 =  "Saul sent: I think 283MB. That’s what the guy at the store said. I think it means MegaBites."
person4 =  "Gus sent: Around 150MB. I have the receipts if you need more precise figures."



var person1 =  person1.replace(" sent", " ")
                      .replace("It was", " ")
                      .split(".")
    // console.log(person1);

var person2 = person2.replace(" sent", " ")
                      .replace("Damn,", " ")
                      .replace("it was like", " ")
                      .split(".");
    // console.log(person2)

var person3 = person3 .replace(" sent", " ")
                      .replace("I think", " ")
                      .split(".");
      // console.log(person3)


var person4 = person4.replace(" sent", " ")
                      .replace("Around", " ")
                      .split(".");

    // console.log(person4)

var people = [person1, person2, person3, person4];
          // console.log(people);


var data = [];

for (var i = 0; i < people.length; i++){
//printing out only the indexes

  // var walter = person1[0]
  // var jesse = person2[0]
  // var saul = person3[0]
  // var gus = person4[0]
}
//Printing index 0 of every Array

// console.log(person1[0]);
// console.log(person2[0]);
// console.log(person3[0]);
// console.log(person4[0]);

//pushing every index into an array
data.push(person1[0],
        person2[0],
        person3[0],
        person4[0]
      );
 console.log(data);

//create my variables for the apps

var tooter = 2;
var faceblock = 2;
var instantgam = 3;
var snaptalk = 6;
var lankedOn = 1;

 //loop through my Array of data used by each person;

data.forEach(function(ad){
      console.log(ad)


})

//check which person used which app and compare
var walter = "Walter sent: “Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones."
var jesse = "Jesse sent: “Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”"
var saul = "Saul sent: I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands."
var gus = "Gus sent: “I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there."
