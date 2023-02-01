var photos = []; //empty array to store image element
var fileNames = []; //store image file names
var imageList = []; //store html list that contains an image
var image; //store the assembled image list codes
var openList = "<li class='photo'>";
var closeList = "</li>";
//Lab assignment
var openCaptionTag = "<p id='paragraph-below'>";
var closeCaptionTag = "</p>" ;
captionTexts = ["Tom and Jerry", "Rufus", "Fiona","Bimbo", "Emma", "Blue","Butter", "Orange", "Elmo","Black"];
text = [];
textList = [];
wholeText_Imagelist = [];
//Hover
openHover = "<div class='hoverimage'><p id='paragraph-hover'>"
closeHover = "</p></div>"
hoverText = ["Hi! we are friendly and like to play", "I like to take looong naps","I like playing with my toys and with humans too", "I know I am tiny but I have a lot of energy","I am a little bit old but I will be good company","I like starying at people for long hours","Hi, I am Butter, I do not like my name very much, I think it does not represent my intelectuality","I like playing with humans, cats, dogs, everything","I like when humans pet me", "Hi I am Black, and I like to sleep, a lot"]


//Create a loop to create 6 images satarting with index of 0
for (var i=0; i<10; i++){
    fileNames.push("dog" + (i+1)); //creat image files names ans store in the array
    photos.push("<img src='images/" + fileNames[i] + ".jpg' width=250 height=250'>" ); //assembly file naes and store it in the array
    image = openList + photos[i] + openCaptionTag + captionTexts[i] + closeCaptionTag + openHover+ hoverText[i] + closeHover + closeList; //assembly image element and store in variable
    imageList.push(image);
}
//Display all six image codes store in the array
document.getElementById("gallery").innerHTML = imageList.join("");




