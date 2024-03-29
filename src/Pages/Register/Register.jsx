import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState(null);
  const { createUser, updateName, googleLogIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    // password Handle
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must be at least one Upper Case character");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password at least one special character");
      return;
    }

    const toastId = toast.loading("Please wait...");

    // login
    try {
      const users = await createUser(email, password);
      await updateName(name, photo);
      const userEmail = users?.user?.email;
      const res = await axios.post("/create-jwt-token", { userEmail });
      console.log(res);
      toast.success("logged in successfully...", { id: toastId });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message, { id: toastId });
    }
  };

  // handle Google Login
  const handleGoogle = async () => {
    const toastID = toast.loading("Google logged in.............");
    try {
      const users = await googleLogIn();
      console.log(users);
      const userEmail = users?.user?.email;
      await axios.post("/create-jwt-token", { userEmail });
      toast.success("Google logged in Successfully", { id: toastID });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastID });
    }
  };

  return (
    <div className="px-6">
      <div className="flex items-center min-h-full flex-1 flex-col md:flex-row justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h- w-auto"
            src="https://i.postimg.cc/tJCg9qfs/login.png"
            alt="Your Company"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Please Register
          </h2>
          <form onSubmit={handleSubmitBtn} className="space-y-6 mt-12">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 "
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="your name"
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 "
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="url"
                  type="text"
                  autoComplete="email"
                  required
                  placeholder="photo URL"
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your Email"
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 flex items-center justify-center">
                <input
                  id="password"
                  name="password"
                  type={isShow ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Your Password"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div onClick={() => setIsShow(!isShow)} className="-ml-8">
                  {isShow ? (
                    <BsEyeFill className="text-xl" />
                  ) : (
                    <BsEyeSlashFill className="text-xl" />
                  )}
                </div>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            All ready have an Account please ?
            <button className="btn btn-link">
              <Link to="/login">login</Link>
            </button>
            {error && (
              <p className="text-bold text-red-500 mb-8 px-4">{error}</p>
            )}
          </div>
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-primary"
              >
                <BsGoogle className="text-red-500" />
                Log in with
                <div>
                  <span className="text-[#008744]">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-[#ffa700]">o</span>
                  <span className="text-[#008744]">g</span>
                  <span className="text-[#009955]">l</span>
                  <span className="">e</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
