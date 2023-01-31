var photos = []; //empty array to store image element
var fileNames = []; //store image file names
var imageList = []; //store html list that contains an image
var image; //store the assembled image list codes
var openList = "<li class='photo'>";
var closeList = "</li>";
//Lab assignment
//var openCaptionTag = ;
//var cloaseCaptionTag =  ;
//var openDescTag = ;
//var closeDescTag = ;
//captionTexts = ''
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