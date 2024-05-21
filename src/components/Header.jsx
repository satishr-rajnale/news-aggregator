import React, { useEffect, useState } from "react";
import { fetchNews } from "../features/news/newsSlice";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalValue } from "../features/news/globalSlice";

export default function Header({ flag, setFlag }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("newsapiall");

  const filter = useSelector((state) => state.global.filter);
  const preferance = useSelector((state) => state.global.preferance);

  useEffect(() => {
    dispatch(
      fetchNews({
        source: "newsapiall",
      })
    );
  }, [dispatch]);

  const handleChange = (event) => {
    const source = event.target.value;
    setSource(source);
    dispatch(
      fetchNews({
        source: source,
      })
    );
  };

  const handleClick = () => {
    dispatch(
      fetchNews({
        source: source,
        query: query,
      })
    );
  };

  return (
    <header>
      <div className="mb-5 w-full px-5 py-5 flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-5">
          <div className="text-xl font-semibold whitespace-nowrap dark:text-white">
            News Aggregator
          </div>
          <div className="flex w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="Search news by keyword"
              className="flex-grow px-3 h-10 rounded-l border-2 focus:outline-none focus:border-slate-600"
            />
            <button
              onClick={handleClick}
              className="bg-slate-600 text-white rounded-r px-3 py-1"
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex flex-col md:flex-row gap-5">
          <select
            id="pricingType"
            name="pricingType"
            onChange={handleChange}
            className="w-full md:w-[50%] h-10 border-2 focus:outline-none focus:border-slate-600 text-slate-600 rounded px-2 md:px-3 py-1 tracking-wider"
          >
            <option value="newsapiall" selected="newsapiall">
              The News
            </option>
            <option value="nytall">New York Times</option>
            <option value="guardianall">The Guardian</option>
          </select>
          <div className="flex gap-3 justify-center items-center">
            <div
              onClick={() =>
                dispatch(setGlobalValue({ key: "filter", value: !filter }))
              }
              className="cursor-pointer text-xl font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Filter
            </div>
            <div
              onClick={() =>
                dispatch(
                  setGlobalValue({ key: "preferance", value: !preferance })
                )
              }
              className="cursor-pointer text-xl font-semibold  block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Preference
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
