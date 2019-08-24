import firebase from 'firebase'

class Fire {
    constructor() {
        this.init();
        // this.observeAuth();
    }

    init = () => {
        // firebase.initializeApp({
        //     apiKey: "AIzaSyDxiq9cR4Zja4uqm45ooN87yJnYhwOGG4o",
        //     authDomain: "hireme-chatscreen.firebaseapp.com",
        //     databaseURL: "https://hireme-chatscreen.firebaseio.com",
        //     projectId: "hireme-chatscreen",
        //     storageBucket: "",
        //     messagingSenderId: "941657484500",
        //     appId: "1:941657484500:web:074cce4b0c5cc66d"
        // });
    };
    
    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = (user) => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({message}) {
                alert(message);
            }
        }
    };

    get ref() {
        return firebase.database().ref('messages');
    }

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot =>
            callback(this.parse(snapshot)));
    
    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;

        const timestamp = new Date(numberStamp);

        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    off() {
        this.ref.off();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = messages => {
        for (let i = 0; i < messages.lenght; i++) {
            const { text, user } = messages[i];

            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);
}

Fire.shared = new Fire();
export default Fire;