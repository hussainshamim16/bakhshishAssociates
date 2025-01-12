// Initialize Appwrite
const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
    .setProject('676ac5d800010ac1625c'); // Replace with your project ID
console.log("Appwrite initialized:", client);

// Initialize Database and Authentication and storage 
// const databases = new Appwrite.Databases(client);
// const account = new Appwrite.Account(client);
// const storage = new Appwrite.Account(client);

//sign up user
const signupEmail = document.getElementById('signupEmail')
const signuppassword = document.getElementById('signuppassword')


function signup (e){
    e.preventDefault()
    console.log("hello Hussain")
}