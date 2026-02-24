const theme = document.getElementById("theme");
function changeTheme(){
    if(theme.getAttribute("href") === "style.css"){
        theme.setAttribute("href","dark-style.css");
        b1.id = "acN";
        i3.setAttribute("src", content.headImage[3]);
        i4.setAttribute("src", content.headImage[3]);
    } else {
        theme.setAttribute("href", "style.css");
        b1.id = "acS";
        i3.setAttribute("src", content.headImage[2]);
        i4.setAttribute("src", content.headImage[2]);
    }
    return 0;
}

const chBtn = document.getElementById("dark-ch");
chBtn.addEventListener("click", changeTheme);

const button = document.getElementById("cb");

function consB(){
    console.log("No share :(");
    return 0;
}

button.addEventListener("click", consB);