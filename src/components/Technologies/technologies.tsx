

import { use, useState } from "react";
import type { Itechonologies } from "../../type/techonologiesType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import Toast from "../Toast";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechonologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [stack, setStack] = useState<Itechonologies[]>([]);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleAddToStack = (tech: Itechonologies) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) return;

    setStack((prev) => [...prev, tech]);
    setToast({
      show: true,
      message: `${tech.name} has been added to your stack.`,
    });
  };

  const handleRemoveFromStack = (id: number) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => setStack([]);

  const closeToast = () => setToast({ show: false, message: "" });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold">
        Explore the <span className="text-purple-600">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-1">
        Add any technologies you like — each one can be added only once.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {technologies.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={isAdded}
                onAdd={() => handleAddToStack(tech)}
              />
            );
          })}
        </div>

        <YourStack
          stack={stack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>

      <Toast message={toast.message} show={toast.show} onClose={closeToast} />
    </section>
  );
};

export default Technologies;