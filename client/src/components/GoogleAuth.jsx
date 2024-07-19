import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';


const GoogleAuth = () => {
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
             const res = await fetch('http://localhost:1616/api/auth/google', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
              }),
            });
            const data = await res.json(); 
            console.log(data);

        } catch (error) {
            console.log('could not login with google', error);
        }
    };
    return (
        <button className="btn bg-red-700 mt-4" type='button'
            onClick={handleGoogleClick}>Continue with Google</button>
    )
}

export default GoogleAuth