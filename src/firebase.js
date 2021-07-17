import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDl_cC0PjEHNIFHYftb57Mixd0gqjsokXI",
    authDomain: "linked-in-clone-e1ad0.firebaseapp.com",
    projectId: "linked-in-clone-e1ad0",
    storageBucket: "linked-in-clone-e1ad0.appspot.com",
    messagingSenderId: "565289444383",
    appId: "1:565289444383:web:9d850f3194dacc9f42212a",
    measurementId: "G-M6D4785P2H"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
