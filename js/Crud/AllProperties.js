// Initilize Firebase
import {
    app,
    // database
    db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc,
  
  } from "../configration/db.js";
  
  const blogContainer = document.getElementById('containerofsale');
  blogContainer.innerHTML = ""; // Clear the container
  
  const renderData = async () => {
    try {
        const getData = await getDocs(collection(db, "post"));
        blogContainer.innerHTML = ""; // UI کو کلئیر کریں تاکہ duplicate نہ آئیں

        getData.forEach((doc) => {
            const postid = doc.id;
            const { title, description, postImage, category } = doc.data();
            const truncatedDescription = truncateText(description, 200, postid);

            const blogCard = `
                <div class="box">
                    <div class="img-box">
                        <img src="${postImage}" alt="${title}">
                    </div>
                    <div class="detail-box">
                        <h6><small>${category}</small></h6>
                        <h6>${title}</h6>
                        <p>${truncatedDescription}</p>
                    </div>
                </div>
            `;

            blogContainer.innerHTML += blogCard;
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};

// Description کو truncate کرنے کے لیے function
function truncateText(text, maxLength, blogid) {
    if (text.length > maxLength) {
        const truncated = text.substring(0, maxLength);
        return `${truncated}... <a href="singleblog.html?id=${blogid}" class="read-more">Read More</a>`;
    }
    return text;
}

// Function کو کال کریں تاکہ بلاگز شو ہوں
renderData();

  
