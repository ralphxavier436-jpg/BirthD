function unlock(){

    let age = document.getElementById("ageInput").value;
    
    if(age && age > 0){
    
    document.getElementById("ageScreen").style.display = "none";
    
    document.getElementById("mainPage").style.display = "block";
    
    document.getElementById("bgMusic").play();
    
    }else{
    
    alert("Enter your age ❤️");
    
    }
    
    }
    
    function openLetter(){
    
    document.getElementById("letterBox").style.display="block";
    
    }
    
    /* floating background */
    
    const floating = document.querySelector(".floating")
    
    const emojis = ["⭐","✨","🎂","🎉","🌟","🍰"]
    
    for(let i=0;i<40;i++){
    
    let span = document.createElement("span")
    
    span.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
    
    span.style.left = Math.random()*100 + "vw"
    
    span.style.fontSize = (20 + Math.random()*25) + "px"
    
    span.style.animationDuration = (6 + Math.random()*10) + "s"
    
    floating.appendChild(span)
    
    }