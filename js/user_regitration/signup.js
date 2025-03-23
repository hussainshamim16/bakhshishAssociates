import { doc,addDoc, collection, getFirestore,auth} from "../configration/db.js";

const db = getFirestore(); // Firestore instance

let signup = async () => {
    let UserName = document.getElementById("UserName");
    let userNumber = document.getElementById("userNumber");
    let user_is = document.getElementById("user_is");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let btn = document.getElementById("btn");

    try {
        btn.innerHTML = "Processing...";

        // Firestore user data (excluding password for security reasons)
        const userData = {
            UserName: UserName.value,
            userNumber: userNumber.value,
            user_is: user_is.value,
            email: email.value,
            createdAt: new Date()
        };

        // Add user to Firestore
        await addDoc(collection(db, "signupUser"), userData);

        alert("Registration Successful! 🎉");
    } catch (error) {
        console.error("Signup Error:", error.message);
        alert("Error: " + error.message);
    } finally {
        btn.innerHTML = "Register";
        window.location.href = "index.html";
    }
};

window.signup = signup;
