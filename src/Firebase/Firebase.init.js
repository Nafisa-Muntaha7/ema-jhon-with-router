import { initializeApp } from 'firebase/app'
import firebaseConfig from './Firebase.config'

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*{Step-1} Steps for authentication
Initial set-up
   1.Firebase: cretae project
   2.Create web app
   3.Get configuration
   4.Initialize firebase
   5.Enable auth method

   {Step-2}
   1.Create login and register component
   2.Create route for login and register component

   {Step-3}
   1.Set up sign in method
   2.Set up sign out method
   3.User Sate
   4.Special observer
   5.Return necessary methods and states from useFirebase

   {Step-4}
   1.Create auth context
   2.Create context provider
   3.Use AuthProvider
   4.Use Auth Provider context value
   5.Create useAuth hook

   {Step-5}
   1.Create private route
   2.Set private route
   */