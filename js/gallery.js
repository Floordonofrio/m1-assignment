var photos = []; //empty array to store image element
var fileNames = []; //store image file names
var imageList = []; //store html list that contains an image
var image; //store the assembled image list codes
var openList = "<li class='photo'>";
var closeList = "</li>";
//Lab assignment
var openCaptionTag = "<p id='paragraph-below'";
var closeCaptionTag = "</p>" ;
//var openDescTag = ;
//var closeDescTag = ;
captionTexts = ["Picture1", "Picture2", "Picture3","Picture4", "Picture5", "Picture6","Picture7", "Picture8", "Picture9","Picture10"];
text = [];
textList = [];
//descTexts = ''

//Create a loop to create 6 images satarting with index of 0
for (var i=0; i<10; i++){
    fileNames.push("dog" + (i+1)); //creat image files names ans store in the array
    photos.push("<img src='images/" + fileNames[i] + ".jpg' width=400 height=400'>" ); //assembly file naes and store it in the array
    image = openList + photos[i] + closeList; //assembly image element and store in variable
    imageList.push(image);
}
//Display all six image codes store in the array
document.getElementById("gallery").innerHTML = imageList.join("");

for (var i=0; i<10; i++){
    text = openCaptionTag + captionTexts[i] + closeCaptionTag;
    textList.push(text);
}
document.getElementById("gallery").innerHTML = textList.join("");