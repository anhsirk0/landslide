import { usePageTitle } from "@/hooks";

const Netflix = () => {
  usePageTitle("Netflix");

  return (
    <div className="center">
      <p className="text-5xl">Netflix</p>
    </div>
  );
};

export default Netflix;
