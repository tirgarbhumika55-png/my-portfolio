import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  architecture?: string;
  github: string;
}

export function ProjectCard({
  img,
  title,
  desc,
  problem,
  solution,
  techStack,
  features,
  architecture,
  github
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card color="transparent" shadow={false} className="h-full flex flex-col">
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-56 shrink-0">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover rounded-xl"
          />
        </CardHeader>
        <CardBody className="p-0 flex flex-col flex-grow">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500 line-clamp-3">
            {desc}
          </Typography>
          <div className="mt-auto">
            <Button color="gray" size="sm" onClick={handleOpen}>
              see details
            </Button>
          </div>
        </CardBody>
      </Card>

      <Dialog size="xl" open={open} handler={handleOpen} className="p-4 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody divider className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Problem Statement
              </Typography>
              <Typography className="font-normal text-gray-600">
                {problem}
              </Typography>
            </div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Solution Overview
              </Typography>
              <Typography className="font-normal text-gray-600">
                {solution}
              </Typography>
            </div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Key Features
              </Typography>
              <ul className="list-disc list-inside text-gray-600 font-normal">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-6 h-64 relative overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Tech Stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {architecture && (
              <div className="mb-6">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Architecture / Workflow
                </Typography>
                <Typography className="font-normal text-gray-600 italic text-sm">
                  {architecture}
                </Typography>
              </div>
            )}
            <div className="mt-8">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button color="gray" className="flex items-center gap-3">
                  <i className="fa-brands fa-github text-base"></i>
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default ProjectCard;
