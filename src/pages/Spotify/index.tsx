import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { usePageTitle } from "@/hooks";
import { range } from "@/helpers";
import SpotifySidebar from "./SpotifySidebar";

const Spotify = () => {
  usePageTitle("Spotify");

  return (
    <div className="center flex-row gap-2 h-full w-full p-2">
      <SpotifySidebar />
      <div className="flex flex-col bg-gradient-to-b from-base-200 from-20% to-base-300 rounded-box min-h-0 h-full grow overflow-y-auto relative">
        <div className="flex flex-row gap-4 bg-base-300 rounded-box rounded-b-none p-2 px-4 sticky top-0 z-10">
          <button className="btn resp-btn btn-circle">
            <IconChevronLeft />
          </button>
          <button className="btn resp-btn btn-circle">
            <IconChevronRight />
          </button>
          <div className="grow"></div>
          <button className="btn resp-btn btn-ghost">Sign up</button>
          <button className="btn resp-btn btn-primary">Log In</button>
        </div>
        {["artists", "albums", "radio"].map((category) => (
          <div key={category} className="flex flex-col px-4">
            <p className="card-title mt-6 mx-4 mb-2">Popular {category}</p>
            <div className="flex flex-row gap-4 mx-4">
              {range(5).map((idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-box p-2 xxl:p-4 hover:bg-base-300 transition-all ease-in-out duration-300 gap-2 group"
                >
                  <div className="relative">
                    <img
                      alt={"artist-" + idx}
                      width={300}
                      height={300}
                      className={
                        category === "artists" ? "rounded-full" : "rounded-box"
                      }
                      src={`https://picsum.photos/seed/${idx * 10}/300/300`}
                    />
                    <button className="absolute btn resp-btn btn-circle btn-primary opacity-0 bottom-0 right-2 group-hover:opacity-100 group-hover:bottom-2 transition-all">
                      <IconPlayerPlayFilled />
                    </button>
                  </div>
                  <p className="title">Artist {idx + 1}</p>
                  <p className="text-xs xl:text-sm xxl:text-base -mt-2">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotify;
