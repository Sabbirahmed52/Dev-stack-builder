import { type Dispatch, type SetStateAction } from "react";
import type { Etech } from "../../types/techType";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
interface EtechCardProps {
  tech: Etech;
  selectedTech: Etech[];
  setSelectedTech: Dispatch<SetStateAction<Etech[]>>;
}

export const TechCard = ({
  tech,
  selectedTech,
  setSelectedTech,
}: EtechCardProps) => {

  const isSelected = selectedTech.some(
    (item) => item.name === tech.name
  );

  const handleAddToStack = () => {

    setSelectedTech([...selectedTech, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">

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

      <div className="card-body">

        <h2 className="card-title text-2xl">
          {tech.name}
        </h2>

        <p className="text-gray-500">
          {tech.description}
        </p>

        <div className="flex items-center justify-between mt-4">

          <span className="badge badge-outline">
            {tech.category}
          </span>

          <span className="text-sm text-gray-500">
            {tech.difficulty}
          </span>

        </div>

        <div className="mt-3">

          <FaStar className="text-yellow-500" />

          <span className="ml-1 font-medium">
            {tech.rating}
          </span>

        </div>

        <div className="card-actions mt-4">

          <button
            onClick={handleAddToStack}
            disabled={isSelected}
            className={`btn w-full ${
              isSelected ? "btn-success" : "btn-primary"
            }`}
          >
            {isSelected ? "Added" : "Add to Stack"}
          </button>

        </div>

      </div>

    </div>
  );
};



