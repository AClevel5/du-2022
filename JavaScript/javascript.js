
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style="height:350px; width:350px; background-color:orange; margin:25px";
});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = 'blue';
});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity += 0.5;
});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px"
});
