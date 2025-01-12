
                                    

// Initialize Appwrite
const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('676ac5d800010ac1625c');
console.log("Appwrite initialized:", client);
const account = new Appwrite.Account(client);

// login user 
const loginemail = document.getElementById('loginemail');
const loginpassword = document.getElementById('loginpassword');
// Login Function
const login = async (event) => {

    try {
        const session = await account.createEmailPasswordSession(loginemail.value, loginpassword.value);
        console.log("Login successful:", session);
        alert("Login successful!");

        // Save user ID in localStorage
        localStorage.setItem("userId", session.userId);
        window.location.href = './index.html';
    } catch (error) {
        console.error("Login error:", error.message);
        alert("Login failed: " + error.message);
    }
};
loginemail.value = ""
loginpassword.value = ""
//login and


// signup

const email = document.getElementById('email');
const password = document.getElementById('password');

// Add User Function
const AddUser = async (event) => {

    const userObject = {
        email: email.value,
        password: password.value,
    };

    try {
        // Create authentication
        const authResponse = await account.create("unique()", userObject.email, userObject.password);
        console.log("User created:", authResponse);
        alert("User profile was created successfully!");

        // Save user ID in localStorage
        localStorage.setItem("userId", authResponse.$id);
        window.location.href = './index.html';
    } catch (error) {
        console.error("Error Message:", error.message);
        alert("Error: " + error.message);
    }
};


email.value = ""
password.value = ""
// signup

