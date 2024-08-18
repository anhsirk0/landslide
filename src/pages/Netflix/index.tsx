import { usePageTitle } from "@/hooks";

const Netflix = () => {
  usePageTitle("Netflix");

  return (
    <div className="center flex-col">
      <p className="text-5xl">Netflix</p>
      <p className="text-3xl">Todo</p>
    </div>
  );
};

export default Netflix;
