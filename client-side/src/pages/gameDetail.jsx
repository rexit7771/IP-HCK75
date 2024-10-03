import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, getGamesSuccess, isError } from "../store/games";
import { Link } from "react-router-dom";


export default function gameDetail() {
     const dispatch = useDispatch();
     const { data, errors, loading } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  
    return(

    )
}