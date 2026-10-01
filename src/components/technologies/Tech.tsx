import React, { use } from 'react';
import type { Etech } from '../../types/techType';
import Stack from './Stack';

interface TechProps{
  techPromise: Promise<Etech[]>
}


const Tech = ({ techPromise }: TechProps) => {
  console.log(techPromise);

  const tech = use(techPromise);
  console.log(tech,"tech")
  return (
    <div className="container mx-auto mt-10">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-2xl text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Technology Cards */}
      <Stack tech={tech} />

    </div>
  );
};

export default Tech;