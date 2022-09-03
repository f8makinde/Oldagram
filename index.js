const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let sectionEl = document.getElementById("section")
let countryEl = document.getElementById("country")
let name = "";
let nation = ""
function member(){
    for(let i = 0; i < posts.length; i++){
        let avatarEl = document.getElementById("avartar-two").src = `${posts[0].avatar}`
        avatarEl.innerHTML = avatarEl;
      name = `<h2>${posts[0].name}<h2>`
     sectionEl.innerHTML = name;
      nation = `<p>${posts[0].location}`
     countryEl.innerHTML = nation;
    }
}
member();