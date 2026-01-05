import React from "react";

export default function ViewLabReportModal({ report, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[600px] p-8">

        <h2 className="text-2xl font-semibold mb-2">
          {report.testName}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Test Date: {report.testDate}
        </p>

        {/* STATUS */}
        <span
          className={`inline-block mb-4 px-4 py-1 rounded-full text-sm ${
            report.status === "completed"
              ? "bg-green-200"
              : report.status === "processing"
              ? "bg-yellow-200"
              : "bg-gray-200"
          }`}
        >
          {report.status}
        </span>

        {/* RESULT */}
        {report.status === "completed" ? (
          <div className="bg-[#e3f0f6] rounded-md p-4 text-sm mb-6">
            {report.result || "No result provided."}
          </div>
        ) : (
          <p className="text-sm text-yellow-600 mb-6">
            Report is not completed yet.
          </p>
        )}

        {/* ACTIONS */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 rounded-md"
          >
            Close
          </button>

          {report.reportFileUrl && (
            <a
              href={report.reportFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#7db9da] text-white rounded-md"
            >
              Download PDF
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
