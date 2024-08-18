import { FC } from "react";
import {
  IconBrandSpotifyFilled,
  IconSearch,
  IconHome,
  IconPlaylist,
  IconPlus,
  IconWorld,
} from "@tabler/icons-react";

const SpotifySidebar = () => {
  const sidelinks = [
    { title: "Spotify", Icon: IconBrandSpotifyFilled },
    { title: "Home", Icon: IconHome },
    { title: "Search", Icon: IconSearch },
  ];

  return (
    <div className="flex flex-col gap-2 h-full min-w-[24rem] w-[30rem]">
      <ul className="menu menu-sm xxl:menu-md rounded-box bg-base-200">
        {sidelinks.map(ListItem)}
      </ul>
      <div className="flex flex-col rounded-box bg-base-200 grow p-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 text-sm xxl:text-base">
            <IconPlaylist className="w-4 xxl:w-6" /> Library
          </div>
          <IconPlus className="w-4 xxl:w-6" />
        </div>
        <div className="card card-compact bg-base-300 mt-6 xxl:mt-16">
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
        <div className="card card-compact bg-base-300 mt-6 xxl:mt-8">
          <div className="card-body">
            <p className="title">Let's find some podcasts to follow</p>
            <p className="text-xs xl:text-sm xxl:text-base pb-4">
              We'llkeep you updated on new episodes
            </p>
            <div className="card-actions">
              <button className="btn resp-btn btn-primary">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
        <div className="grow"></div>
        <Links data={["Legal", "Safety & Privacy Center", "Privacy Policy"]} />
        <Links data={["About Ads", "Accessibility"]} />
        <Links data={["Cookies"]} />
        <button className="btn resp-btn btn-outline w-fit my-2 xxl:my-8">
          <IconWorld />
          English
        </button>
      </div>
    </div>
  );
};

type Props = { title: string; Icon: typeof IconHome };
const ListItem: FC<Props> = ({ title, Icon }) => (
  <li key={title}>
    <a href="#" className={title === "Spotify" ? "font-bold" : undefined}>
      <Icon className="w-4 xxl:w-6" />
      {title}
    </a>
  </li>
);

const Links: FC<{ data: Array<string> }> = ({ data }) => (
  <div className="flex flex-row gap-5 mb-2 xxl:mb-4">
    {data.map((link) => (
      <p
        key={link}
        className="link link-hover text-xs xxl:text-sm text-base-content/70"
      >
        {link}
      </p>
    ))}
  </div>
);

export default SpotifySidebar;
