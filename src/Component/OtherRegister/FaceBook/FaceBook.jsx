import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { AiFillFacebook } from "react-icons/ai";
import auth from "../../../Js/firebase";

const FaceBook = () => {


  const faceBookProvider = new FacebookAuthProvider();
  const handleFacebookregister = () => {
    signInWithPopup(auth, faceBookProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hover:cursor-pointer" onClick={handleFacebookregister}>
      <AiFillFacebook></AiFillFacebook>
    </div>
  );
};

export default FaceBook;
