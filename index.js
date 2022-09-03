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
let numberOfLikes = document.getElementById("likes");
let textEl = document.getElementById("txt");
let name = "";
let nation = ""
let likes = "";
let comments= ""
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

    }
}

function allImages(){
    document.getElementById("heart-icon").src = `${posts[0]["heart-icon"]}`
    document.getElementById("comment-icon").src = `${posts[0]["comment-icon"]}`
    document.getElementById("dm-icon").src = `${posts[0]["dm-icon"]}`
    document.getElementById("avartar-two").src = `${posts[0].avatar}`
    document.getElementById("post-one").src = `${posts[0].post}`
    member()
}
allImages();
member();
