import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../../Js/firebase";

const Google = () => {
  const googleProvider = new GoogleAuthProvider();

  const handleGooleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hover:cursor-pointer" onClick={handleGooleRegister}>
      <FcGoogle></FcGoogle>
    </div>
  );
};

export default Google;
