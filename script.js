const firebaseConfig = {
  apiKey: "AIzaSyAnhEn_XZu2gwWlIfJzB0gBK3awNQThODo",
  authDomain: "friendly-mini-facebook.firebaseapp.com",
  projectId: "friendly-mini-facebook",
  storageBucket: "friendly-mini-facebook.appspot.com",
  messagingSenderId: "265973146756",
  appId: "1:265973146756:web:1c8bb657a72fa8393d4ed1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase bağlandı");
