import { db, addDoc, collection } from "../configration/db.js";

// ✅ EmailJS Initialization
emailjs.init("cGlmlRaT29ggY3WWQ");

// ✅ DOM Elements
let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Phone = document.getElementById("Phone");
let Message = document.getElementById("Message");
let send = document.getElementById("send");

const Contact_form = async () => {
    if (!Name.value || !Email.value || !Phone.value || !Message.value) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    let contact_Form_submit = {
        Name: Name.value.trim(),
        Email: Email.value.trim(),
        Phone: Phone.value.trim(),
        Message: Message.value.trim(),
        createdAt: new Date()
    };

    try {
        send.innerHTML = "Sending...";
        
        // ✅ Step 1: Save Data to Firestore
        let docRef = await addDoc(collection(db, "contactForms"), contact_Form_submit);
        // console.log("Data saved in Firestore ✅", docRef.id);

        // ✅ Step 2: Send Email using EmailJS
        let emailParams = {
            from_name: Name.value,
            from_email: Email.value,
            phone: Phone.value,
            message: Message.value
        };

        await emailjs.send("service_0um6lg3", "template_y74j9d6", emailParams);
        // console.log("Email sent successfully ✅");

        // ✅ Success Message
        alert("Your message has been submitted and emailed successfully!");
        
        // ✅ Clear Form Fields
        Name.value = "";
        Email.value = "";
        Phone.value = "";
        Message.value = "";

    } catch (error) {
        console.error("Error:", error.message);
        alert("Error submitting the form. Please try again.");
    } finally {
        send.innerHTML = "Send";
    }
};

// ✅ Exposing Function Globally for HTML Form
window.Contact_form = Contact_form;
