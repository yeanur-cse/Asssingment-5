

import type { Itechonologies } from "../../type/techonologiesType";

interface YourStackProps {
  stack: Itechonologies[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm h-fit sticky top-4">
      <h3 className="font-semibold">Your Stack</h3>
      <p className="text-xs text-gray-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          Your stack is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border flex items-center justify-center p-1 flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className={`w-full py-2 rounded-lg text-sm font-semibold transition ${
          stack.length === 0
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-sm"
        }`}
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;