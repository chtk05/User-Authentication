const Home = () => {
  return (
    <div className="flex flex-col w-3/6 mx-auto">
      <h1 className="text-3xl font-bold mt-10 flex justify-center text-center ">
        <span className="text-[#FFA62F]">AN</span>ime Club.
      </h1>
      <div className="flex justify-between gap-2">
        <img src="animeclub.jpeg" alt="animeclb" className="h-96" />
        <img src="anime3.jpeg" alt="animeclb1" className="h-96" />
        <img src="anime5.jpeg" alt="animeclb2" className="h-96" />
      </div>
      <blockquote class="w-full mx-auto ml-5 p-4 my-4 border-s-4 border-gray-300 bg-gray-50 flex ">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 ">
          "Anime is just awesome. It make people laught, cry, delight.
        </p>
      </blockquote>
    </div>
  );
};

export default Home;
