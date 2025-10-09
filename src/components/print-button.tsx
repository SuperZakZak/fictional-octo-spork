"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all font-medium shadow-lg hover:shadow-xl"
    >
      Print This Page
    </button>
  );
}
