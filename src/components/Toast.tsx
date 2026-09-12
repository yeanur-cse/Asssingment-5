import { useEffect } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toast = ({ message, show, onClose }: ToastProps) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-50 animate-slide-in">
      <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-3 min-w-[260px]">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <span className="text-green-600 text-sm">✓</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Added to Stack</p>
          <p className="text-xs text-gray-500">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-auto text-gray-400 hover:text-gray-600 text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;