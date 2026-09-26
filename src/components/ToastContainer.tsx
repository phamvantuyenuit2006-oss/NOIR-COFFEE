import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'border-[#B9824A]/40 bg-[#171411]/95 text-[#F5F0E8]';
        let iconColor = 'text-[#B9824A]';

        if (toast.type === 'warning') {
          Icon = AlertTriangle;
          borderColor = 'border-amber-500/40 bg-[#171411]/95 text-amber-200';
          iconColor = 'text-amber-400';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderColor = 'border-stone-500/40 bg-[#171411]/95 text-stone-200';
          iconColor = 'text-stone-300';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 ${borderColor}`}
          >
            <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
            <div className="flex-1 text-xs sm:text-sm">
              <h5 className="font-serif font-bold text-[#FAF9F6] tracking-wide">{toast.title}</h5>
              {toast.description && (
                <p className="mt-1 text-xs opacity-80 leading-relaxed text-[#D5C9B7]">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-white transition-colors p-1 rounded-lg"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
