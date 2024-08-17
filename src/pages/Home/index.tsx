import { usePageTitle } from "@/hooks";

const Home = () => {
  usePageTitle("Home");
  return (
    <div className="center">
      <p className="text-5xl">Home</p>
    </div>
  );
};

export default Home;
