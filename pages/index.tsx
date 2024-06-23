import SwipeButton from "./components/SwipeButton";

const IndexPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center flex-col h-[500px] border border-black bg-red-500 w-[300px] rounded-lg p-6">
        <h1 className="font-bold mb-4 py-4 text-white">
          Welcome To News Feed App
        </h1>
        <SwipeButton path="/news" />
      </div>
    </div>
  );
};

export default IndexPage;
