function buttonclick(val){
    
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function clear_Button(){

    document.getElementById("screen").value=""
}
function equal_Button(){
    
    var text=document.getElementById("screen").value
    var total=eval(text)
    document.getElementById("screen").value=total
        
}