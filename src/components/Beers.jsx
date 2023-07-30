import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BeerFetch from "./BeerFetch";
import { BiLoaderAlt } from "react-icons/bi";
import PageNav from "./PageNav";

const Beers = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const beerClick = (beer) => {
    navigate("/beer", { state: { beer } });
  };
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    refetch();
    scrollToTop();
  };
  const getBeerPages = async () => {
    try {
      return await BeerFetch(currentPage);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    isSuccess,
    isLoading,
    data: beers,
    refetch,
  } = useQuery({
    queryKey: ["beers", currentPage],
    queryFn: getBeerPages,
  });

  return (
    <div className="w-full max-h-fit flex flex-col items-center gap-6 p-2">
      {isLoading && <BiLoaderAlt size={30} className="animate-spin" />}
      <div className="sm:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isSuccess &&
          beers.map(
            (
              {
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
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="group flex flex-col justify-end items-center text-center gap-3 bg-[#E7E6E1] rounded-xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    beerClick({
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
                    })
                  }
                >
                  <div className="py-4">
                    <img
                      src={image_url}
                      alt="/"
                      className="max-h-[300px] group-hover:scale-[1.1] transition ease-in-out"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-3 bg-[#F2A154] p-4">
                    <h1 className="text-3xl font-semibold">{name}</h1>
                    <p className="text-xl font-semibold">
                      First brewed: {first_brewed}
                    </p>
                    <p>{description}</p>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <div>
        <PageNav
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Beers;
