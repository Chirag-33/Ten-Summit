import React, { useState } from "react";
import img from "../../assets/images/newspage-illu-1-1.webp";
import "./news.css";
import { newsData } from "../../assets/data/news_data.js";


export default function News() {
  const [active, setActive] = useState("in-the-news");
  return (
    <>
      <div className="image">
        <h1>ScyllaDB in the News</h1>
        <img src={img} alt="" />
      </div>
      <div className="tab">
        <button
          onClick={() => {
            setActive("in-the-news");
          }}
          className={`tab-button ${
            active === "in-the-news" ? "activetab" : ""
          }`}
        >
          In The News
        </button>
        <button
          onClick={() => {
            setActive("press-releases");
          }}
          className={`tab-button ${active === "press-releases" ? "activetab" : ""}`}
        >
          Press Releases
        </button>
        <div></div>
      </div>
      <div>
        {active === "press-releases" ? (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              rerum libero aliquid blanditiis officia obcaecati magnam ducimus
              ipsum magni maxime? At in accusantium perferendis autem nihil
              quam, cupiditate unde voluptas debitis vel blanditiis facere!
            </p>
          </div>
        ) : (
          <div className="news-container">
           {
            newsData.map(({id,img,desc,date})=>{
              return(
                <div key={id} className="card">
                  <img src={img} alt="newsimage" style={{height:"50px", width:"300px"}} />
                  <h3 className="p1">{desc}</h3>
                  <p className="p2">{date}</p>
                </div>
              )
            })
           }
          </div>
        )}
      </div>
    </>
  );
}
