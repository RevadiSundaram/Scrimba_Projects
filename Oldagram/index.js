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

document.addEventListener('DOMContentLoaded', function() {
     renderposts();
});

function getfeed(){
    let feedhtml = ``;
    
    posts.map((post, index) => {
        feedhtml += `<div class="card">
                    <div class="head">
                        <img src="${post.avatar}" class="avatar" />
                        <div class="det">
                            <h5>${post.name}</h5>
                            <p>${post.location}</p>
                        </div>
                    </div>
                    <img src="${post.post}" class="post" id="post" />
                    <div class="footer">   
                    <div class="icon">
                        <img src="images/icon-heart.png" id="like" data-like="${index}" />
                        <img src="images/icon-comment.png" />
                        <img src="images/icon-dm.png" />
                    </div>
                    <p class="likes" id="likes" >${post.likes} likes</p>
                    <p class="name"><span>${post.username}</span>&nbsp;${post.comment}</p>
                    </div>
                    
                </div>`
    });
    return feedhtml;
}

function renderposts(){         
    document.getElementById("post-section").innerHTML = getfeed();
} 

document.addEventListener("click", function(e){
    // document.getElementById("likes").dataset.like = arr.likes++;
    if (e.target.dataset.like){
        handleLike(e.target.dataset.like)
    }
});

function handleLike(id){
    const dataObj = posts.filter((arr, index) => index==id)[0];
    console.log(dataObj.likes++);
    renderposts();
}