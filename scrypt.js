const theme = document.getElementById("theme");
function changeTheme(){
    if(theme.getAttribute("href") === "style.css"){
        theme.setAttribute("href","dark-style.css");
        b1.id = "acN";
        i3.setAttribute("src", content.headImage[3]);
        localStorage.setItem("theme", "dark");
        i4.setAttribute("src", content.headImage[3]);
    } else {
        theme.setAttribute("href", "style.css");
        b1.id = "acS";
        i3.setAttribute("src", content.headImage[2]);
        localStorage.setItem("theme", "light");
        i4.setAttribute("src", content.headImage[2]);
    }
}

const chBtn = document.getElementById("dark-ch");
chBtn.addEventListener("click", changeTheme);

const button = document.getElementById("cb");

function consB(){
    console.log("No share :(");
}

button.addEventListener("click", consB);

window.addEventListener("load", ()=> {
    const themeStored = localStorage.getItem('theme');
    if(themeStored === 'dark'){
            theme.setAttribute("href","dark-style.css");
            b1.id = "acN";
            i3.setAttribute("src", content.headImage[3]);
        } else {
            theme.setAttribute("href", "style.css");
            b1.id = "acS";
            i3.setAttribute("src", content.headImage[2]);
        }
    if(User !== " " || User !== null){
        body.removeChild(alertSection);
        pUser1.innerHTML= "Hello " + User;
        pUser2.innerHTML= "Hello " + User;
        console.log("User: ", User);
    } else {
        alertSection.addEventListener("keypress", (event) => {
            if(event.keyCode === 13) body.removeChild(alertSection);
        });
    } 
})
