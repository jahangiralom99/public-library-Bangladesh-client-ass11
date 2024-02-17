import TopBar from "../../Components/Common/TopBar";
import Hr from "../../Components/ui/Hr";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import Button from "../../Components/ui/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const SpacesRooms = () => {
  return (
    <div className="">
      <TopBar>Spaces & Rooms</TopBar>
      <h1 className="text-4xl font-bold mt-8">Explore Our Facilities</h1> <br />
      <Hr></Hr>
      <div className="mt-8">
        <div className=" md:flex gap-6">
          {/* 1st */}
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/7ZfvDpfG/post-29-copyright.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 p-6 space-y-4 items-center justify-center">
            <div className="border-l-4 border-red-500">
              <div className="ml-2 space-y-3">
                <h1 className="text-4xl">Reading Rooms</h1>
                <Hr></Hr>
                <h4 className="text-xl font-extrabold">Silent Study Spaces</h4>
              </div>
            </div>
            <div className="flex gap-4 ">
              <MobileOffIcon></MobileOffIcon>
              <VolumeOffIcon></VolumeOffIcon>
              <NoMealsIcon></NoMealsIcon>
              <LaptopChromebookIcon></LaptopChromebookIcon>
            </div>
            <p>
              Silent study spaces include closed reading rooms, computer
              classrooms, and designated areas within the Library indicated by
              signage. No talking or conversation is permitted. Silence is
              required in these spaces at all times.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6 mt-6 items-center justify-center">
          {/* 2nd  */}
          <div className="flex-1 p-6 space-y-4">
            <div className="border-l-4 border-red-500">
              <div className="ml-2 space-y-3">
                <h1 className="text-4xl">Group Study Rooms</h1>
                <Hr></Hr>
                <h4 className="text-xl font-extrabold">
                  Collaborative Study Spaces
                </h4>
              </div>
            </div>
            <div className="flex gap-4 ">
              <LaptopChromebookIcon></LaptopChromebookIcon>
              <GroupsIcon></GroupsIcon>
            </div>
            <p>
              Collaborative spaces include group study rooms and designated
              areas within the Library indicated by signage. Speaking softly is
              allowed in collaborative areas, but not loud talking. Long
              cellphone conversations should be done outside of the Library.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/Pr0pQksT/post-28-copyright.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" md:flex gap-6 mt-6">
          {/* 3rd */}
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/Fs80RLTr/post-27-copyright.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 p-6 space-y-4 items-center justify-center">
            <div className="border-l-4 border-red-500">
              <div className="ml-2 space-y-3">
                <h1 className="text-4xl">Silent Study Zones</h1>
                <Hr></Hr>
                <h4 className="text-xl font-extrabold">
                  Zero-Noise Study Spaces
                </h4>
              </div>
            </div>
            <div className="flex gap-4 ">
              <MobileOffIcon></MobileOffIcon>
              <VolumeOffIcon></VolumeOffIcon>
              <NoMealsIcon></NoMealsIcon>
              <StopScreenShareIcon></StopScreenShareIcon>
            </div>
            <p>
              Zero-noise room has been set aside to provide a peaceful oasis for
              quiet reflection. Absolute silence is required in the zero-noise
              room. No keyboarding or talking is permitted. Advance reservation
              is required.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row gap-6 mt-6 items-center justify-center">
          {/* 4nd  */}
          <div className="flex-1 p-6 space-y-4">
            <div className="border-l-4 border-red-500">
              <div className="ml-2 space-y-3">
                <h1 className="text-4xl">Events & Special Occasions</h1>
                <Hr></Hr>
                <h4 className="text-xl font-extrabold">
                  Meeting & Event Function Rooms
                </h4>
              </div>
            </div>
            <div className="flex gap-4 ">
              <QueuePlayNextIcon></QueuePlayNextIcon>
              <LaptopChromebookIcon></LaptopChromebookIcon>
              <GroupsIcon></GroupsIcon>
            </div>
            <p>
              Whether you’re hosting a Board, Corporate or Association meeting,
              Workshop or Information Session, the Scientia Public Library’s
              Meetings & Event Services department can provide you with a
              variety of meeting and function rooms.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/3J67cgBH/post-30-copyright.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacesRooms;
