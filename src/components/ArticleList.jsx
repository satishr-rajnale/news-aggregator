import React from "react";
import { useSelector } from "react-redux";

const ArticleList = () => {
  const { articles, loading, error } = useSelector((state) => state.news);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <section className="mb-32 text-center">
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {articles?.map((article) => (
            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div
                    className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src={article?.urlToImage || "./no-photo.png"}
                      className="w-full"
                      alt="news deatils"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">
                    {article?.title || article?.headline?.main}
                  </h5>
                  <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>
                      Published <u>{article?.publishedAt}</u> by
                      <a href="#!">{article?.author}</a>
                    </small>
                  </p>
                  <p className="mb-4 pb-2">
                    {article?.description ||
                      article?.abstract ||
                      article?.webTitle}
                  </p>
                  <a
                    href={article?.url || article?.web_url || article?.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleList;
