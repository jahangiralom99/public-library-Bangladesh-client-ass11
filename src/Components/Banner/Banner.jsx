import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../ui/Button";
import Hr from "../ui/Hr";

const Banner = () => {
  return (
    <div className="lg:flex bg-[#f2f0ee] mt-2 ">
      <div className="lg:w-[70%]">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* slider 1  */}
            <img
              className="object-cover h-screen"
              src="https://i.postimg.cc/Jns2ThYV/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
              alt=""
            />
            <div className="absolute bottom-40 left-6 text-white">
              <h1 className="text-6xl font-bold ">
                Recollect your <br /> past for the future
              </h1>
            </div>
            <div className="z-20 h-44 bg-[#1b1b1b] w-full -mt-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            {/* slider 2 */}
            <img
              className="object-cover h-screen"
              src="https://i.postimg.cc/tghpC2tm/post-9-copyright.jpg"
              alt=""
            />
            <div className="absolute bottom-40 left-6 text-white">
              <h1 className="text-6xl font-bold ">
                Recollect your <br /> past for the future
              </h1>
            </div>
            <div className="z-20 h-44 bg-[#1b1b1b] w-full -mt-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            {/* slider 3 */}
            <img
              className="object-cover h-screen"
              src="https://i.postimg.cc/8CcJsFz6/Depositphotos-155947488-xl-2015-2-copyright.jpg"
              alt=""
            />
            <div className="absolute bottom-40 left-6 text-white">
              <h1 className="text-6xl font-bold ">
                Recollect your <br /> past for the future
              </h1>
            </div>
            <div className="z-20 h-44 bg-[#1b1b1b] w-full -mt-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            {/* slider 5 */}
            <img
              className="object-cover h-screen"
              src="https://i.postimg.cc/hjqXs209/redd-f-9o8-Yd-YGTT64-unsplash.jpg"
              alt=""
            />
            <div className="absolute bottom-40 left-6 text-white">
              <h1 className="text-6xl font-bold">
                Recollect your <br /> past for the future
              </h1>
            </div>
            <div className="z-20 h-44 bg-[#1b1b1b] w-full -mt-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            {/* slider 4 */}
            <img
              className="object-cover h-screen"
              src="https://i.postimg.cc/sf4jdjVd/thought-catalog-Bl-Gmd-Y18-CFQ-unsplash.jpg"
              alt=""
            />
            <div className="absolute bottom-40 left-6 text-white">
              <h1 className="text-6xl font-bold text-black">
                Recollect your <br /> past for the future
              </h1>
            </div>
            <div className="z-20 h-44 bg-[#1b1b1b] w-full -mt-9"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="">
        <div className="">
          <div className="px-9 py-5 space-y-3">
            {/* 1st  */}
            <h2 className="text-3xl font-bold ">Library Guides</h2>
            <Hr></Hr>
            <p className="font-semibold font-sans">
              Find books, media, databases, e-journals and digital resources.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="px-9 py-5 space-y-3">
            {/* 2nd */}
            <h2 className="text-3xl font-bold ">Borrow, Reserve, Renew</h2>
            <Hr></Hr>
            <p className="font-semibold font-sans">
              Get advanced research assistance in dozens of subject areas.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="px-9 py-5 space-y-3">
            {/* 3rd */}
            <h2 className="text-3xl font-bold ">Study Spaces & PCs</h2>
            <Hr></Hr>
            <p className="font-semibold font-sans">
              Deposit data, papers, and other resources for long-term access.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="lg:absolute lg:-bottom-[260px] 	">
          <img
            className="h-40 object-cover lg:w-96 w-full"
            src="https://i.postimg.cc/kMf8hFzW/01-home-03.jpg"
            alt=""
          />
          <div className="absolute text-center lg:bottom-[3px] ml-8 space-y-3">
            <div className="-mt-28 md:ml-32 lg:ml-0">
              <h6 className="text-xl text-white">The library is open today</h6>
              <h1 className="text-4xl font-semibold  ml-2 text-white ">
                9:00 AM – 10:00 PM
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// https://i.postimg.cc/J0H4TB33/Depositphotos-155947488-xl-2015-2-copyright.jpg
