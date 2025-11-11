function myFunc() {
    const gf = document.body;
    if(gf.style.background === "white"){
        gf.style.background = "#4d4d4d";
        gf.style.color = "white";
        console.log("pula");
    } else {
        gf.style.background = "white";
        gf.style.color = "black";
        console.log("belita");
    }
} 