function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video controls id=\"the_Video\"><source src=\""+theLink+"\"></video>";
    document.getElementById("video_pop").style.display="block";
} 

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = "";
    location.reload();
}