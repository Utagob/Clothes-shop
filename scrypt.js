const theme = document.getElementById("theme");
function changeTheme(){
    if(theme.getAttribute("href") === "style.css"){
        theme.setAttribute("href","dark-style.css");
    } else {
        theme.setAttribute("href", "style.css");
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