import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";
export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetGif(category).then((g) => {
      setTimeout(() => {
        setstate({
          data: g,
          loading: false,
        });
      }, 2000);
    });
  }, [category]);
  return state;
};
