import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ViewBeer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { beer } = location.state || {};
  const {
    name,
    tagline,
    ph,
    volume,
    ingredients,
    food_pairing,
    brewers_tips,
    description,
    first_brewed,
    image_url,
  } = beer;
  const { value, unit } = volume;
  const { malt } = ingredients;
  return (
    <div className="w-full min-h-screen max-h-fit overflow-hidden p-2 ">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 p-2"
      >
        Return
        <RiArrowGoBackFill size={20} className="text-[#F2A154]" />
      </button>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center gap-4 bg-[#E7E6E1] rounded-lg overflow-hidden ">
        <div className="flex justify-center py-4">
          <img
            src={image_url}
            alt="beer"
            className="max-h-[300px] lg:max-h-[100%]"
          />
        </div>
        <div className=" h-full flex flex-col justify-center items-center gap-2 bg-[#F2A154] p-2">
          <h1 className="text-3xl font-bold lg:text-6xl">{name}</h1>
          <h2 className="font-semibold lg:text-xl">
            First brewed: {first_brewed}
          </h2>
          <p>{tagline}</p>
          <p>{description}</p>
          <p>
            <span className="font-bold lg:text-xl">Acidity:</span> {ph}
          </p>
          <p>
            <span className="font-bold lg:text-xl">Volume: </span>
            {value} {unit}
          </p>
          <h1 className="font-bold lg:text-xl">Ingredients:</h1>
          <ul>
            <li>{malt[0].name}</li>
            <li>
              Amount: {malt[0].amount.value} {malt[0].amount.unit}
            </li>
          </ul>
          <h1 className="font-bold lg:text-xl">Best with:</h1>
          <ul className="list-disc">
            {food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
          <h1 className="font-bold lg:text-xl">Tips:</h1>
          <p>{brewers_tips}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBeer;
