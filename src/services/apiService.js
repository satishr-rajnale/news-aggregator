import axios from "axios";

const NEWS_API_KEY = "1ac6c4aa95bf400b83e99eec2abc9959";
const GUARDIAN_API_KEY = "72f5d272-3304-4a9d-8891-a752ba2f2661";
const NYT_API_KEY = "RGlOcSSCKpUc4b2L62vNgrrGncR9kIMY";

export const fetchNewsAPI = (query, category, source) => {
  const url = `https://newsapi.org/v2/everything?q=${
    query ? query : "all"
  }&apiKey=${NEWS_API_KEY}`;
  return axios.get(url);
};

export const fetchGuardian = (query, category, startDate, endDate) => {
  const url = `https://content.guardianapis.com/search?q=${
    query ? query : "all"
  }&begin_date=${startDate}&end_date=${endDate}&category=${category}&api-key=${GUARDIAN_API_KEY}`;
  return axios.get(url);
};

export const fetchNYT = (query, section) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
    query ? query : "all"
  }&fq=news_desk:("${section}")&api-key=${NYT_API_KEY}`;
  return axios.get(url);
};

export const fetchNewsAPIAll = (query, category, source) => {
  const url = `https://newsapi.org/v2/everything?q=${
    query ? query : "all"
  }&apiKey=${NEWS_API_KEY}`;
  return axios.get(url);
};

export const fetchGuardianAll = (query, category, startDate, endDate) => {
  const url = `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}`;

  return axios.get(url);
};

export const fetchNYTAll = (query, section) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYT_API_KEY}`;
  return axios.get(url);
};
