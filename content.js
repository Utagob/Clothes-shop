const head = document.getElementsByTagName("header")[0];
const content = {
    title: "Phórema",
    imageLink: [
        "image/icon.png",
        "image/icon-n.png",
        "image/acc.png",
        "image/acc-n.png",
        "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z",
        "M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z",
    ]
}

const s = document.createElement('div');
    s.setAttribute("class", "s");
const i1 = document.createElement('img');
    i1.setAttribute("src", content.imageLink[0]);
    i1.setAttribute("id", "iS");
const i2 = document.createElement('img');
    i2.setAttribute("src", content.imageLink[1]);
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
    i3.setAttribute("src", content.imageLink[2]);
b1.appendChild(i3);

const b2 = document.createElement("button");
    b2.setAttribute("id", "acN");
const i4 = document.createElement("img");
    i4.setAttribute("src", content.imageLink[3]);
b2.appendChild(i4);

const b3 = document.createElement("button");
    b3.setAttribute("id", "dark-ch");
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
const svg1 = createIcon(content.imageLink[4]);
const svg2 = createIcon(content.imageLink[5]);

b3.appendChild(svg1);
b3.appendChild(svg2);
r.appendChild(b1);
r.appendChild(b2);
r.appendChild(b3);

head.appendChild(s);
head.appendChild(r);