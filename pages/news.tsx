import React, { useState } from "react";
import useSWR from "swr";
import { News_URL } from "./utils/constants";
import NewsCard from "./components/NewsCard";
import Shimmer from "./components/Shimmer";

interface NewsData {
  id: number;
  title: string;
  content: string;
  description: string;
  urlToImage: string; 
}

interface NewsApiResponse {
  articles: NewsData[]; 
}

const News = () => {
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json() as Promise<NewsApiResponse>); 

  const { data: newsData, error } = useSWR(News_URL, fetcher);

  const [activeNewsCard, setActiveNewsCard] = useState(0);

  const handleNextClick = () => {
    setActiveNewsCard((activeNewsCard + 1) % (newsData?.articles.length || 1)); 
  };

  if (error) return <div>{error}</div>;

  return !newsData ? (
    <Shimmer /> 
  ) : (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center flex-col h-[500px] border border-black bg-red-500 w-[300px] rounded-lg p-6">
        <div className="">
          {newsData.articles.map((article, i) => (
            <div key={article.id} className={activeNewsCard === i ? "block" : "hidden"}>
              <NewsCard NewsData={article} />
            </div>
          ))}
        </div>
        <button
          className="m-2 px-4 py-2 bg-green-300 rounded-xl font-bold text-sm hover:bg-green-400 w-1/2"
          onClick={handleNextClick}
        >
          Click For Next
        </button>
      </div>
    </div>
  );
};

export default News;