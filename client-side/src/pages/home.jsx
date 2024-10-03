import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, getGamesSuccess, isError } from "../store/games";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  const { data, errors, loading } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {loading
        ? "Loading....."
        : data?.results.map((e, idx) => {
            return (
              <div key={idx}>
                <Link className="group relative block bg-black">
                  <img
                    alt=""
                    src={e.background_image}
                    className="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-red-500">
                      {e.genres[0].name}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {e.name}
                    </p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          <span className="font-bold text-xl text-red-500">
                            Ratings:
                          </span>{" "}
                          <br />
                          <span className="font-bold text-lg text-yellow-400">
                            {e.rating} / {e.rating_top}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
