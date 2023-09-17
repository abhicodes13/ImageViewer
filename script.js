var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(){
    fullImgBox.style.display="flex";
    fullImg.src=pic; 
}

function closeFullImg(){
fullImgBox.style.display="none";
}