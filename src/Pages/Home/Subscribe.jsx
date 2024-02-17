import Hr from "../../Components/ui/Hr";

/* eslint-disable react/no-unknown-property */
const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto mt-32 max-w-screen-xl ">
      <div className="relative isolate overflow-hidden bg-gray-900  py-24 shadow-2xl  sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe Your News Letter
        </h2>
        <div className="w-44 mx-auto mt-3">
          <Hr />
        </div>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          Keep pace with SecureCloud advancements! Join our mailing list for
          selective, noteworthy updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md gap-x-4"
        >
          <label className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required=""
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          ></circle>
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stop-color="#7775D6"></stop>
              <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Subscribe;
