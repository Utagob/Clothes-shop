const bibleSection = document.getElementById('bibleVerse');
const bibleVerse = document.createElement('p');
bibleSection.addEventListener('change', (event) => {
    const bibleVerseLink = event.target.value;
    const bibleVerseURL = "https://bible-api.com/" + bibleVerseLink.toLowerCase();
    console.log(bibleSection.value);

    fetch(bibleVerseURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            bibleVerse.innerText = data.text;
            const bible = document.getElementById('bible');
            bible.appendChild(bibleVerse);
        });
});