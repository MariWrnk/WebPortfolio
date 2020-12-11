window.onload = function() {
    var popUpCont = document.getElementById("popUpCont")
    var open = document.getElementById("cont_button")
    var close = document.getElementById("cont_close")
    
    open.onclick = function() {
        popUpCont.style.display = "block"
    }

    close.onclick = function() {
        popUpCont.style.display = "none"
    }

    var avatar = document.getElementById("avatar")

    avatar.onclick = function() {
        if (avatar.getAttribute("src") == "resources/image.png") {
            avatar.setAttribute("src", "resources/face.png")
        }
        else{
            if(avatar.getAttribute("src") == "resources/face.png"){
                avatar.setAttribute("src", "resources/kot.jpg")
            }
            else{
                avatar.setAttribute("src", "resources/image.png")
            }
        }    
        
    }
  
}