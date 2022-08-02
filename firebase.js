
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC_ZH-eAZAjnyoX85Z5zf9csKSNLynlpPU",
  authDomain: "fir-authentication-a313a.firebaseapp.com",
  projectId: "fir-authentication-a313a",
  storageBucket: "fir-authentication-a313a.appspot.com",
  messagingSenderId: "911037767430",
  appId: "1:911037767430:web:e8a22d004d05f1b6428887"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };