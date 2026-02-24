const body = document.getElementsByTagName('body')[0];
const cd = document.createElement('button');
cd.setAttribute("id", "cb");
cd.innerText = "Share";
body.appendChild(cd);
const head = document.createElement('header');
const content = {
    title: "Phórema",
    slogan: "Anything you can think about is here",
    headImage: [
        "image/icon.png",
        "image/icon-n.png",
        "image/acc.png",
        "image/acc-n.png",
        "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z",
        "M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z",
    ],
    mainImage:[
        "image/st.png",
        "image/st1.png",
        "image/st2.png",
    ],
    showU:[
        `<div class="prod">
          <p>Sweaters</p>
          <img src="image/exm/sw.png">
        </div>
        <div class="prod">
          <p>T-shirts</p>
          <img src="image/exm/sh.png">
        </div>
        <div class="prod">
          <p>Hoodies</p>
          <img src="image/exm/hood.png">
        </div>`,
        `<div class="prod">
          <p>Jackets</p>
          <img src="image/exm/ja.png">
        </div>
        <div class="prod">
          <p>Coats</p>
          <img src="image/exm/co.png">
        </div>`,
    ],
    showL:[
        `<div class="prod">
          <p>Pants</p>
          <img src="image/exm/pa.png">
        </div>
        <div class="prod">
          <p>Shorts</p>
          <img src="image/exm/so.png">
        </div>`,
        `<div class="prod">
          <p>Sneakers</p>
          <img src="image/exm/sn.png">
        </div>
        <div class="prod">
          <p>Boots</p>
          <img src="image/exm/boots.png">
        </div>
        <div class="prod">
          <p>Classic Shoes</p>
          <img src="image/exm/csh.png">
        </div>`
    ],
    socialImg:[
        "image/social-m/faceb.png",
        "image/social-m/inst.png",
    ],
    paymImg:[
        "image/paym/MasterCard.png",
        "image/paym/visa.png",
        "image/paym/payP.png"
    ],
    footer:[
        "Home",
        "About us",
        "Terms and conditions"
    ]
}

const s = document.createElement('div');
    s.setAttribute("class", "s");
const i1 = document.createElement('img');
    i1.setAttribute("src", content.headImage[0]);
    i1.setAttribute("id", "iS");
const i2 = document.createElement('img');
    i2.setAttribute("src", content.headImage[1]);
    i2.setAttribute("id", "iN");
const title = document.createElement("h1");
    title.innerText = content.title;
s.appendChild(i1);
s.appendChild(i2);
s.appendChild(title);

const r = document.createElement('div');
    r.setAttribute("class", "r");

const b1 = document.createElement("button");
    b1.setAttribute("id", "acS");
const i3 = document.createElement("img");
    i3.setAttribute("src", content.headImage[2]);
b1.appendChild(i3);

const b2 = document.createElement("button");
    b2.setAttribute("id", "dark-ch");
const SVG_NS = "http://www.w3.org/2000/svg";
function createIcon(pathData) {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("xmlns", SVG_NS);
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("fill", "#e3e3e3");

    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", pathData);

    svg.appendChild(path);
    return svg;
}
const svg1 = createIcon(content.headImage[4]);
const svg2 = createIcon(content.headImage[5]);

b2.appendChild(svg1);
b2.appendChild(svg2);
r.appendChild(b1);
r.appendChild(b2);

const upHead = document.createElement("div");
upHead.setAttribute("id", "upHead");

upHead.appendChild(s);
upHead.appendChild(r);
head.appendChild(upHead);
body.appendChild(head);

const headClone = head.cloneNode(true);
const upHead1 = headClone.childNodes[0];
const r1 = upHead1.childNodes[1];
const b = r1.childNodes[0];
const i4 = b.childNodes[0];
console.log(i4);

const pUser1 = document.createElement("p");
pUser1.setAttribute("class", "userName");
pUser1.setAttribute("id", "a1");
pUser1.innerHTML = "";
head.appendChild(pUser1);

const alertSection = document.createElement("div");
alertSection.setAttribute("id", "alertUserName");
body.appendChild(alertSection);
const alertText = document.createElement("div");
alertText.setAttribute("id", "alertText");
alertSection.appendChild(alertText);
const h1User = document.createElement("h1");
h1User.innerHTML = "Add your name:";
alertText.appendChild(h1User);
const inputUser = document.createElement("input");
inputUser.setAttribute("type", "text");
inputUser.setAttribute("id", "userNameIn");
alertText.appendChild(inputUser);
inputUser.addEventListener("input", (event) => {
    pUser1.innerHTML= "Hello " + event.target.value;
    pUser2.innerHTML= "Hello " + event.target.value;
});

headClone.setAttribute("id", "headClone");
const pUser2 = document.createElement("p");
pUser2.setAttribute("class", "userName");
pUser2.setAttribute("id", "a1");
pUser2.innerHTML = "";
headClone.appendChild(pUser2);
alertSection.appendChild(headClone);

const div1 = document.createElement('div');
div1.setAttribute("class", "nav");
const p = document.createElement('p');
const aW = document.createElement('a');
const aM = document.createElement('a');
aW.innerText = 'Women';
aM.innerText = 'Men';
p.innerText = '';
div1.appendChild(aW);
div1.appendChild(p);
div1.appendChild(aM);

const div2 = document.createElement('div');
div2.setAttribute("class", "show");
for(let i=0; i<content.mainImage.length; i++){
    const imgM = document.createElement('img');
    imgM.setAttribute("src", content.mainImage[i]);
    div2.appendChild(imgM);
}
body.appendChild(div1);
body.appendChild(div2);

const pr = document.createElement('div');
pr.setAttribute("class", "pr");
const pq = document.createElement('p');
pq.innerText = content.slogan;
const pU = document.createElement('p');
pU.innerText = "Upper Body";
const pL = document.createElement('p');
pL.innerText = "Lower Body";

pr.appendChild(pq);
pr.appendChild(pU);
for(let i=0; i<content.showU.length; i++){
    const sec = document.createElement('div');
    sec.setAttribute("class", "sec");
    sec.innerHTML = content.showU[i];
    pr.appendChild(sec);
}
pr.appendChild(pL);
for(let i=0; i<content.showL.length; i++){
    const sec = document.createElement('div');
    sec.setAttribute("class", "sec");
    sec.innerHTML = content.showL[i];
    pr.appendChild(sec);
}
body.appendChild(pr);

const footer = document.createElement('footer');
const ic = document.createElement('div');
ic.id = "ic";
const lgo = document.createElement('div');
lgo.id = "lgo";
for(let i=0; i<content.socialImg.length; i++){
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.setAttribute("src", content.socialImg[i]);
    btn.appendChild(img);
    lgo.appendChild(btn);
}
const paym = document.createElement('div');
paym.id = "paym";
for(let i=0; i<content.paymImg.length; i++){
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.setAttribute("src", content.paymImg[i]);
    btn.appendChild(img);
    paym.appendChild(btn);
}
ic.appendChild(lgo);
ic.appendChild(p);
ic.appendChild(paym);
footer.appendChild(ic);
const qa = document.createElement('div');
qa.className = "qa";
for(let i=0; i<content.paymImg.length; i++){
    const pz = document.createElement('p');
    pz.innerText = content.footer[i];
    qa.appendChild(pz);
}
footer.appendChild(qa);
const td = document.createElement('div');
td.className = "title-d";
const px = document.createElement('p');
px.innerText = "©Copyright by Phorema";
td.appendChild(px);
footer.appendChild(td);
body.appendChild(footer);
