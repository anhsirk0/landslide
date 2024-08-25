import { Fragment, FC } from "react";
import {
  IconDeviceTv,
  IconCloudDownload,
  IconBinocularsFilled,
  IconMoodKid,
} from "@tabler/icons-react";

const NetflixReasons = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      Icon: IconDeviceTv,
      content:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      title: "Download your shows to watch offline",
      Icon: IconCloudDownload,
      content:
        "Save your favourites easily and always have something to watch.",
    },
    {
      title: "Watch everywhere",
      Icon: IconBinocularsFilled,
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    },
    {
      title: "Create profiles for kids",
      Icon: IconMoodKid,
      content:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    },
  ];

  return (
    <Fragment>
      <p className="text-4xl font-medium mt-8 xxl:mt-12">
        More reasons to join
      </p>
      <div className="flex flex-row gap-4">{reasons.map(ReasonCard)}</div>
    </Fragment>
  );
};

type Props = { title: string; Icon: typeof IconDeviceTv; content: string };
const ReasonCard: FC<Props> = ({ title, Icon, content }) => (
  <div
    key={title}
    className="card card-compact xxl:card-normal bg-gradient-to-br from-primary/30 to-accent/30 flex-1"
  >
    <div className="card-body">
      <p className="card-title">{title}</p>
      <p className="text-xs xl:text-sm xxl:text-base pb-4">{content}</p>
      <div className="card-actions justify-end">
        <Icon className="w-8 h-8 xxl:w-12 xxl:h-12 text-primary drop-shadow-primary drop-shadow-2xl" />
      </div>
    </div>
  </div>
);

export default NetflixReasons;
