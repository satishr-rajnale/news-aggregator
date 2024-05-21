import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import globalReducer from "../features/news/globalSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    global: globalReducer,
  },
});
