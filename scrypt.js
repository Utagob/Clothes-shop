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
    const User = localStorage.getItem('User');
    if(User === null){
        const inputUser = document.getElementById('userNameIn');
        const alertSection = document.getElementById('alertUserName');
        inputUser.addEventListener("keypress", (event) => {
            if(event.key === 'Enter') body.removeChild(alertSection);
        });
    } 
})

var x, i, j, l, ll, selElmnt, a, c;
x = document.getElementsByClassName("bible");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  const b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function() {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            s.dispatchEvent(new Event('change'));
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i) === -1) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);