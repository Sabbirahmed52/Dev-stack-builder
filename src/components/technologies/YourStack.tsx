
import type { Etech } from "../../types/techType";

interface YourStackProps {
  selectedTech: Etech[];
}

const YourStack = ({ selectedTech }: YourStackProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-5">
        Your Stack
      </h2>

      {selectedTech.length === 0 ? (
        <p className="text-gray-500">
          No technologies added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedTech.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="font-bold text-lg">
                  {tech.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {tech.category}
                </p>

                <p className="text-sm">
                  ⭐ {tech.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;

