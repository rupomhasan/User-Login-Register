import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { AiFillGithub } from "react-icons/ai";
import auth from "../../../Js/firebase";

const GitHub = () => {
  const handleGitHub = () => {
    const gitHubProvider = new GithubAuthProvider();
      signInWithPopup(auth, gitHubProvider)
          .then(res => {
          console.log(res.user)
          })
          .catch(error => {
          console.log(error.message)
      })
      
  };

  return (
    <div onClick={handleGitHub}>
      <AiFillGithub></AiFillGithub>
    </div>
  );
};

export default GitHub;
