const url = 'http://localhost:1087/api/1234/getPosts';

async function fetchPosts() {
    const res = await fetch(url);
    var posts = await res.json();

    for(let i = 0; i < countProps(posts); i++) {
        console.log(posts[i]);
        var mainContainer = document.getElementById("myData");
        var div = document.createElement("div");
        div.innerHTML = `PostID: ${posts[i].id} Title: ${posts[i].title}`;
        mainContainer.appendChild(div);
    }
}

function countProps(obj) {
    var count = 0;
    for (var p in obj) {
      obj.hasOwnProperty(p) && count++;
    }
    return count; 
}

fetchPosts();