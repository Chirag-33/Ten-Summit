import React, { useState } from "react";
import img from "../../assets/images/newspage-illu-1-1.webp";
import "./news.css";
import { newsData } from "../../assets/data/news_data.js";

export default function News() {
  const [activeTab, setActiveTab] = useState("news");
  return (
    <>
      <div className="image">
        <h1>ScyllaDB in the News</h1>
        <img src={img} alt="" />
      </div>
      <div className="toggle-container">
      <div className="toggle">
        <div
          className={`slider ${activeTab === "news" ? "left" : "right"}`}
        ></div>
        <button
          className={activeTab === "news" ? "active" : ""}
          onClick={() => setActiveTab("news")}
        >
          In The News
        </button>
        <button
          className={activeTab === "press" ? "active" : ""}
          onClick={() => setActiveTab("press")}
        >
          Press Releases
        </button>
      </div>
    </div>
      <div>
        {activeTab === "press" ? (
          <div className="press-container">
            <div
              data-paged="1"
              className="press-releases-list__wrapper load-posts no-posts"
            >
              <div className="press-release-item">
                <div className="post-date">December 3, 2024</div>
                <h3>
                  <a href="#">
                    New ScyllaDB Release Delivers Unprecedented Elasticity &amp;
                    Efficiency via “Tablets” Architecture
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">June 12, 2024</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces 6.0 Release for True Elastic Scale
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 20, 2024</div>
                <h3>
                  <a href="#">
                    New ScyllaDB Release Achieves 50% Higher Throughput, 33%
                    Lower Latency
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 14, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Named Fastest Growing NoSQL Database on Deloitte
                    Fast 500 List for the Second Consecutive Year
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">October 17, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Raises $43M to Take on MongoDB at Scale, Push
                    Database Performance to New Levels
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 29, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Wins Google Cloud Customer of the Year Award
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 22, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces NoSQL Release With Raft for Strong
                    Consistency
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 23, 2023</div>
                <h3>
                  <a href="#">
                    ZEE5 Moves to ScyllaDB NoSQL to Enhance User Experience at
                    Scale with Predictable Costs
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 18, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Adds Jon Bakke of MariaDB to its Leadership Team,
                    Supporting Rapid DBaaS Growth
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 28, 2023</div>
                <h3>
                  <a href="#">
                    ScyllaDB Continues Record Growth in Response to Rising Cloud
                    Cost Pressures
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">December 13, 2022</div>
                <h3>
                  <a href="#">
                    ScyllaDB Teams up with Intel to Achieve Staggering NoSQL
                    Performance with 3rd Gen Intel Xeon Scalable Processors
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 30, 2022</div>
                <h3>
                  <a href="#">
                    ScyllaDB Expands Leadership Team with Red Hat Veteran Amidst
                    Rapid Growth
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 16, 2022</div>
                <h3>
                  <a href="#">
                    ScyllaDB Ranked as one of the Fastest-Growing Companies in
                    North America on the 2022 Deloitte Technology Fast 500™
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 28, 2022</div>
                <h3>
                  <a href="#">
                    Uber, Lyft, Square, ScyllaDB &amp; Google Engineers on the
                    P99 CONF Agenda
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">July 12, 2022</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces ScyllaDB V, Addressing Legacy NoSQL
                    Challenges
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 12, 2022</div>
                <h3>
                  <a href="#">
                    Responding to Rapid Database-as-a-Service Adoption, ScyllaDB
                    Launches Customer Advisory Board
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 28, 2022</div>
                <h3>
                  <a href="#/">
                    ScyllaDB Gives Customers Higher NoSQL Performance with
                    Support for new Amazon EC2 I4i Instances
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 13, 2022</div>
                <h3>
                  <a href="#">
                    Monstrously Fast + Scalable NoSQL Database, ScyllaDB, Now
                    Available on AWS Marketplace
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 16, 2022</div>
                <h3>
                  <a href="#">
                    Top NoSQL Innovators Honored with ScyllaDB Awards
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">January 25, 2022</div>
                <h3>
                  <a href="#">
                    Cloud Database Demand Spurs 198% Growth for ScyllaDB
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 30, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Joins AWS ISV Accelerate Program to Scale
                    Data-Intensive Applications
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 11, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Appoints SaaS Strategy Executive Wayne Ariola as
                    Chief Marketing Officer
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 4, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces NoSQL Database as a Service Now Available
                    on Google Cloud
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">July 27, 2021</div>
                <h3>
                  <a href="#">
                    For Developers Only: ScyllaDB Announces P99 CONF Speaker
                    Lineup
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">June 16, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Comprehensive Support for Apache Kafka
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 20, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces ScyllaDB Enterprise 2021 NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 27, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces SOC 2 Certification for NoSQL
                    Database-as-a-Service
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">January 13, 2021</div>
                <h3>
                  <a href="#">
                    Innovative Spirit Shines at 2021 ScyllaDB User Awards
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">January 12, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Unveils ‘Monstrous’ New Capabilities for its NoSQL
                    Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">January 6, 2021</div>
                <h3>
                  <a href="#">
                    ScyllaDB Summit 2021 Ready to Kick Off Largest Program Ever
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 30, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Hires Experienced NoSQL and Open Source Growth
                    Leader Randall Jackson as Chief Revenue Officer
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 15, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces ScyllaDB Cloud is AWS Outposts Ready
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 2, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Unveils One-Step Migration from Amazon DynamoDB to
                    ScyllaDB NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 19, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces ScyllaDB Enterprise 2020 NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">July 22, 2020</div>
                <h3>
                  <a href="#">
                    Discord Chooses ScyllaDB as Its Core Storage Layer
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">June 10, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Adds Amazon DynamoDB-compatible API to
                    Database-as-a-Service Offering
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 7, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces 4.0 Release of Its Open Source NoSQL
                    Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 18, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Extends Support for Streaming with High-Performance
                    Apache Kafka<sup>TM</sup> Connector
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 11, 2020</div>
                <h3>
                  <a href="#">
                    ScyllaDB Enterprise Named a Winner in InfoWorld Technology
                    of the Year Awards
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 6, 2019</div>
                <h3>
                  <a href="#">
                    Comcast, Numberly, FireEye Among Winners of 2019 ScyllaDB
                    User Awards
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 5, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Unveils Highly Anticipated Features for
                    High-Performance NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 5, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Smashes Performance Record, Hits 1,000,000,000 RPS
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">October 11, 2019</div>
                <h3>
                  <a href="#">
                    Logistics Leader GetSwift Delivers with ScyllaDB Enterprise
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 11, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Alternator, an Open Source Amazon
                    DynamoDB-Compatible API
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 11, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Secures $25 Million to Open Source Amazon
                    DynamoDB-compatible API
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">August 28, 2019</div>
                <h3>
                  <a href="#">
                    Super App Grab Partners with ScyllaDB
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 14, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB NoSQL Breakthrough Slashes the Costs of Big Data
                    Applications
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 8, 2019</div>
                <h3>
                  <a href="#">
                    IoT Pioneers Turn to ScyllaDB for Low Latency,
                    Out-of-the-Box Performance at Scale
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 2, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Summit Returns to San Francisco November 2019
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 1, 2019</div>
                <h3>
                  <a href="#">
                    Ad-Tech Leaders Power Real-Time Big Data Platforms with
                    ScyllaDB NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 9, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Launches ScyllaDB Cloud Database as a Service
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 27, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Launches Free Online Learning Resource for Users of
                    Its Powerful NoSQL Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">February 5, 2019</div>
                <h3>
                  <a href="#">
                    ScyllaDB Makes Enterprise Cluster Administration and Task
                    Automation Tool Available to ScyllaDB Open Source Users
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 7, 2018</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Winners of the 2018 ScyllaDB User Awards
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 6, 2018</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Major Release of Its NoSQL Database and
                    Support for Concurrent OLTP and OLAP
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">October 11, 2018</div>
                <h3>
                  <a href="#">
                    NoSQL Experts from Comcast, Grab and Kiwi.com to Keynote
                    ScyllaDB Summit
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">June 6, 2018</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Support for IBM Power Systems
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">April 25, 2018</div>
                <h3>
                  <a href="#">
                    ScyllaDB Secures $10 Million in Series C Funding
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">March 21, 2018</div>
                <h3>
                  <a href="#">
                    ScyllaDB Introduces ScyllaDB Manager for Greater Centralized
                    Control of ScyllaDB Database Clusters
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">November 8, 2017</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces Integration with World’s First 10nm
                    Qualcomm Centriq 2400 Server Processor
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">October 24, 2017</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces 2.0 Release of Its Open Source NoSQL
                    Database
                  </a>
                </h3>
                <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">October 17, 2017</div>
                <h3>
                  <a href="#">
                    ScyllaDB Acquires Seastar.io Database-as-a-Service
                    Technology
                  </a>
                </h3> <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">May 2, 2017</div>
                <h3>
                  <a href="#">
                  ScyllaDB and Samsung SDS Announce Global Partnership
                  </a>
                </h3> <hr />
              </div>
              
              <div className="press-release-item">
                <div className="post-date">March 8, 2017</div>
                <h3>
                  <a href="#">
                    ScyllaDB Closes $16 Million in Series B Funding to Expand
                    Next-Generation Cassandra Database
                  </a>
                </h3> <hr />
              </div>
              <div className="press-release-item">
                <div className="post-date">September 6, 2016</div>
                <h3>
                  <a href="#">
                    ScyllaDB Announces General Availability of World’s Fastest
                    NoSQL Database
                  </a>
                </h3> <hr />
              </div>
            </div>
          </div>
        ) : (
          <div className="news-container">
            {newsData.map(({ id, img, desc, date }) => {
              return (
                <div key={id} className="card">
                  <img
                    src={img}
                    alt="newsimage"
                    style={{ height: "50px", width: "300px" }}
                  />
                  <h3 className="p1">{desc}</h3>
                  <p className="p2">{date}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="contact-conatianer">
        <div className="contact-card">
          <img
            src="https://www.scylladb.com/wp-content/uploads/ScyllaDB-Enterprise-Mascot-2.png"
            alt="conatct-img"
            style={{ width: "100px", height: "100px" }}
          />
          <h2>Contact Us</h2>
          <p>Drop us a line to get in touch or start a live chat.</p>
          <a href="#">Let's talk</a>
        </div>

        <div className="contact-card">
          <img
            src="https://www.scylladb.com/wp-content/uploads/Group-2.png"
            alt="conatct-img"
            style={{ width: "200px", height: "100px" }}
          />
          <h2>We're Hiring!</h2>
          <p>Ready to become a Sea Monster?</p>
          <a href="#">View our open positions</a>
        </div>
      </div>
    </>
  );
}
