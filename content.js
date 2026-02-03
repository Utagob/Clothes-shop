const head = document.getElementsByTagName("header");
const content = {
    title: "Phórema",
    imageLink: [
        "image/icon.png",
        "image/icon-n.png",
        "image/acc.png",
        "image/acc-n.png",
    ]
}
const s = document.getElementsByClassName("s")[0];

const image = document.createElement('img');
image.setAttribute("src", content.imageLink[0], "id", "iS");
const imageN = document.createElement('img');
imageN.setAttribute("src", content.imageLink[1], "id", "iN");

const title = document.createElement("h1");
title.innerText = content.title;

s.appendChild(image);
s.appendChild(imageN);
s.appendChild(title);
