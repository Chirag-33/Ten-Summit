import { useState, useRef,useEffect } from 'react';
import './Agenda.css';
import { motion } from "framer-motion";
function Agenda() {
  const tuesdayRef = useRef(null);
  const wednesdayRef = useRef(null);
  const instantRef = useRef(null);
  // State to track expanded/collapsed events
  const [expandedEvents, setExpandedEvents] = useState({});
const [animate, setAnimate] = useState(true);
  // Initial agenda data (unchanged)
  const agendaData = {
    "tuesday": [
      {
        id: "tue-1",
        time: "TUE 8:30 PM - 9:00 PM",
        title: "ScyllaDB Lounge",
        description: "Our engineers will be live discussing extreme scale engineering challenges.",
        buttonText: "Lounge"
      },
      {
        id: "tue-2",
        time: "TUE 9:00 PM - 9:05 PM",
        title: "Day 1 Launch",
        buttonText: "Explorer"
      },
      {
        id: "tue-3",
        time: "TUE 9:05 PM - 9:30 PM",
        title: "KEYNOTE: Kelsey Hightower - Engineering at Scale: What Separates Leaders from Laggards",
        buttonText: "Explorer"
      },
      {
        id: "tue-4",
        time: "TUE 9:30 PM - 10.05 PM",
        author:"Dor Laor ",
        type:"ScyllaDB",
        title: "KEYNOTE: ScyllaDB: 10 Years and Beyond",
        description:"There's a common adage that it takes 10 years to develop a file system. As ScyllaDB reaches that 10 year milestone in 2025, it's the perfect time to reflect on the last decade of ScyllaDB development – both hits and misses. It's especially appropriate given that our project just reached a critical mass with certain scalability and elasticity goals that we dreamed up years ago. This talk will cover how we arrived at ScyllaDB X Cloud achieving our initial vision, and share where we're heading next.",
        buttonText: "Explorer"
      },
      {
        id: "tue-5",
        time: "TUE 10:10 PM - 10:30 PM",
        author:"Claire Adams",
        type:"Stack",
        title: "Scaling Cron at Slack",
        description:"Cron scripts are responsible for critical Slack functionality. They ensure reminders execute on time, email notifications are sent, and databases are cleaned up. As Slack has grown, we have faced the significant challenge of scaling our cron infrastructure from a single node to a robust distributed system capable of handling high volume workloads in a reliant way. In this talk, we will explore our new, hyperscale architecture and key considerations around reliability, maintainability, and, of course, scaling.",
        buttonText: "Explorer"
      },
      {
        id: "tue-6",
        time: "Tue 10:10 pm - 10:25 pm",
        author:"Todd Coleman",
        type:"Yieldmo",
        title: "How Yieldmo Cut Database Costs and Cloud Dependencies Fast",
        description:"Yieldmo's business relies on processing hundreds of billions of daily ad requests with subsecond latency responses. Our services initially depended on DynamoDB, and we valued its simplicity and stability. However, DynamoDB costs were becoming unsustainable, latencies were not ideal, and we sought greater flexibility in deploying services to other cloud providers. In this session, we'll walk you through the various options we considered to address these challenges and share why and how we ultimately moved forward with ScyllaDB's DynamoDB-compatible API.",
        buttonText: "Launchpad"
      },
      {
        id: "tue-7",
        time: "Tue 10:10 pm - 10:40 pm",
        author:"Tzach Livyatan",
        type:"ScyllaDB",
        title: "Reduce Your Cloud Spend with ScyllaDB",
        description:"This talk will explore why ScyllaDB Cloud is a cost-effective alternative to DynamoDB, highlighting efficient design implementations like shared compute, local NVMe storage, and storage compression. It will also discuss new X Cloud features, better plans and pricing, and a direct cost comparison between ScyllaDB and DynamoDB",
        buttonText: "Interstellar"
      },
      {
        id: "tue-8",
        time: "Tue 10:25 pm - 10:45 pm",
        author:"Matt Fleming João Pedro Lima",
        type:"Cloudflare",
        title: "Securely Serving Millions of Boot Artifacts a Da",
        description:"The Cloudflare boot infrastructure serves millions of files every day for individual nodes in colos all around the world. These boot artifacts are generated on-the-fly based on data from the configuration management system as well as a sophisticated experiment framework, which enables seamless testing and troubleshooting. Generated artifacts are cryptographically signed before being served, and verified prior to being executed on the target node. This talk will cover the design and architecture of Cloudflare's boot infrastructure, the decisions we took to help it scale, and how we allow customisation while maintaining a chain of trust.",
        buttonText: "Explorer"
      },
      {
        id: "tue-9",
        time: "Tue 10:25 pm - 10:45 pm",
        author: "Almog Gavra",
        type: "Responsive",
        title: "Replacing RocksDB with ScyllaDB in Kafka Streams",
        description: "This talk covers how we got to today: replacing embedded RocksDB with Scylla in Kafka Streams.\nThis simplifies the architecture and results in monstrously high availability with unlimited scale potential.\n\nSpecifically, we cover:\n- The history of Kafka Streams and how design principles change over time\n- The architectural benefits of unbundling in stream processors\n- How we experimented with advanced ScyllaDB functionality like LWT, TWCS, and bloom filters\n- What our learning and takeaways are from replacing RocksDB with ScyllaDB",
        buttonText: "Launchpad"
    
      },
      {
        id: "tue-10",
        time: "Tue 10:40 pm - 11:10 pm",
        author: "Ivan Zlatoustov Michael Hollander",
        type: "ScyllaDB",
        title: "Recent ScyllaDB Cloud Highlights and Future Roadmap",
        description: "ScyllaDB Cloud continued to evolve over the past year, bringing better privacy options, better performance, better features and more control over available billing options. Join Michael and Ivan to learn all about new features introduced since last year's conference and what's to come in 2025.",
        buttonText: "Interstellar"
      },
      {
        id: "tue-11",
        time: "Tue 10:45 pm - 11:05 pm",
        author: "Worakarn Isaratham",
        type: "Agoda",
        title: "How Agoda Scaled 50x Throughput with ScyllaDB",
        description: "In this talk, we will explore the performance tuning strategies implemented at Agoda to optimize ScyllaDB. Key topics include enhancing disk performance, selecting the appropriate compaction strategy, and adjusting SSTable settings to match our usage profile.",
        buttonText: "Explorer"
      },
      {
        id: "tue-12",
        time: "Tue 10:45 pm - 11:15 pm",
        author: "Avi Kivity",
        type: "ScyllaDB",
        title: "Architecture for Extreme Scale: Scalability is a Feature",
        buttonText: "Launchpad"
      },
      {
        id: "tue-13",
        time: "Tue 11:05 pm - 11:20 pm",
        author: "Vicki Niu",
        type: "Discord",
        title: "How Discord Indexes Trillions of Messages: Scaling Search Infrastructure",
        description: "When Discord first built messages search in 2017, we designed our infrastructure to handle billions of messages sent by millions of users. As our platform grew to trillions of messages, our search system failed to keep up. We thus set out to rebuild our message search platform to meet these new scaling needs using our learnings and some new technologies.\n\nThis talk will share how we scaled Discord's message search infrastructure using Rust, Kubernetes, and a multi-cluster Elasticsearch architecture to achieve better performance, operability, and reliability, while also enabling new search features for Discord users.",
        buttonText: "Explorer"
      },
      {
        id: "tue-14",
        time: "Tue 11:10 pm - 11:30 pm",
        author: "Ran Regev",
        type: "ScyllaDB",
        title: "Object Storage in ScyllaDB",
        description: "In this talk we take a look at how Object Storage is used by Scylla. We focus on current usage, namely - for backup, and we look at the shift in implementation from an external tool to native Scylla. We take a close look at the complexity of backup and restore mostly in the face of topology changes and token assignments. We also take a glimpse to the future and see how Scylla is going to use Object Storage as its native storage. We explore a few possible applications of it and understand the tradeoffs.",
        buttonText: "Interstellar"
      },
      {
        id: "tue-15",
        time: "Tue 11:15 pm - 11:50 pm",
        author: "Felipe Mendes",
        type: "ScyllaDB",
        title: "ScyllaDB is No Longer Just a Faster Cassandra",
        description: "Predictable performance isn't just a feature—it's a must for anyone building serious, data-intensive applications at scale.\n\nScyllaDB has often been labeled merely as a faster alternative to Cassandra, but is it all that there's to it?\n\nIn this talk, let's discuss the results of our head-to-head comparison between the long-delayed Apache Cassandra 5.0 release versus ScyllaDB and explain on what truly sets ScyllaDB apart beyond just speed.",
        buttonText: "Launchpad"
      },
      {
        id: "tue-16",
        time: "Tue 11:20 pm - 11:40 pm",
        author: "Benjamin Cane",
        type: "American Express",
        title: "Route It Like It's Hot: Scaling Payments Routing at American Express",
        description: "In 2023, there were over 723 billion credit card transactions. Whenever someone taps, swipes, dips, or clicks a credit or debit card, a payment switch ensures the transaction arrives safely and securely at the correct financial institution. These payment switches are the backbone of the worldwide payments ecosystem.\n\nJoin the American Express Payment Acquiring and Network team as they share their experiences from building their Global Transaction Router, which is responsible for switching and routing payments at the scale of American Express. They will explore how they've designed, built, and operated this Global Transaction Router to perform during record-breaking shopping holidays, ticket sales, and unexpected customer behavior.\n\nThe audience will leave with a deep understanding of the unique challenges of a payments switch (E.g., routing ISO 8583 transactions as fast as possible), some of our design choices (E.g., using containers and avoiding logging), and a deep dive into a few implementation challenges (E.g., Inefficient use of Goroutines and Channels) we found along the way.",
        buttonText: "Explorer"
      },
      {
        id: "tue-17",
        time: "Tue 11:30 pm - Wed 12:00 am",
        author: "Paul Preuveneers",
        type: "ScyllaDB",
        title: "High Availability: Lessons Learned",
        buttonText: "Explorer"
      },
      {
        id: "tue-18",
        time: "Tue 11:40 pm - 11:55 pm",
        author: "Kerry Halupka",
        type: "Canva",
        title: "40B Images and Counting Scaling Canva's Content-Understanding Pipelines",
        description: "Building an AI system that understands billions of images is hard. Building one that can continuously learn new concepts is even harder. At Canva, we faced this challenge: how do we teach our AI to recognize thousands of concepts across 30 billion images, while continuously adding new concepts as visual trends emerge?\n\nTraditional approaches break down at this scale - manual labeling becomes impossible and common architectures scale poorly with the number of concepts. I'll share how we tackled these challenges by combining large language models and vision-language models to automatically generate training data, paired with a modified transformer architecture that scales linearly with concepts.\n\nYou'll learn how we automated what was previously a heavily manual process, ensuring quality while handling both common and rare concepts at massive scale.",
        buttonText: "Explorer"
      },
      {
        id: "tue-19",
        time: "Wed 12:00 am - 12:25 am",
        author: "Gwen Shapira",
        type: "Nile",
        title: "KEYNOTE: The Nile Approach: Re-engineering Postgres for Millions of Tenants",
        description: "Scaling relational databases is a notoriously challenging problem. Doing so while maintaining consistent low latency, efficient use of resources and compatibility with Postgres may seem impossible. At Nile, we decided to tackle the scaling challenge by focusing on multi-tenant applications. These applications require not only scalability, but also a way to isolate tenants and avoid the noisy neighbor problem. By tackling both challenges, we developed an approach, which we call \"virtual tenant databases\", which gives us an efficient way to scale Postgres to millions of tenants while still maintaining consistent performance.\n\nIn this talk, I'll explore the limitations of traditional scaling for multi-tenant applications and share how Nile's virtual tenant databases address these challenges. By combining the best of Postgres existing capabilities, distributed algorithms and a new storage layer, Nile re-engineered Postgres for multi-tenant applications at scale.",
        buttonText: "Explorer"
      },
      {
        id: "tue-20",
        time: "Wed 12:30 am - 12:55 am",
        author: "Ivan Burmistrov David Malinge",
        type: "NilShareChat",
        title: "KEYNOTE: Feature Store Evolution Under Cost Constraints: When Cost is Part of the Architecture",
        description: "At P99 CONF 23, the ShareChat team presented the scaling challenges for the ML Feature Store so it could handle 1 billion features per second. Once the system was scaled to handle the load, the next challenge the team faced was extreme cost constraints: it was required to make the same quality system much cheaper to run.\n\nIvan and David will talk about approaches the team implemented in order to optimize for cost in the Cloud environment while maintaining the same SLA for the service. The talk will touch on such topics as advanced optimizations on various levels to bring down the compute, minimizing the waste when running on Kubernetes, autoscaling challenges for stateful Apache Flink jobs, and others. The talk should be useful for those who are either interested in building or optimizing an ML Feature Store or in general looking into cost optimizations in the cloud environment.",
        buttonText: "Explorer"
      },
      {
        id: "tue-21",
        time: "Wed 12:55 am - 1:00 am",
        title: "Wrap-up and Day 2 Preview",
        buttonText: "Explorer"
      },
    ],
    "wednesday": [
      {
        id: "wed-1",
        time: "Wed 7:30 pm - 8:30 pm",
        title: "ScyllaDB Lounge | Training",
        buttonText: "Lounge"
      },
      {
        id: "wed-2",
        time: "Wed 8:30 pm - 9:00 pm",
        title: "ScyllaDB Lounge",
        buttonText: "Lounge"
      },
      {
        id: "wed-3",
        time: "Wed 9:00 pm - 9:05 pm",
        title: "Day 2 Launch",
        buttonText: "Explorer"
      },
      {
        id: "wed-4",
        author:"Martin Kleppmann Chris Riccomini",
        type:"Authors of Designing Data Intensive Applications",
        time: "Wed 9:05 pm - 9:35 pm",
        title: "KEYNOTE: Designing Data-Intensive Applications in 2025",
        description:"Join us for an informal chat with Martin Kleppmann and Chris Riccomini, who are currently revising the famous book Designing Data-Intensive Applications. We'll cover how Data-Intensive Applications have evolved since the book was first published, the top tradeoffs people are negotiating today, and what they believe is next for Data-Intensive Applications. Martin and Chris will also provide an inside look at the book writing and revision process.",
        buttonText: "Explorer"
      },
      {
        id: "wed-5",
        author:"Avi Kivity",
        type:"ScyllaDB",
        time: "Wed 9:35 pm - 10:10 pm",
        title: "KEYNOTE: ScyllaDB's Monstrous Engineering Advances",
        buttonText: "Explorer"
      },
      {
        id: "wed-6",
        author:"Dzejla Medjedovic-Tahirovic",
        type:"Social Explorer",
        time: "Wed 10:15 pm - 10:40 pm",
        title: "Read- and Write-Optimization in Modern Database Infrastructures",
        description:"In this session, we'll talk about different types of data structures that power large databases, and the tradeoffs involved in read and write optimization. We'll talk about B-trees, B^eps-trees and LSM-trees, and how they work well under different scenarios and are used in different modern technologies.",
        buttonText: "Explorer"
      },
      {
        id: "wed-7",
        author:"Andreas Saudemont",
        type:"Medium",
        time: "Wed 10:15 pm - 10:35 pm",
        title: "Using ScyllaDB to Implement Lists in Medium's Feature Store",
        description:"Learn how we're using ScyllaDB to build a fast and scalable data layer for lists in Medium's feature store.",
        buttonText: "Launchpad"
      },
      {
        id: "wed-8",
        author:"Konstantin Osipov",
        type:"ScyllaDB",
        time: "Wed 10:15 pm - 10:35 pm",
        title: "Surviving Majority Loss: When a Leader Fails",
        description:"In this lightning talk I will present all common combinations of ScyllaDB deployments, single and multi-DC, and how well they play out with Raft based topology management. I'll present ScyllaDB's 2024.2 new feature, zero token nodes, and discuss how they could be used to improve resilience to failure in complex deployments. Another nice feature, which we call Dynamic voter selection which is currently available in scylladb.git and our nightly builds helps reduce the load of Raft on large clusters and dynamically adjust Raft to node starts and stops, always maintaining maximal Raft availability.",
        buttonText: "Interstellar"
      },
      {
        id: "wed-9",
        type:"ASzymon Wasik",
        time: "Wed 10:30 pm - 10:50 pm",
        title: "Vector Search with ScyllaDB",
        description:"Vector search is an essential element of contemporary machine learning pipelines and AI tools. This talk will share preliminary results on the forthcoming vector storage and search features in ScyllaDB. By leveraging Scylla's scalability and USearch library's performance, we have designed a system with exceptional query latency and throughput. The talk will cover vector search use cases, our roadmap, and a comparison of our initial implementation with other vector databases.",
        buttonText: "Interstellar"
      },
      {
        id: "wed-10",
        author:"Alex DeBrie",
        type:"Author of The DynamoDB Book",
        time: "Wed 10:35 pm - 10:55 pm",
        title: "DynamoDB Cost Optimization Considerations and Strategies",
        description:"How to optimize performance and reduce costs with data modeling.",
        buttonText: "launchpad"
      },
      {
        id: "wed-11",
        author:"Dominik Tornow",
        type:"Resonate HQ",
        time: "Wed 10:40 pm - 11:00 pm",
        title: "The Mechanics of Scale",
        description:"As distributed systems scale, the complexity of their development and operation skyrockets. A dependable understanding of the mechanics of distributed systems is our most reliable parachute.\n\nIn this talk, we'll use systems thinking to develop an accurate and concise mental model of concurrent, distributed systems, their core challenges, and the key principles to address these challenges. We'll explore foundational problems such as the tension between consistency and availability, and essential techniques like partitioning and replication.\n\nWhether you are building a new system from scratch or scaling an existing system to new heights, this talk will provide the understanding to confidently navigate the intricacies of modern, large-scale distributed systems",
        buttonText: "Explorer"
      },
      {
        id: "wed-12",
        author:"Felipe Mendes",
        type:"ScyllaDB",
        time: "Wed 10:50 pm - 11:00 pm",
        title: "Workload Prioritization: How to Balance Multiple Workloads in a Cluster",
        buttonText: "interstellar"
      },
      {
        id: "wed-13",
        author:"Richard Hart",
        type:"Antithesis",
        time: "Wed 11:00 pm - 11:20 pm",
        title: "Time Travelling at Scale",
        description:"Antithesis is a continuous reliability platform that autonomously searches for problems in your software within a simulated environment. Every problem we find can be perfectly reproduced, allowing for efficient debugging of even the most complex problems. But storing and querying histories of program execution at scale creates monster large cardinalities. Over a ~10 hour test run, we generate ~1bn rows. The solution: our own tree-database.",
        buttonText: "Explorer"
      },
      {
        id: "wed-14",
        author:"Guilherme Nogueira Nadav Har'El",
        type:"ScyllaDB",
        time: "Wed 11:00 pm - 11:50 pm",
        title: "Exploring ScyllaDB's DynamoDB-Compatible API",
        description:"In this talk we inspect how ScyllaDB implemented Alternator, the DynamoDB-compatible API. We review internal table structure, load balancing and deployment characteristics. We also inspect an existing workload in DynamoDB and compare it running on Scylla Cloud as a DBaaS. Aspects include performance, cost, feature comparison with DynamoDB.",
        buttonText: "launchpad"
      },
      {
        id: "wed-15",
        author:"Maciej Zimnoch",
        type:"ScyllaDB",
        time: "Wed 11:00 pm - 11:10 pm",
        title: "Extreme Elasticity with Tablets, Raft and Kubernetes",
        description:"Recent ScyllaDB versions have improved elasticity using Tablets and Raft-based Consistent Topology Changes, allowing for fast bootstrapping and parallel scaling. We'll discuss the underlying engineering decisions and how they relate to Kubernetes. Then, we'll walk through an example of doubling ScyllaDB cluster size and autoscaling after crossing the 90% disk utilization threshold.",
        buttonText: "interstellar"
      },
      {
        id: "wed-16",
        author:"Botond Dénes",
        type:"ScyllaDB",
        time: "Wed 11:10 pm - 11:20 pm",
        title: "The Future of Repair: Transparent and Incremental",
        description:"Regularly run repairs are essential to keep clusters healthy, yet having a good repair schedule is more challenging than it should be. Repairs often take a long time, preventing running them often. This has an impact on data consistency and also limits the usefulness of the new repair based tombstone garbage collection. We want to address these challenges by making repairs incremental and allowing for automatic repair scheduling, without relying on external tools.",
        buttonText: "interstellar"
      },
      {
        id: "wed-17",
        author:"Glauber Costa",
        type:"Turso",
        time: "Wed 11:20 pm - 11:35 pm",
        title: "Who Needs One Database Anyway?",
        description:"Developers need databases. That's how you store your data. And that's usually how it goes: you have your large fleet of services, and they connect to one database.\n\nBut what if it wasn't like that? What if instead of one database, one application would create one million databases, or even more?\n\nIn this talk we'll explore the market trends that give rise to use cases where this pattern is beneficial, and the infrastructure changes needed to support it.",
        buttonText: "Explorer"
      },
      {
        id: "wed-18",
        author:"Asias He",
        type:"ScyllaDB",
        time: "Wed 11:20 pm - 11:25 pm",
        title: "How We Boosted ScyllaDB Data Streaming by 25x",
        description:"To improve elasticity, we wanted to speed up streaming, the process of scaling out/in to other nodes used to analyze every partition. Enter file-based streaming,  a new feature that optimizes tablet movement. This new approach streams the entire SSTable files without deserializing SSTable files into mutation fragments and re-serializing them back into SSTables on receiving nodes. As a result, significantly less data is streamed over the network, and less CPU is consumed –  especially for data models that contain small cells. This session will share the engineering behind this optimization and look at the performance impact you can expect in common situations.",
        buttonText: "interstellar"
      },
      {
        id: "wed-19",
        author:"Andrei Manakov Ashish Mishra",
        type:"ShareChat",
        time: "Wed 11:25 pm - 11:50 pm",
        title: "Efficient Deduplication in RecSys at Scale: How ShareChat Reduced Server Costs by 90%",
        description:"Efficient deduplication is a crucial component for providing relevant personal recommendations. Andrei and Ashish will explain how to solve this problem and reveal the system's evolution on a scale of more than 300 million monthly users. Following the evaluation, we managed to reduce costs by 90% as well as service latency. In this talk, we will showcase the ScyllaDB schema changes over time and touch on various technologies, including Apache Flink, ScyllaDB, Redpanda, and Google Dataflow.",
        buttonText: "interstellar"
      },
      {
        id: "wed-20",
        author:"Piotr Sarna",
        type:"poolside",
        time: "Wed 11:50 pm - Thu 12:15 am",
        title: "A Dist Sys Programmer's Journey Into AI",
        description:"My talk is an overview of the culture shock you may experience when working on artificial intelligence after spending most of your career in the distributed databases niche. Turns out there's a lot of scale in AI, and in fact distributed storage/compute plays a key role there.",
        buttonText: "Explorer"
      },
      {
        id: "wed-21",
        author:"Patrick Bossman",
        type:"ScyllaDB",
        time: "Wed 11:35 pm - 11:55 pm",
        title: "Database Migration Strategies and Pitfalls",
        description:"Jump start your migration to ScyllaDB! In this talk, we will discuss how to migrate from Cassandra, DynamoDB, as well as other sources. Review tooling available to assist with Scylla Migrations. Review approaches and considerations for online and offline migrations, and how to plan for a faster migration if necessary.",
        buttonText: "launchpad"
      },{
        id: "wed-22",
        author:"Daniel Abadi",
        time: "Wed 11:50 pm - Thu 12:15 am",
        title: "Two Leading Approaches to Data Virtualization: Which Scales Better?",
        description:"You have a large dataset stored in location X, and some code to process or analyze it in location Y. What is better: move the code to the data, or move the data to the code? For decades, it has always been assumed that the former approach is more scalable. Recently, with the rise of cloud computing, and the push to separate resources for storage and compute, we have seen data increasingly being pushed to code, flying in face of conventional wisdom. What is behind this trend, and is it a dangerous idea? This session will look at this question from academic and practical perspectives, with a particular focus on data virtualization, where there exists an ongoing debate on the merits of push-based vs. pull-based data processing.",
        buttonText: "interstellar"
      },{
        id: "wed-23",
        author:"Ethan Donowitz",
        type:"Discord",
        time: "Thu 12:20 am - 12:40 am",
        title: "KEYNOTE: How Discord Performs Database Upgrades at Scale",
        description:"Database upgrades are high-risk but high-reward. Upgrading to a newer version can make your database faster, cheaper, and more reliable; however, without thorough planning and testing, upgrades can be risky. Because databases are stateful, it is often not possible to roll back if you encounter problems after the upgrade due to backwards incompatible changes across versions. While new versions typically mean improved query latencies, changes in query planning or cache behavior across versions can cause unexpected differences in performance in places one might not expect.\n\nDiscord relies on ScyllaDB to serve millions of reads per second across many clusters, so we needed a comprehensive strategy to sufficiently de-risk upgrades to avoid impact to our users. To accomplish this, we use what we call \"shadow clusters.\" A shadow cluster contains roughly the same data as its corresponding cluster in production, and traffic to the primary cluster is mirrored to the shadow cluster.\n\nRunning a real production workload on a shadow cluster can expose differences in performance and resource usage across versions. When mirroring reads, we also have the ability to perform \"read validations,\" where the results for a query issued to the primary cluster and the shadow cluster are checked for equality. This gives us confidence that data has not been corrupted due to differences in behavior across versions. Testing with shadow clusters has been paramount to de-risking complicated upgrades for one of the most important pieces of infrastructure at Discord.",
        buttonText: "Explorer"
      },{
        id: "wed-24",
        author:"Piotr Sarna",
        type:"poolside",
        time: "Wed 11:35 pm - 11:55 pm",
        title: "A Dist Sys Programmer's Journey Into AI",
        description:"This talk is an overview of the culture shock you may experience when working on artificial intelligence after spending most of your career in the distributed databases niche. Turns out there's a lot of scale in AI, and in fact distributed storage/compute plays a key role there.",
        buttonText: "Explorer"
      },
      {
        id: "wed-25",
        author:"Rachel Stephens Adam Jacob",
        time: "Thu 12:45 am - 1:10 am",
        title: "KEYNOTE: Scaling is the Funnest Game",
        description:"Building technology at scale is an intricate and complex problem, but the challenge extends beyond load balancing, data consistency, and fault tolerance. It's hard, but it is worth it. If you can make the technical, financial, and cultural pieces align, building at scale is the funnest game.\n\nCome listen as Rachel Stephens, Research Director at RedMonk, briefly shares some landscape views on industry trends before interviewing Adam Jacob, former co-founder of Chef and CEO co-founder of System Initiative, about his experiences in building at scale.",
        buttonText: "Explorer"
      },
      {
        id: "wed-26",
        time: "Thu 1:10 am - 1:15 am",
        title: "Wrap-up and Prizes",
        buttonText: "Explorer"
      },
    ],
    "instant":[
      {
        id: "instant-1",
        author:"Thiago Maciel",
        type:"Darede",
        time: "Instant Access",
        title: "Building a Scalable Event-Driven Architecture for Open Finance Brasil",
        description:"In this talk, we will show how to create a high-performance application using ScyllaDB and Coroutines",
        buttonText: "Explorer"
      },
      {
        id: "Instant Access-2",
        author:"João Martins",
        type:"iFood",
        time: "Instant Access",
        title: "Building a High Performance Application with ScyllaDB and Coroutines",
        description:"Explore how Open Finance Brasil’s Metadata Collection Platform (PCM) was transformed to handle unprecedented growth and scalability requirements, enabling the secure and efficient processing of billions of financial reports daily. PCM's evolution into an event-driven, serverless architecture involved a complete shift from a diverse tech stack (Elixir, Kotlin, Typescript) to a streamlined, highly efficient Node.js/Nest.js environment. This session explores PCM’s journey to a horizontally scalable, cost-effective model leveraging AWS services such as DynamoDB, S3, SQS, Firehose, EKS with KEDA and Karpenter, and ElasticCache. Through this modernization, PCM achieved a 70% cost reduction per million reports, overcame previous throughput limitations, and established a future-ready architecture. Attendees will gain practical insights and lessons learned from scaling PCM to meet the dynamic demands of Open Finance Brasil.",
      },
      {
        id: "Instant Access-3",
        author:"Evan Chan",
        type:"Conviva",
        time: "Instant Access",
        title: "Data Structures Handling Trillions of Daily Streaming Events",
        description:"Conviva designs and operates a highly scalable and performant, complex streaming analytics pipeline that processes trillions of raw events per day. To make the bar for such a system even higher, we also have made this system programmable, so it is capable of handling varying streaming calculations and workloads. Designing a system capable of sustaining this performance level involves many considerations.\nThis talk dives into data structures and how we chose and improved on them to significantly boost our throughput and improve memory usage, by 5x or more.\n- Improving our execution model and simplifying data structures\n- HashMaps, B-Trees, and choosing not to use maps\n- Copy-on-write and reference counting for the wi\n- Zero-copy data structures and input formats\n- How our choice of Rust gave us much more control over memory layout and optimizations",
      },
      {
        id: "Instant Access-4",
        author:"Chuck Williams",
        type:"Beckman Coulter Life Sciences",
        time: "Instant Access",
        title: "Deploying ScyllaDB as an On-Premise Replacement to DynamoDB",
        description:"Lift-and-shift of a cloud-based analysis application to and on-prem deployment for compliance reasons.",
      },
      {
        id: "Instant Access-5",
        author:"Bhakti Mehta",
        type:"Confluence Cloud",
        time: "Instant Access",
        title: "Evolving Atlassian Confluence Cloud for Scale, Reliability, and Performance",
        description:"This session covers the journey of Confluence Cloud – the team workspace for collaboration and knowledge sharing used by thousands of companies – and how we aim to take it to the next level, with scale, performance, and reliability as the key motivators. It presents a deep dive to provide insights into how the Confluence architecture has evolved into its current form. It discusses how Atlassian deploys, runs, and operates at scale and all challenges encountered along the way.\nI will cover performance and reliability at scale starting with the fundamentals of measuring everything, re-defining metrics to be insightful of actual customer pain, auditing end-to-end experiences. Beyond just dev-ops and best practices, this means empowering teams to own product stability through practices and tools.\nKey Takeaways:\n- Learn how we isolated the impact of failures and blast radius by microservice sharding and proper tuning of various parameters.\n- Learn how we rearchitected Confluence to handle billions of requests\n- Strategies for dependency scaling, task handling, resource awareness, failure injection, deployments pipelines and end to end testing\n- Learn about how we solved issues with data locality",
      },
      {
        id: "Instant Access-6",
        author:"Rodrigo Luchini Marcus Monteiro",
        type:"Natura",
        time: "Instant Access",
        title: "How Natura uses ScyllaDB and Scylla Connector to create a Real-time Data Pipeline",
        description:"Natura, a multi-brand global cosmetics group including Avon, with an ever-growing consultant network of over 3 million beauty consultants only in Latin America. Ranked as the world’s strongest cosmetics brand, this eco-beauty company operations require processing vast amounts of data to manage orders, drive campaigns, run online KPIs , predictive analytics, and support its commercial operations. In this talk, Rodrigo Luchini, a Software Engineering Manager and Marcus Monteiro, a Software Techlead explains the unique challenges that Natura faces, and how the company built upon ScyllaDB’s CDC Source Connector to enable real-time delivery of Sales and performance KPIs at scale.",
      },
      {
        id: "Instant Access-7",
        author:"Premkumar Patturaj",
        type:"Freshworks",
        time: "Instant Access",
        title: "Inside Freshworks' Migration from Cassandra to ScyllaDB",
        description:"Freshworks migrated from Cassandra to ScyllaDB to handle growing audit log data efficiently. Cassandra required frequent scaling, complex repairs, and had non-linear scaling. ScyllaDB reduced costs with fewer machines and improved operations. Using Zero Downtime Migration (ZDM), they bulk-migrated data, performed dual writes, and validated consistency.",
      },
      {
        id: "Instant Access-8",
        author:"Srushith Repakula",
        type:"KonfHub",
        time: "Instant Access",
        title: "Lessons Learned from Building a Serverless Notifications System",
        description:"In today’s world, reaching your audience goes beyond just email. Imagine a system that seamlessly sends notifications via SMS, WhatsApp, and more. In this talk, I’ll take you through our journey of building a powerful, scalable notifications system using AWS’s serverless architecture.\nAt first glance, it might seem as straightforward as hooking up Mailchimp or SES. But as your audience grows, so do the challenges. I’ll share the key architectural and design decisions we made to handle scale, manage costs, and tackle throttling issues using various Serverless services on AWS",
      },
      {
        id: "Instant Access-9",
        author:"Terence Liu",
        type:"Clearview AI",
        time: "Instant Access",
        title: "Migrating 50TB Data From a Home-Grown Database to ScyllaDB, Fast",
        description:"We share notes on how our infrastructure needs evolved as the business grew, and how we converged on Scylla after some first-principles research. Knowing ScyllaDB was fast enough for production queries, we focused on the path of a fast ingestion during migration. We document our journey leveraging embedded database readers and the Scylla Rust driver, with configuration tips for the database and the client for bulk ingestion. Further, we share how we brought the bulk-ingested ScyllaDB online in production and reached data parity with the existing database.",
      },
      {
        id: "Instant Access-10",
        author:"Hubert Zhang",
        type:"EloqData",
        time: "Instant Access",
        title: "Overcome Redis Cluster Scale Bottlenecks with ScyllaDB & EloqKV",
        description:"ScyllaDB is an exceptionally scalable, distributed NoSQL database engineered to manage vast quantities of data across numerous commodity servers, ensuring high availability without a single point of failure. In this session, we introduce a new project, EloqKV, which is built upon the robust foundation of ScyllaDB. EloqKV enhances its capabilities by providing sub-millisecond read/write performance and full transaction support, functioning effectively as a consistent cache layer for ScyllaDB. Users can access the Data Substrate using the familiar Redis API, enjoying the speed of an in-memory database while leveraging ScyllaDB's capacity to store large datasets comprehensively.\nEloqKV on ScyllaDB can scale to thousands of node to overcome the scale bottleneck of Redis Cluster.",
      },
      {
        id: "Instant Access-11",
        author:"Spencer Ho",
        type:"Salesforce",
        time: "Instant Access",
        title: "Persistence Pipelines in a Processing Graph: Mutable Big Data at Salesforce",
        description:"This is a case study of managing mutable big data, and its evolution of the persistence segment of the processing graph.\nBy responding to issues and design challenges along the journey, we concluded certain design and operation principles",
      },
      {
        id: "Instant Access-12",
        author:"Elad Leev",
        type:"Dojo",
        time: "Instant Access",
        title: "Pushing Your Streaming Platform to the Limit",
        description:"In this session, we’ll take a hands-on approach to Chaos Engineering for streaming platforms like Kafka, Pulsar, NATS, or RabbitMQ. Dive into stress testing, from crafting benchmarks to real-world execution. Discover how to fine-tune performance and scalability, preparing your system for any challenges ahead.",
      }, {
        id: "Instant Access-13",
        author:"Vinit Dhatrak",
        type:"DocuSign",
        time: "Instant Access",
        title: "Revolutionizing Cloud Storage: From Petabytes to Intelligence",
        description:"In an era driven by exponential data growth and the need for intelligent insights, cloud storage solutions must evolve to meet the dynamic demands of modern enterprises. This talk delves into the intricate process of migrating traditional on-premises blob storage systems to cutting-edge cloud platforms like Azure while integrating AI-powered insights to enhance cloud software offerings.\nWe will explore the architecture and implementation challenges faced while leading the Blob Storage team at DocuSign, focusing on how AI technologies were harnessed to transform data management within the Intelligent Agreement Management (IAM) platform. This initiative did not just facilitate a seamless transition but also pioneered a new category in cloud software, significantly bolstering market leadership.\nAttendees will gain insights into optimizing resource utilization, achieving cost efficiency, and ensuring scalability in cloud migrations, drawing from a successful case implementing an intelligence-enabled cloud ecosystem. Furthermore, the talk will illuminate how AI and machine learning models were leveraged to provide actionable insights, assisting in strategic decision-making and enhancing user engagement.\nThe session will cover critical lessons learned, including identity and data security in cloud transformations, effective use of REST APIs for integration, and the deployment of microservices for agile and scalable services. Participants will leave equipped with advanced strategies to align their cloud migration efforts with organizational goals, optimize resources, and drive innovation through AI. Join us as we explore the convergence of cloud and artificial intelligence, unlocking new potentials in data storage solutions.",
      }, {
        id: "Instant Access-14",
        author:"Vikas Talegaonkar Deepika Sikri",
        type:"Sleepnumber Labs",
        time: "Instant Access",
        title: "Revolutionizing Sleep: Scaling IoT Telemetry to 30+ Billion Daily Events",
        description:"In the era of big data, Sleep Number is pushing the boundaries of sleep technology, processing a staggering 30+ billion sensor events daily. This paper shares our journey in scaling our IoT telemetry streaming pipeline, a critical component in our mission to improve sleep for millions. We faced unprecedented growth demands, including an exponential increase in data volume, an expanding user base, and the need for real-time processing while maintaining stringent reliability and availability requirements.",
      }, {
        id: "Instant Access-15",
        author:"Dmytro Hnatiuk",
        type:"Wise",
        time: "Instant Access",
        title: "Scaling a Beast: Lessons from 400x Growth in a High-Stakes Financial System",
        description:"Scaling a system from 66 million to over 25 billion records is no easy feat—especially when it’s a core financial system where every number has to be right, and data needs to be fresh right now. In this session, I’ll share the ups and downs of managing this kind of growth without losing my sanity. You’ll learn how to balance high data accuracy with real-time performance, optimize your app logic, and avoid the usual traps of database scaling. This isn’t about turning you into a database expert—it’s about giving you the practical, no-BS strategies you need to scale your systems without getting overwhelmed by technical headaches. Perfect for engineers and architects who want to tackle big challenges and come out on top.",
      }, {
        id: "Instant Access-16",
        author:"Henrik Rexed",
        type:"Dynatrace",
        time: "Instant Access",
        title: "Telemetry Showdown: Fluent Bit vs. OpenTelemetry Collector",
        description:"In a push to standardize observability practices, the cloud-native community has embraced OpenTelemetry, offering a unified framework for metrics, logs, and traces. Prior to this, log processing relied on agents like fluent, evolving into fluentbit. With fluentbit's recent expansion to support additional signals and the OpenTelemetry Collector's emergence, a pertinent question arises: Which is the superior choice for performance?\n\nThis session delves into:\n- Unveiling the distinctions between Fluent Bit and the OpenTelemetry Collector.\n- Sharing the findings derived from a series of benchmark tests.\n- Providing valuable insights to empower the community in selecting the most fitting agent for their cloud-native environments.",
      }, {
        id: "Instant Access-17",
        author:"Mourjo Sen",
        type:"Stripe",
        time: "Instant Access",
        title: "What Flow Metrics Teaches Us About Designing Resilient Systems",
        description:"Flow metrics, often used in agile methodology, can teach us how to differentiate \"goodput\" (work valuable to the customer) from \"throughput\" (total work done by the system). In this talk I will go over what flow metrics are and what we can learn from it while designing resilient scalable systems.\n\nIn a fast paced development team, it is often difficult to identify blockers in real time. This impacts the ability of the team to deliver value to its customers. A system of consistent and meaningful monitoring of key metrics, such as flow metrics, can help address such blind spots ultimately delivering value to customers in a sustainable manner.\n\nFlow metrics comprises the following\n1. Velocity: How much work is done by a team per unit time?\n2. Time: How much time something takes to get completed?\n3. Efficiency: How much time did the team have to wait for something else to be done?\n4. Load: How many items remain open in the task list at the same time?\n\nIn essence, flow metrics offer a holistic measure of the performance of software development life-cycle. Specifically, it benchmarks the ability of a software development team to deliver on business and technical requests - much like the systems they build which are meant to deliver on incoming requests efficiently.\n\nInspired from flow metrics, we can apply a similar set of metrics on our system:\n1. Velocity or throughput: How many requests per second do we handle?\n2. Time: How much time did we take to process a request?\n3. Efficiency: Did a downstream dependency be the reason for our outage?\n4. Load: If there are too many requests coming in, can we detect it?\n\nIn this talk I will focus on two things\n- Why flow metrics matters to live applications at scale - this will focus on understanding the foundations of Flow metrics\n- How flow metrics can help design better systems - this will focus on designing a system of measuring actionable metrics (for example, too much load can cause a cascading failure across multiple systems that are dependent on one system)",
      },
      
    ]
  };
useEffect(() => {
    setTimeout(() => {
      setAnimate(false); // Stop animation after 1 second
    }, 1000);
  }, []);
  // Function to toggle event expansion
  const toggleEvent = (eventId) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  // Function to scroll to a specific day section
  const scrollToDay = (day) => {
    if (day === 'tuesday' && tuesdayRef.current) {
      tuesdayRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (day === 'wednesday' && wednesdayRef.current) {
      wednesdayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (day === 'instant' && instantRef.current) {
      instantRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to format description text with line breaks
  const formatDescription = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };
  const backgroundImageUrl = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80";
  return (
    <div className="agenda-wrapper">
      <motion.div
        className="animated-background"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        initial={{ backgroundPosition: "0% 0%" }}
        animate={animate ? { backgroundPosition: ["0% 0%", "100% 100%"] } : {}}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      <div className="agenda-content">
        <div className="agenda-header">
          <h1>Agenda</h1>
          <p>Session times are displayed in your local timezone.</p>
          <p>Agenda subject to change.</p>
        </div>
  
        <div className="agenda-tabs">
          <button 
            className="agenda-tab"
            onClick={() => scrollToDay('tuesday')}
          >
            <span className="tab-day">TUESDAY</span> <span className="tab-date" style={{border:"solid", borderWidth:"1px", borderColor:"white"}}>3/11</span>
          </button>
          <button 
            className="agenda-tab"
            onClick={() => scrollToDay('wednesday')}
          >
            <span className="tab-day">WEDNESDAY</span> <span className="tab-date" style={{border:"solid", borderWidth:"1px", borderColor:"white"}}>3/12</span>
          </button>
          <button className="agenda-tab no-date" onClick={() => scrollToDay('instant')}>
            <span className="tab-day">INSTANT ACCESS</span>
          </button>
        </div>
  {/*Tuesday section */}
        <div ref={tuesdayRef} className="agenda-day-section">
        <h2 className="day-title">Tuesday, March 11th, 2025</h2>
        <div className="agenda-events" >
          {agendaData.tuesday.map((event) => (
            <div className="agenda-event-wrapper" key={event.id}>
              <div className="time-badge">
                <div className="agenda-time-label">
                  {event.time}
                </div>
              </div>
              <div className="agenda-event-card">
                <div 
                  className="agenda-event-header"
                  onClick={() => toggleEvent(event.id)}
                >
                  <div className="agenda-event-author">{event.author}</div>
                  <div className="agenda-event-type">{event.type}</div>
                  <div className="agenda-event-title-row">
                    <h3 className="agenda-event-title">{event.title}</h3>
                    {event.description && (
                      <div className={`agenda-collapse-icon ${expandedEvents[event.id] ? 'expanded' : ''}`}>
                        &#x276F;
                      </div>
                    )}
                  </div>
                </div>
                
                {expandedEvents[event.id] && event.description && (
                  <div className="agenda-event-description">
                    {formatDescription(event.description)}
                  </div>
                )}
                
                {event.buttonText && (
                  <div className="button-container">
                    <button className="agenda-event-button">{event.buttonText}</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

  
        {/* Wednesday Section */}
        <div ref={wednesdayRef} className="agenda-day-section">
        <h2 className="day-title">Wednesday, March 12th, 2025</h2>
        <div className="agenda-events">
          {agendaData.wednesday.map((event) => (
            <div className="agenda-event-wrapper" key={event.id}>
              <div className="time-badge">
                <div className="agenda-time-label">
                  {event.time}
                </div>
              </div>
              <div className="agenda-event-card">
                <div 
                  className="agenda-event-header"
                  onClick={() => toggleEvent(event.id)}
                >
                  <div className="agenda-event-content">
                      <div className="agenda-event-author">{event.author || ''}</div>
                      <div className="agenda-event-type">{event.type || ''}</div>
                      <h3 className="agenda-event-title">{event.title}</h3>
                    </div>
                    {event.description && (
                      <span className={`agenda-collapse-icon ${expandedEvents[event.id] ? 'expanded' : ''}`}>
                        &#x276F;
                      </span>
                    )}

                </div>
                
                {expandedEvents[event.id] && event.description && (
                  <div className="agenda-event-description">
                    {formatDescription(event.description)}
                  </div>
                )}
                
                {event.buttonText && (
                  <div className="button-container">
                    <button className="agenda-event-button">{event.buttonText}</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

  
        {/* Instant Access Section */}
        <div ref={instantRef} className="agenda-day-section">
        <h2 className="day-title">Instant Access</h2>
        <span className="day-sub" style={{color:"#cccccc"}}>These sessions will be available throughout the conference.</span>
        <div className="agenda-events">
          {agendaData.instant.map((event) => (
            <div className="agenda-event-wrapper" key={event.id}>
              <div className="time-badge">
                <div className="agenda-time-label">
                  {event.time}
                </div>
              </div>
              <div className="agenda-event-card">
                <div 
                  className="agenda-event-header"
                  onClick={() => toggleEvent(event.id)}
                >
                  <div className="agenda-event-author">{event.author}</div>
                  <div className="agenda-event-type">{event.type}</div>
                  <div className="agenda-event-title-row">
                    <h3 className="agenda-event-title">{event.title}</h3>
                    {event.description && (
                      <div className={`agenda-collapse-icon ${expandedEvents[event.id] ? 'expanded' : ''}`}>
                        &#x276F;
                      </div>
                    )}
                  </div>
                </div>
                
                {expandedEvents[event.id] && event.description && (
                  <div className="agenda-event-description">
                    {formatDescription(event.description)}
                  </div>
                )}
                
                {event.buttonText && (
                  <div className="button-container">
                    <button className="agenda-event-button">{event.buttonText}</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}

export default Agenda;