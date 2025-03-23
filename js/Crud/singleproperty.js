import { db, doc, getDoc } from "../configration/db.js";

document.addEventListener("DOMContentLoaded", async () => {
    function getBlogIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    const blogId = getBlogIdFromURL();
    console.log(blogId)

    if (blogId) {
        try {
            const docRef = doc(db, "post", blogId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const blogData = docSnap.data();
                displayBlogDetails(blogData);
            } else {
                alert("No blog found!");
            }
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    } else {
        alert("No blog ID found in URL.");
    }
});

function displayBlogDetails(blog) {
    // console.log(blog);
    const {title,category,description,postImage} = blog;
    const blognameintitle = document.getElementById('blognameintitle');
    blognameintitle.innerHTML = `${title} || Bakhshish Associates`;
    const blogContainer = document.getElementById('blog-one-container');
    blogContainer.innerHTML = `
                <div class="box">
            <div class="img-box">
                 <img src="${postImage}" alt="${title}">
            </div>
            <div class="detail-box">
              <h6><small>${category}</small></h6>
            <h6>${title}</h6>
            <p>${description}</p>
            </div>
        </div>
    `;
}