import React, { useState } from "react";
import RequestLabReportModal from "./RequestLabTestModal";
import ViewLabReportModal from "./ViewLabReportModal";
import AddLabReportModal from "./AddLabReportModal";

export default function UserLabReports() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [viewReport, setViewReport] = useState(null);

  const reports = [
    {
      id: 1,
      testName: "Complete Blood Count (CBC)",
      testDate: "2024-11-28",
      doctor: "Dr. Sarah Johnson",
      status: "completed",
      result: "All values within normal range.",
      reportFileUrl: "/reports/cbc.pdf",
    },
    {
      id: 2,
      testName: "Thyroid Function Test",
      testDate: "2024-11-10",
      doctor: "Dr. Emily Rodriguez",
      status: "processing",
      result: "",
      reportFileUrl: "",
    },
  ];

  const handleDownload = (url) => {
    if (!url) return alert("Report not ready yet");
    window.open(url, "_blank");
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Lab Reports</h1>
          <p className="text-sm text-gray-600">
            View and download your laboratory test results
          </p>
        </div>
        <button
          onClick={() => setShowRequestModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          Request Lab Test
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {reports.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{r.testName}</p>
              <p className="text-sm text-gray-600">
                {r.testDate} | Ordered by: {r.doctor}
              </p>

              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setViewReport(r)}
                  className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm"
                >
                  View Report
                </button>

                <button
                  onClick={() => handleDownload(r.reportFileUrl)}
                  className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm"
                >
                  Download
                </button>
              </div>
            </div>

            <span
              className={`px-4 py-1 rounded-full text-sm ${
                r.status === "completed"
                  ? "bg-green-200"
                  : r.status === "processing"
                  ? "bg-yellow-200"
                  : "bg-gray-200"
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>

      {/* MODALS */}
      {showRequestModal && (
        <AddLabReportModal onClose={() => setShowRequestModal(false)} />
      )}

      {viewReport && (
        <ViewLabReportModal
          report={viewReport}
          onClose={() => setViewReport(null)}
        />
      )}
    </>
  );
}
