import type { Dispatch, SetStateAction } from "react";
import type { Etech } from "../../types/techType";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

interface StackProps {
  selectedTech: Etech[];
  setSelectedTech: Dispatch<SetStateAction<Etech[]>>;
}

const Stack = ({ selectedTech, setSelectedTech }: StackProps) => {

  const handleRemove = (techName: string) => {
    setSelectedTech((previousTech) =>
      previousTech.filter((tech) => tech.name !== techName)
    );

    toast.info(`${techName} removed from your stack!`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Your Stack
      </h2>

      {selectedTech.length === 0 ? (
        <p className="text-gray-500">
          Your stack is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-4">

          {selectedTech.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >

              
              <div className="flex items-center gap-4">

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {tech.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {tech.category}
                  </p>
                </div>

              </div>

             
              <button
                onClick={() => handleRemove(tech.name)}
                className="btn btn-error btn-sm"
              >
                <IoClose />
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Stack;

