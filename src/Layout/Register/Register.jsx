import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Card color="transparent"  className="bg-blue-100 px-8 py-12">
      <Typography className="text-center text-xl font-bold" color="blue-gray">
        Register your account
      </Typography>
      <Typography color="gray" className="text-center mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            placeholder="name@mail.com"
                      name='text'
                      className="px-4 py-1 rounded-md"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="px-4 py-1 rounded-md"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="* * * * * * * *"
            className="px-4 py-1 rounded-md"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="checkbox" />
          <p>
            I agree the{" "}
            <a className="font-semibold hover:underline" href="">
              Terms and Conditions
            </a>
          </p>
        </div>
        <Button className=" w-full btn btn-sm my-5 btn-success text-white text-xl font-extrabold" fullWidth>
          Register Now
        </Button>
        <Typography color="gray" className="text-center font-normal">
          Already have an account? <Link className="font-bold hover:underline" to="/login">Please Login</Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Register;
