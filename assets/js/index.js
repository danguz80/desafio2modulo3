let img = document.querySelector("img")
img.addEventListener('click', ()=>{
    if (img.style.border == ""){
        img.style.border = "solid 2px green"
    }
    else{
        img.style.border = ""
    }
})