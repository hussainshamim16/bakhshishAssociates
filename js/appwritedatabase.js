// Initialize Appwrite
const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
    .setProject('676ac5d800010ac1625c'); // Replace with your project ID
console.log("Appwrite initialized:", client);

// Initialize Database and Authentication and storage 
const databases = new Appwrite.Databases(client);
const account = new Appwrite.Account(client);
const storage = new Appwrite.Account(client);



// fecth data
const fetchBlogs = async () => {
    try {
        // Fetch all documents from the collection
        const response = await databases.listDocuments(
            "676ac68000297a211812", // Database ID
            "676ac69d0026fcf60e67"  // Collection ID
        );
        console.log("Blogs fetched:", response.documents);

        // Select the container where blogs will be rendered
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = ""; // Clear the container

        // Render each blog
        response.documents.forEach(blog => {
            const truncatedDescription = truncateText(blog.description, 200,blog.$id);
            const blogCard = `
                        <div class="col-lg-4 col-md-6 wow fadeInUp wit" data-wow-delay="0.1s">
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="${blog.image}" alt="${blog.title}">
                                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${blog.Category}</div>
                                </div>
                                <div class="p-4 pb-0">
                                    <h4>${blog.title}</h4>
                                    <p>${truncatedDescription}</p>
                                </div>
                            </div>
                        </div>
            `;
            blogContainer.innerHTML += blogCard;
        });
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
        alert("Error fetching blogs: " + error.message);
    }
};

function truncateText(text, maxLength,blogid) {
    if (text.length > maxLength) {
        const truncated = text.substring(0, maxLength);
        return `${truncated}... <a href="/blogPages/singleblog.html?id=${blogid}" class="read-more">Read More</a>`;
    }
    return text;
}


// Call fetchBlogs to render blogs on page load
document.addEventListener("DOMContentLoaded", fetchBlogs);
