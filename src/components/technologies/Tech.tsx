import React, { use } from 'react';
import type { Etech } from '../../types/techType';

interface TechProps{
  techPromise: Promise<Etech[]>;
}


const Tech = ({ techPromise }: TechProps) => {
  console.log(techPromise);

  const tech = use(techPromise);
  console.log(tech,"tech")
  return (
    <div>
      
    </div>
  );
};

export default Tech;