"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "LLMs & AI Agents",
    children:
      "I design AI agents that convert natural language into actionable outputs, including projects like Text-to-SQL systems using large language models and vector databases.",
  },
  {
    icon: FingerPrintIcon,
    title: "AI & Machine Learning",
    children:
      "I build intelligent solutions using machine learning concepts, focusing on real-world problem solving. I work with data preprocessing, model logic, and AI-powered workflows to create smart applications.",
  },
  {
    icon: SwatchIcon,
    title: "Python & Backend Development",
    children:
      "I develop robust backend systems using Python and Django. My work includes building scalable APIs, handling authentication, and integrating databases for AI-driven and data-centric applications.",
  },
  {
    icon: HashtagIcon,
    title: "Data Handling & Databases",
    children:
      "I work with structured data using MySQL, performing CRUD operations, query optimization, and schema understanding to support analytics and AI models.",
  },
  {
    icon: EyeIcon,
    title: "REST APIs & System Integration",
    children:
      "I build and integrate RESTful APIs to connect frontend interfaces, AI models, and backend services, enabling seamless communication between systems.",
  },
  {
    icon: DocumentTextIcon,
    title: "Debugging & Optimization",
    children:
      "I focus on clean, efficient, and maintainable code. I debug complex issues, optimize queries and backend logic, and ensure performance and reliability across applications.",
  },
];

export function Skills() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto mb-10 text-center">

        <Typography variant="h1" color="blue-gray" className="mb-4">
          My Skills
        </Typography>

      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
