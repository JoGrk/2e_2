const randomLink = document.getElementById("randomLink")

links = [
    "https://www.onet.pl/",
    "https://www.youtube.com/",
    "https://open.spotify.com/"
]

randomLink.addEventListener('click',() => {
    randomLink.href=links[generateRandom(links.length)]
})
