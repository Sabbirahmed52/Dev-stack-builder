import { use, useState } from "react";
import type { Etech } from "../../types/techType";
import Stack from "./Stack";
import { TechCard } from "./techCard";

interface TechProps {
  techPromise: Promise<Etech[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  const tech = use(techPromise);

  const [selectedTech, setSelectedTech] = useState<Etech[]>([]);

  return (
    <div className="container mx-auto mt-10">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h2>

      <p className="mt-4 text-2xl text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Cards + Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

        {/* Technology Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          {tech.map((item) => (
            <TechCard
              key={item.name}
              tech={item}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div>
          <Stack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>

      </div>

    </div>
  );
};

export default Tech;

