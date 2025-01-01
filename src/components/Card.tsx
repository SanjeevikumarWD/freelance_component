import img from "../../public/4.jpg";

const Card = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="flex flex-col md:flex-row md:justify-around md:space-x-6 lg:space-x-8">
        <div className="w-full md:w-2/5 mb-6 md:mb-0">
          <img 
            src={img} 
            alt="Baby Image" 
            className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between space-y-4 md:space-y-3 md:w-3/5">
          <div className="flex items-center flex-wrap gap-3">
            <p className="text-gray-400 font-medium text-sm lg:text-base">Feb 12, 2022</p>
            <p className="bg-blue-100 px-3 py-1 rounded-full font-semibold text-gray-600 text-sm lg:text-base">
              Business
            </p>
          </div>

          <h1 className="text-2xl md:text-2xl lg:text-3xl text-gray-500 font-semibold">
            Improve Your Customer Experience
          </h1>

          <p className="text-gray-500 font-medium text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
            sed voluptate in illum esse? Maiores ex molestiae optio veritatis
            saepe. Atque eum nisi soluta debitis pariatur deleniti eaque ducimus
            error.
          </p>

          <hr className="my-4 md:my-3" />

          <div className="flex items-center space-x-3">
            <img 
              src={img} 
              alt="Baby Image" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold text-gray-600 text-sm lg:text-base">Tom Cook</h1>
              <p className="text-gray-500 font-medium text-xs lg:text-sm">Director Of Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;