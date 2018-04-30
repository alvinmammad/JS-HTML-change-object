var divs = {

width:"300px",
height:"400px",
background:"yellow",
border:"1px solid black;",

}



function addhtml(Obyektim) {

var addiv = document.createElement("div");


// addiv.setAttribute("style", Obyektim.width + " " + Obyektim.height + " " + Obyektim.background + " " + Obyektim.border)

addiv.style.width = Obyektim.width;
addiv.style.height = Obyektim.height;
addiv.style.background = Obyektim.background;
addiv.style.border =  Obyektim.border;
addiv.innerHTML = "Alqasimin oglanlari vorzakondu";

document.body.appendChild(addiv);

}

addhtml(divs);


