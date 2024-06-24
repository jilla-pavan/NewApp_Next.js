/* eslint-disable @next/next/no-img-element */
import React from "react";

interface NewsData {
  title?: string;
  description?: string;
  urlToImage?: string;
}

interface NewsCardProps {
  NewsData: NewsData;
}

function NewsCard({ NewsData }: NewsCardProps) {
  if (!NewsData) {
    return null; // or return a placeholder if needed
  }
  console.log(NewsData);

  const { title, description, urlToImage } = NewsData;

  if (NewsData)
    return (
      <div className="bg-white m-1 rounded-lg p-2 shadow-lg w-[270px] h-[400px] flex items-center justify-center flex-col">
        <div className="h-[200px]">
          <img
            className="h-[170px] w-[300px]  rounded-xl shadow-lg"
            src={
              urlToImage === null
                ? "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg"
                : urlToImage
            }
            alt="image"
          />
        </div>
        <div className="h-[240px] bg-red-200 rounded-lg w-full">
          <h1 className="p-2 text-sm font-bold">
            {title === null || undefined ? "Title of the Page" : title}
          </h1>
          <div className="overflow-y-scroll h-1/2">
            <p className="px-2 text-sm ">
              {description === null || undefined ? "Description" : description}
            </p>
          </div>
        </div>
      </div>
    );
}

export default NewsCard;
