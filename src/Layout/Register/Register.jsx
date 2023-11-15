import { Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FaceBook from "../../Component/OtherRegister/FaceBook/FaceBook";
import Google from "../../Component/OtherRegister/Google/Google";
import GitHub from "../../Component/OtherRegister/GitHub/GitHub";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Js/firebase";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log("click form btn");
    const userName = e.target.text.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox = e.target.terms.checked
    console.log(userName, email, password , checkbox);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Card color="transparent" className="bg-blue-100 px-8 py-10 rounded-xl">
      <Typography className="text-center text-xl font-bold" color="blue-gray">
        Register your account
      </Typography>
      <Typography color="gray" className="text-center mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleFromSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            placeholder="name"
            type="text"
            name="text"
            className="px-4 py-1 rounded-md"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            placeholder="name@mail.com"
            type="email"
            name="email"
            className="px-4 py-1 rounded-md"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <div className="relative">
            <Input
              type={`${showPassword === false ? "text" : "Password"}`}
              name="password"
              placeholder="* * * * * * * *"
              className="px-4 py-1 rounded-md"
              labelProps={{
                className: "before:content-none after:content-none",
                
              }}
            />
            <div
              className="absolute right-3 top-2 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="terms" />
          <p>
            I agree the{" "}
            <a className="font-semibold hover:underline" href="">
              Terms and Conditions
            </a>
          </p>
        </div>
        <input
          type="submit"
          name="submit"
          value="Register now"
          className="btn btn-sm w-full mt-4 btn-success text-white font-extrabold"
        />
      </form>
      <Typography color="gray" className="text-center font-normal">
        Already have an account?
        <Link className="font-bold hover:underline" to="/login">
          Please Login
        </Link>
      </Typography>
      <div className="flex items-center gap-3 mt-2">
        <div className="bg-gray-400 w-full h-[1px]"></div>
        <p> Or</p>
        <div className="bg-gray-400 w-full h-[1px]"></div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium"> Register with </p>
        <div className="flex gap-3 text-xl items-center">
          <FaceBook></FaceBook>
          <Google></Google>
          <GitHub></GitHub>
        </div>
      </div>
    </Card>
  );
};

export default Register;
