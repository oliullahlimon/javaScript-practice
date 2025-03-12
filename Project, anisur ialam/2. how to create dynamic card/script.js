const fetchData = async (url) => {
    try {
        let res = await axios(url)
        return res.data;
    } catch (error) {
        console.log("There is an error")
    }
    
}

const postsElement = document.querySelector(".posts")

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts")
    posts.map((post) => {
        const postElement = document.createElement("div");
        postsElement.appendChild(postElement);
        postElement.classList.add("post", "col-md-4", "col-lg-3");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        
    })
}

loadAllData()
