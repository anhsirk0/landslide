import { FC } from "react";
import {
  IconBrandSpotifyFilled,
  IconSearch,
  IconHome,
  IconPlaylist,
  IconPlus,
} from "@tabler/icons-react";

const SpotifySidebar = () => {
  const sidelinks = [
    { title: "Spotify", Icon: IconBrandSpotifyFilled },
    { title: "Home", Icon: IconHome },
    { title: "Search", Icon: IconSearch },
  ];

  return (
    <div className="flex flex-col gap-2 h-full min-w-[22rem] w-[28rem]">
      <ul className="menu menu-sm xxl:menu-md rounded-box bg-base-200">
        {sidelinks.map(({ title, Icon }) => (
          <ListItem key={title} title={title} Icon={Icon} />
        ))}
      </ul>
      <div className="rounded-box bg-base-200 grow p-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 text-sm xxl:text-base">
            <IconPlaylist className="w-4 xxl:w-6" /> Library
          </div>
          <IconPlus className="w-4 xxl:w-6" />
        </div>
        <div className="card card-compact bg-base-300 mt-8 xxl:mt-16">
          <div className="card-body">
            <p className="title">Create your first playlist</p>
            <p className="text-xs xl:text-sm xxl:text-base pb-4">
              Its easy, we'll help you
            </p>
            <div className="card-actions">
              <button className="btn resp-btn btn-primary">
                Create playlist
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-300 mt-8">
          <div className="card-body">
            <p className="title">Let's find some podcasts to follow</p>
            <p className="pb-4">We'llkeep you updated on new episodes</p>
            <div className="card-actions">
              <button className="btn resp-btn btn-primary">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = { title: string; Icon: typeof IconHome };
const ListItem: FC<Props> = ({ title, Icon }) => (
  <li>
    <a href="#" className={title === "Spotify" ? "font-bold" : undefined}>
      <Icon className="w-4 xxl:w-6" />
      {title}
    </a>
  </li>
);

export default SpotifySidebar;
