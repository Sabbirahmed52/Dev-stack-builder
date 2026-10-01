import React from 'react';

import type { Etech } from "../../types/techType";

type Props = {
  tech: Etech;
};

const TechCard = ({ tech }: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between px-6 pt-6">

        <img
          src={tech.icon}
          alt={tech.name}
          className="w-14 h-14 object-contain"
        />

        <span className="badge badge-primary">
          {tech.badge}
        </span>

      </div>

      {/* Card Body */}
      <div className="card-body">

        {/* Name */}
        <h2 className="card-title text-2xl">
          {tech.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500">
          {tech.description}
        </p>

        {/* Category + Difficulty */}
        <div className="flex items-center justify-between mt-4">

          <span className="badge badge-outline">
            {tech.category}
          </span>

          <span className="text-sm text-gray-500">
            {tech.difficulty}
          </span>

        </div>

        {/* Rating */}
        <div className="mt-3">
          <span className="text-yellow-500">★</span>

          <span className="ml-1 font-medium">
            {tech.rating}
          </span>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            Add to Stack
          </button>
        </div>

      </div>
    </div>
  );
};

export default TechCard;
