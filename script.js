function dimension() {
    
   let thisobject = document.getElementById('firstp');
    
    let x = thisobject.style.top;
    let y = thisobject.style.left;
    window.alert("x=" + x + ", y=" + y);
}

function drawLayer() {
    let l1 = document.getElementById('myLayer1');
    let l2 = document.getElementById('myLayer2');
    l1.style.visibility = "visible";
    l2.style.visibility = "visible";
}
function changeColor(objectId) {
   
    let l2 = document.getElementById('myLayer2');
    l2.style.backgroundColor = objectId.style.backgroundColor;
}