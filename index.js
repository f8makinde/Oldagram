const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        "heart-icon": "images/icon-heart.png",
        "comment-icon": "images/icon-comment.png",
        "dm-icon": "images/icon-dm.png"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        "heart-icon": "images/icon-heart.png",
        "comment-icon": "images/icon-comment.png",
        "dm-icon": "images/icon-dm.png"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        "heart-icon": "images/icon-heart.png",
        "comment-icon": "images/icon-comment.png",
        "dm-icon": "images/icon-dm.png"
    }
]
let sectionEl = document.getElementById("section")
let countryEl = document.getElementById("country")
let numberOfLikes = document.getElementById("likes");
let textEl = document.getElementById("txt");
let sectionTwoEl = document.getElementById("section-two");
let countryTwoEl = document.getElementById("country-two");
let likes2El = document.getElementById("likes-2");
let text2El = document.getElementById("txt-2")
let name = "";
let nation = ""
let likes = "";
let comments= "";
function member(){  
    for(let i = 0; i < posts.length; i++){
      name = `<h2>${posts[0].name}</h2>`
     sectionEl.innerHTML = name;
      nation = `<p>${posts[0].location}</p>`
     countryEl.innerHTML = nation;
     likes = `<p>${posts[0].likes} likes</p>`
     numberOfLikes.innerHTML = likes;
     comments = `<span><p><strong>${posts[0].name}</strong> ${posts[0].comment}</p></span>`
     textEl.innerHTML = comments;
     name = `<h2>${posts[1].name}</h1>`;
     sectionTwoEl.innerHTML = name;
     nation = `<p>${posts[1].location}</p>`
     countryTwoEl.innerHTML = nation;
     likes = `<p>${posts[1].likes} likes</p>`
     likes2El.innerHTML = likes;
     comments =`<span><p><strong>${posts[1].name}</strong> ${posts[1].comment}</p></span>`;
     text2El.innerHTML = comments;
    }
}

function allImages(){
    document.getElementById("heart-icon").src = `${posts[0]["heart-icon"]}`
    document.getElementById("comment-icon").src = `${posts[0]["comment-icon"]}`
    document.getElementById("dm-icon").src = `${posts[0]["dm-icon"]}`
    document.getElementById("avartar-two").src = `${posts[0].avatar}`
    document.getElementById("post-one").src = `${posts[0].post}`
    document.getElementById("avartar-three").src = `${posts[1].avatar}`
    document.getElementById("post-two").src = `${posts[1].post}`
    document.getElementById("heart2-icon").src = `${posts[1]["heart-icon"]}`
    document.getElementById("comment2-icon").src = `${posts[0]["comment-icon"]}`
    document.getElementById("dm2-icon").src = `${posts[0]["dm-icon"]}`;
    member();
}
allImages();
member();
