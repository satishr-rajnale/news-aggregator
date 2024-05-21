import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import Datepicker from "react-tailwindcss-datepicker";
import DropDown from "./DropDown";

const categories = [
  { value: "technology", label: "Technology" },
  { value: "sports", label: "Sports" },
  { value: "business", label: "Business" },
];

const sources = [
  { value: "newsapi", label: "NewsAPI" },
  { value: "guardian", label: "The Guardian" },
  { value: "nyt", label: "New York Times" },
];

function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);
  const [source, setSource] = useState(null);
  const [datePickerValue, setDatePickerValue] = useState({
    startDate: getPreviousDay(new Date()),
    endDate: getPreviousDay(new Date()),
  });
  const dispatch = useDispatch();
  const preferance = useSelector((state) => state.global.preferance);

  const handleSearch = () => {
    dispatch(
      fetchNews({
        query,
        category: category,
        source: source,
        startDate: datePickerValue.startDate,
        endDate: datePickerValue.endDate,
      })
    );
  };

  const handleValueChange = (newValue) => {
    setDatePickerValue(newValue);
  };

  return (
    <div className="w-full">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2">
          {!preferance && (
            <input
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              className="shadow mx-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search..."
            />
          )}
          <Datepicker
            containerClassName={"mx-2 relative text-gray-700"}
            inputClassName={
              "border rounded text-gray-700 relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
            }
            primaryColor={"blue"}
            placeholder={"Search by date..."}
            displayFormat={"DD-MM-YYYY"}
            useRange={false}
            asSingle={true}
            value={datePickerValue}
            onChange={handleValueChange}
          />
          <DropDown
            value={category}
            setvalue={setCategory}
            options={categories}
          />
          <DropDown value={source} setvalue={setSource} options={sources} />
        </div>
        <div className="flex items-center justify-end">
          {!preferance && (
            <button
              onClick={handleSearch}
              className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Filter
            </button>
          )}

          {preferance && (
            <button
              className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Set Preferance
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
