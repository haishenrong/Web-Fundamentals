console.log("page loaded...");

const btnPress = (element) => {
    var likes = document.getElementById(element.id).innerHTML;
    var space = likes.indexOf(" ");
    var numLikes = parseInt(likes.substring(0,space))+1;
    document.getElementById(element.id).innerHTML = numLikes+likes.substring(space);
}