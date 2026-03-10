const suggestClothes = document.createElement("form");
    suggestClothes.setAttribute("id", "suggestF");
const suggestPType = document.createElement("p");
    suggestPType.innerText = "Classification";
const suggestType = document.createElement("input");
    suggestType.setAttribute("class", "suggestI");
const suggestPName = document.createElement("p");
    suggestPName.innerText = "Clothe's name";
const suggestName = document.createElement("input");
    suggestName.setAttribute("class", "suggestI");
const suggestPImage = document.createElement("p");
    suggestPImage.innerText = "Clothe's URL";
const suggestImage = document.createElement("input");
    suggestImage.setAttribute("class", "suggestI");
const submit = document.createElement("input");
    submit.setAttribute("type", "submit");

suggestClothes.appendChild(suggestPType);
suggestClothes.appendChild(suggestType);
suggestClothes.appendChild(suggestPName);
suggestClothes.appendChild(suggestName);
suggestClothes.appendChild(suggestPImage);
suggestClothes.appendChild(suggestImage);
suggestClothes.appendChild(submit);
body.appendChild(suggestClothes);

suggestClothes.addEventListener("submit", (event) => {
    event.preventDefault();
    const clotheClass = suggestType.value;
    const clothesName = suggestName.value;
    const clothesImage = suggestImage.value;
})

const Clothes = {
    type: "",
    name: "",
    link: ""
}