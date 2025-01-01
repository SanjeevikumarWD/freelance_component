import img from "../../public/4.jpg";
const Card = () => {
  return (
    <div className="flex justify-around p-10">

      <div className="w-3/5">
        <img src={img} alt="Baby Image" className="h-64 w-64 rounded-xl" />
      </div>

      <div className=" flex flex-col justify-between">
        
        <div className="flex items-center">
          <p className="text-gray-400 font-medium">Feb 12, 2022</p>
          <p className="bg-blue-100 px-3 py-1 ml-5 rounded-full font-semibold text-gray-600">Business</p>
        </div>

        <h1 className="text-3xl text-gray-500 font-semibold">Improve Your Customer Experience</h1>
        <p className=" text-gray-500 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          sed voluptate in illum esse? Maiores ex molestiae optio veritatis
          saepe. Atque eum nisi soluta debitis pariatur deleniti eaque ducimus
          error.
        </p>

        <hr />

        <div className="flex items-center space-x-3">
            <img src={img} alt="Baby Image" className="h-10 w-10 rounded-full"/>
            <div>
                <h1 className="font-bold text-gray-600">Tom Cook</h1>
                <p className="text-gray-500 font-medium">Director Of Product</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
