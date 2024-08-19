import { usePageTitle } from "@/hooks";
/* import Logo from "@/assets/netflix-logo.png"; */
import NetflixLogo from "./NetflixLogo";

const Netflix = () => {
  usePageTitle("Netflix");

  return (
    <div className="w-full h-full">
      <div className="h-[70vh] bg-netflix relative isolate">
        <div className="flex flex-col max-w-7xl mx-auto h-full">
          <div className="flex flex-row items-center gap-4 w-full p-6">
            <NetflixLogo className="w-36 fill-primary" />
            <div className="grow"></div>
            <button className="btn btn-xs xl:btn-sm btn-sm btn-outline">
              English
            </button>
            <button className="btn btn-xs xl:btn-sm btn-sm btn-primary">
              Sign In
            </button>
          </div>
          <div className="grow center -mt-16 flex-col gap-8">
            <p className="text-6xl font-black">
              Unlimited movies, TV shows and more
            </p>
            <p className="text-2xl font-medium">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-2xl font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="join w-96">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-base-100 via-base-100/50 to-base-100 opacity-90 -z-10"></div>
      </div>
      <div className="text-7xl text-center mt-8">Todo</div>
    </div>
  );
};

export default Netflix;
