/* eslint-disable react/no-unescaped-entities */
import Hr from "../../Components/ui/Hr";

const NewsAndBlog = () => {
  return (
    <div className="mt-12 border mb-12">
      <h1 className="text-4xl font-bold text-center mt-8">News And Blogs </h1>
      <div className="w-44 mx-auto mt-3">
        <Hr />
      </div>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
            <img
              src="https://i.postimg.cc/5yFtnDc8/jaredd-craig-HH4-WBGNyltc-unsplash.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-4 lg:col-span-5 ">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Dhaka Divisional Book Fair ended amidst the need for more
                visibility
              </h3>
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              <p>
                Most of the students from Dhaka University did not know about
                the fair and simply happened to pass by.
              </p>
              <button className=" flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:underline">
                See More
              </button>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44"
                src="https://i.postimg.cc/NLqjVbYS/rain-bennett-7-Nir5-XIRVM-unsplash.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline uppercase">
                  A Story Telling Workbook for Beginner
                </h3>
                <span className="text-xs ">January 21, 2021</span>
                <p className="">
                  This is a blank-lined journal with prompts to help you create
                  and structure your stories and content. You can see the
                  prompts in the "Look Inside" feature and access the
                  Storytelling Worksheet for free at rainbennett....
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44"
                src="https://i.postimg.cc/gcfymW0F/morgan-housel-a-Z-Mm-Sm-Acjg-unsplash.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Psychology Money
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 22, 2021
                </span>
                <p>
                  Money―investing, personal finance, and business decisions―is
                  typically taught as a math-based field, where data and
                  formulas tell us exactly what to do. But in the real world
                  people don’t make financial decisions on a spreadsheet.....
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 "
                src="https://i.postimg.cc/0213MMPP/matt-ridley-H-LIL57-PHCc-unsplash.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Mat Ridley
                </h3>
                <span className="text-xs ">January 23, 2021</span>
                <p>
                  Innovation is the main event of the modern age, the reason we
                  experience both dramatic improvements in our living standards
                  and unsettling changes in our society. Forget short-term
                  symptoms like Donald Trump and Brexit,
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3  rounded-md hover:underline bg-red-500 text-white hover:bg-red-600"
            >
              Load more News...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndBlog;

// top
// https://i.postimg.cc/NLqjVbYS/rain-bennett-7-Nir5-XIRVM-unsplash.jpg
// https://i.postimg.cc/gcfymW0F/morgan-housel-a-Z-Mm-Sm-Acjg-unsplash.jpg

// bt

// https://i.postimg.cc/5yFtnDc8/jaredd-craig-HH4-WBGNyltc-unsplash.jpg
