import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchNewsAPI,
  fetchGuardian,
  fetchNYT,
  fetchGuardianAll,
  fetchNYTAll,
  fetchNewsAPIAll,
} from "../../services/apiService";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ query, category, source, startDate, endDate }) => {
    let response;
    switch (source) {
      case "newsapi":
        response = await fetchNewsAPI(query, category);
        break;
      case "guardian":
        response = await fetchGuardian(query, category, startDate, endDate);
        break;
      case "nyt":
        response = await fetchNYT(query, category);
        break;
      case "newsapiall":
        response = await fetchNewsAPIAll(query);
        break;
      case "guardianall":
        response = await fetchGuardianAll(query);
        break;
      case "nytall":
        response = await fetchNYTAll(query);
        break;
      default:
        response = await fetchNewsAPI(query, category);
    }

    return (
      response.data.articles ||
      response.data.response.docs ||
      response?.data?.response?.results
    );
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
