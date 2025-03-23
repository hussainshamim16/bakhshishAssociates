import { 
  app, db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc, query, limit 
} from "../configration/db.js";

const blogContainer = document.getElementById('containerofsale');
blogContainer.innerHTML = ""; // Clear the container

const renderData = async () => {
  const q = collection(db, "post"); // Get only 8 documents
  const getData = await getDocs(q);
  
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
}

function truncateText(text, maxLength, blogid) {
  if (text.length > maxLength) {
    const truncated = text.substring(0, maxLength);
    return `${truncated}... <a href="singleProperty.html?id=${blogid}" class="read-more">Read More</a>`;
  }
  return text;
}

renderData();
