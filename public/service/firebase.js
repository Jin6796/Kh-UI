// 파이어베이스 공통코드 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyAHLI5OD2wSYxiJYlMvJuiW8bK2xj6CaSk",
  authDomain: "kh-terrgym.firebaseapp.com",
  databaseURL: "https://kh-terrgym-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kh-terrgym",
  storageBucket: "kh-terrgym.appspot.com",
  messagingSenderId: "427262482569",
  appId: "1:427262482569:web:f89f88f3c2339ec8bf4e58"
};

export const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);