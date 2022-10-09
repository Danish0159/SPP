import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAyyE6q6cetgAaf6qJl7Eil5udICHrMOUY",
    authDomain: "sa-auth-5feb3.firebaseapp.com",
    projectId: "sa-auth-5feb3",
    storageBucket: "sa-auth-5feb3.appspot.com",
    messagingSenderId: "147160756997",
    appId: "1:147160756997:web:576bec598185654e833d6c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;