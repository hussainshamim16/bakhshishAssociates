// console.log("hello");

import {
  getStorage, ref, uploadBytes, getDownloadURL, collection, addDoc, getDocs, db,deleteDoc 
} from "../js/firebase.js";

// Initialize Firebase Storage
const storage = getStorage();



// DOM Elements
const blog = document.getElementById('blog');
const title = document.getElementById("title");
const textarea = document.getElementById("description");
const userImg = document.getElementById("userImg");
const postedImages = document.getElementById("postedImages");
const heading = document.getElementById("heading");
const peraGraph = document.getElementById("peraGraph");
const perant = document.getElementById("perant");
const noPostHeading = document.getElementById("noPostHeading");

// loader

const showLoader = () => {
  // console.log("show loader")
  perant.style.display = "flex";
}
const hideLoader = () => {
  // console.log("hide loader")
  perant.style.display = "none";
}


// if(blog.innerHTML = ' '){
//   noPostHeading.style.display = "block"
//   alert("khali")
// }else{
//   alert("not khali")
// }

const post = async () => {
  const myFile = userImg.files[0];

  if (myFile) {
    try {
      showLoader()
      // Create a unique reference for each file
      const fileRef = ref(storage, `images/${myFile.name}`);

      // Upload the file
      const snapshot = await uploadBytes(fileRef, myFile);
      // console.log('Uploaded a blob or file!');

      // Get the download URL
      const downloadUrl = await getDownloadURL(snapshot.ref);
      // console.log('File available at', downloadUrl);

      // Prepare the post data
      const posterCard = {
        postedImage: downloadUrl,
        heading: title.value,
        description: textarea.value
      };

      // Save the post data to Firestore
      const postCollection = collection(db, "post");
      await addDoc(postCollection, posterCard);
      // console.log('Post added to Firestore');

      hideLoader()
      location.reload()
      // Display the post on the blog

      // alert("Post is posted and data is displayed");

    } catch (error) {
      console.error('Error uploading file or saving post:', error);
      alert('Failed to upload file or save post. Please try again.');
    }
  } else {
    alert('Please select a file to upload.');
  }
}

async function displayPosts() {
  try {
    showLoader()
    // Fetch posts from Firestore
    const postCollection = collection(db, "post");
    const querySnapshot = await getDocs(postCollection);

    // Clear existing blog content
    
    
    // Display each post
    blog.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      blog.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${data.postedImage}" class="card-img-top" alt="post image">
          <div class="card-body">
            <h3>${data.heading}</h3>
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    alert('Failed to fetch posts. Please try again.');
  } finally {
    hideLoader();
  }
}


const deletpost = async ()=>{
  const postCollection = collection(db, "post");
  // const deleter = await deleteDoc(postCollection);
  // alert("delet")
  console.log(postCollection)

}

// displayPosts();
// Expose the post function to global scope
window.post = post;
window.hideLoader = hideLoader;
window.deletpost = deletpost;
window.showLoader = showLoader;
