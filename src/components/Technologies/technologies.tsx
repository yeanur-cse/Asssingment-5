

import { use } from "react";

   import type { Itechonologies } from "../../type/techonologiesType";


interface TechnologiesProps  {
     technologiesPromise: Promise<Itechonologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  console.log(technologiesPromise);

  const technologies = use(technologiesPromise);

  console.log(technologies, "technologies");

  return (
    <div>
      
    </div>
  );
};

export default Technologies;