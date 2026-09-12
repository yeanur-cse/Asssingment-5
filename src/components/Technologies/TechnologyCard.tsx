// import type { Itechonologies } from "../../type/techonologiesType";

// interface TechnologyCardProps {
//   tech: Itechonologies;
//   isAdded: boolean;
//   onAdd: () => void;
// }

// const TechnologyCard = ({ tech, isAdded, onAdd }: TechnologyCardProps) => {
//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between">
//       <div>
//         <div className="flex items-center justify-between mb-3">
//           <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
//             {tech.name.charAt(0)}
//           </div>
//           {tech.badge && (
//             <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
//               {tech.badge}
//             </span>
//           )}
//         </div>

//         <h3 className="font-semibold text-lg">{tech.name}</h3>
//         <p className="text-sm text-gray-500 mt-1">{tech.description}</p>

//         <div className="flex items-center gap-2 text-xs mt-3 text-gray-600">
//           <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
//           <span className="bg-gray-100 px-2 py-1 rounded">{tech.level}</span>
//           <span className="text-yellow-500">★ {tech.rating}</span>
//         </div>
//       </div>

//       <button
//         onClick={onAdd}
//         disabled={isAdded}
//         className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition ${
//           isAdded
//             ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//             : "bg-black text-white hover:bg-gray-800"
//         }`}
//       >
//         {isAdded ? "✓ Added to Stack" : "Add to Stack"}
//       </button>
//     </div>
//   );
// };

// export default TechnologyCard;

import type { Itechonologies } from "../../type/techonologiesType";

interface TechnologyCardProps {
  tech: Itechonologies;
  isAdded: boolean;
  onAdd: () => void;
}

const TechnologyCard = ({ tech, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border flex items-center justify-center p-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          {tech.badge && (
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-lg">{tech.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{tech.description}</p>

        <div className="flex items-center gap-2 text-xs mt-3 text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{tech.level}</span>
          <span className="text-yellow-500">★ {tech.rating}</span>
        </div>
      </div>

      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;