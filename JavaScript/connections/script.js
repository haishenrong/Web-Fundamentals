console.log("page loaded...");

const changeUser = () => {
    var user = document.getElementById("username").innerHTML;
    user === "Jane Doe" 
    ? document.getElementById("username").innerHTML="John Smith"
    : document.getElementById("username").innerHTML="Jane Doe"
}

const acceptFriend = (element) => {
    console.log(element.id);
    document.getElementById(element.id).style.display="none";
    var connections = document.querySelector(".notif").innerHTML;
    document.querySelector(".notif").innerHTML = parseInt(connections)-1;
    document.querySelectorAll(".notif")[1].innerHTML = parseInt(document.querySelectorAll(".notif")[1].innerHTML)+1;

}

const rejectFriend = (element) => {
    console.log(element.id);
    document.getElementById(element.id).style.display="none";
    var connections = document.querySelector(".notif").innerHTML;
    document.querySelector(".notif").innerHTML = parseInt(connections)-1;
}

/*
const btnPress = (element) => {
    var likes = document.getElementById(element.id).innerHTML;
    var space = likes.indexOf(" ");
    var numLikes = parseInt(likes.substring(0,space))+1;
    document.getElementById(element.id).innerHTML = numLikes+likes.substring(space);
}*/