/* eslint-disable @next/next/no-img-element */
import React from "react";
import { imgNotFound } from "../utils/constants";

interface NewsData {
  id: number;
  title: string;
  content: string;
  description: string;
  urlToImage: string;
}

interface NewsCardProps {
  NewsData: NewsData;
}

function NewsCard({ NewsData }: NewsCardProps) {
  console.log(NewsData);

  const { title, description, urlToImage } = NewsData;

  return (
    <div className="bg-white m-1 rounded-lg p-2 shadow-lg w-[270px] h-[400px] flex items-center justify-center flex-col">
      <div className="h-[200px]">
        <img
          className="h-[170px] w-[300px]  rounded-xl shadow-lg"
          src={urlToImage === null ? imgNotFound : urlToImage}
          alt="image"
        />
      </div>
      <div className="h-[240px] bg-red-200 rounded-lg ">
        <h1 className="p-2 text-sm font-bold">{title}</h1>
        <div className="overflow-y-scroll h-1/2">
          <p className="px-2 text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
