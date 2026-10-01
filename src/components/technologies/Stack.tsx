import React from 'react';
import type { Etech } from '../../types/techType';
import TechCard from './techCard';

type StackProps = {
  tech: Etech[];
};

const Stack = ({ tech }: StackProps) => {
  console.log(tech, 'tech from Your stack');

  return (
    <div className="container mx-auto grid grid-cols-3 gap-6 mt-10">
      {tech.map((item: Etech) => {
        return <TechCard key={item.id} tech={item} />;
      })}
    </div>
  );
};

export default Stack; 