import React from "react";

export default function Loading() {
  return (
    <div className="w-full space-y-6 py-6 animate-pulse select-none">
      <div className="space-y-2 text-center max-w-md mx-auto">
        <div className="h-8 bg-slate-200/70 rounded-2xl w-56 mx-auto" />
        <div className="h-4 bg-slate-100 rounded-xl w-80 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 rounded-3xl bg-slate-100/80 border border-slate-200"
          />
        ))}
      </div>
    </div>
  );
}
