"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/Gen_AI.png`,
    title: "Agentic AI: RAG-Based SQL Query Generator",
    desc: "Autonomous AI system that transforms natural language into optimized SQL using RAG, SQLCoder, executes on MySQL, and summarizes results.",
    problem: "Non-technical users often struggle to write complex SQL queries, leading to delays in data retrieval and dependency on database administrators.",
    solution: "Developed an Agentic AI pipeline that uses RAG and SQLCoder to translate natural language into valid SQL, executes it against a MySQL database, and returns a human-readable summary.",
    techStack: ["Python", "LangChain", "SQLCoder", "MySQL", "RAG"],
    features: [
      "Natural Language to SQL translation",
      "Automatic query optimization",
      "Direct execution on MySQL databases",
      "AI-powered result summarization"
    ],
    architecture: "Natural Language -> Embedding -> Vector Search (RAG) -> LLM (SQLCoder) -> SQL Execution -> Final Summary.",
    github: "https://github.com/tirgarbhumika55-png/Text-to-MYSQL"
  },
  {
    img: `${getImagePrefix()}image/Project2.png`,
    title: "AI Stock Trading Signal Generator",
    desc: "Machine learning–driven system that analyzes market data and technical indicators to generate BUY, HOLD, and SELL signals for stocks.",
    problem: "Stock market volatility makes it difficult for retail traders to make informed decisions without constant monitoring and complex analysis.",
    solution: "Implemented a real-time signal generator that uses Random Forest and LSTM models to analyze historical and live market data, providing actionable trading signals.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Alpaca API", "Flask"],
    features: [
      "Real-time technical indicator calculation",
      "Automated BUY/HOLD/SELL signal generation",
      "Backtesting engine for strategy validation",
      "Interactive dashboard for signal tracking"
    ],
    architecture: "Data Ingestion -> Feature Engineering (Indicators) -> Model Prediction -> Signal Dispatcher.",
    github: "https://github.com/tirgarbhumika55-png/AIStockTrader"
  },
  {
    img: `${getImagePrefix()}image/Project3.1.jpeg`,
    title: "LJ Canteen – Food Delivery Web Application",
    desc: "A Django-based food delivery platform enabling users to browse menus, place orders, and manage canteen operations efficiently in real time.",
    problem: "Manual ordering systems in canteens lead to long queues, order errors, and inefficient inventory management.",
    solution: "Created a comprehensive web platform using Django that digitizes the entire ordering process, from menu browsing to real-time order status tracking.",
    techStack: ["Python", "Django", "PostgreSQL", "Bootstrap", "AJAX"],
    features: [
      "Dynamic menu management",
      "Real-time order tracking system",
      "Canteen staff dashboard for order fulfillment",
      "User order history and profile management"
    ],
    architecture: "MVC Architecture with Django handling the backend, PostgreSQL for persistence, and responsive frontend for users and staff.",
    github: "https://github.com/tirgarbhumika55-png/LJ-Canteen"
  },
];

export function Projects() {
  return (
    <section className="py-32 px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-7/12"
        >
          Specializing in Computer Vision, Time-Series Analysis, and Natural Language Processing.
          Here are three core projects that demonstrate my expertise in building scalable,
          intelligent solutions for complex real-world challenges.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
