import { addDoc, collection, db } from "./firebase.js";

export {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    db,
    app,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "./firebase.js"


const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

const sname = document.getElementById('sname');
const snumber = document.getElementById('snumber');
const semail = document.getElementById('semail');
const spassword = document.getElementById('spassword');
const saddress = document.getElementById('saddress');

const login = () => {
    console.log(
        userEmail.value,
        userPassword.value
    )

}

const signup = async () => {

        const userData = {
            name: sname.value,
            number: snumber.value,
            email: semail.value,
            password: spassword.value,
            address: saddress.value
        }
        const userCollenction = collection(db, "user")
        const responce = await addDoc(userCollenction, userData);
        console.log("respose", responce)

        sname.value = ''
        snumber.value = ''
        semail.value = ''
        spassword.value = ''
        saddress.value = ''
}

window.login = login
window.signup = signup

