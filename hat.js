import {
    app,
    // database
    db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc,

} from "./js/firebase";

const title = document.getElementById("title")
const description = document.getElementById("description")
const category = document.getElementById("category")
const postImage = document.getElementById("postImage")
const postupload = document.getElementById("postupload")

const perantData = document.getElementById("blog-container")
const getData = document.getElementById("getData")


const blogContainer = document.getElementById('blog-container');
blogContainer.innerHTML = ""; // Clear the container
const renderData = async () => {
    const getData = await getDocs(collection(db, "post"))
    getData.forEach((doc) => {
        const postid = doc.id
        const { title, description, postImage, category } = doc.data()
        const truncatedDescription = truncateText(description, 200, postid);
        const blogCard = `
                        <div class="col-lg-4 col-md-6 wow fadeInUp wit" data-wow-delay="0.1s">
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="${postImage}" alt="${title}">
                                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${category}</div>
                                </div>
                                <div class="p-4 pb-0">
                                    <h4>${title}</h4>
                                    <p>${truncatedDescription}</p>
                                </div>
                            </div>
                        </div>
            `;
        blogContainer.innerHTML += blogCard;
    });

}

function truncateText(text, maxLength, blogid) {
    if (text.length > maxLength) {
        const truncated = text.substring(0, maxLength);
        return `${truncated}... <a href="/blogPages/singleblog.html?id=${blogid}" class="read-more">Read More</a>`;
    }
    return text;
}


// renderData()   this function is used to get data from firebase and show on the screen
renderData()
