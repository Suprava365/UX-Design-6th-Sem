import React from "react";

export default function AdminOverview() {
  return (
    <>
      {/* WELCOME */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome Back, Suprava</h1>
        <p className="text-sm text-gray-600">
          There is the latest update in 7 days, Check Out.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { title: "Total Patients", value: "2,305" },
          { title: "Total Doctors", value: "10" },
          { title: "Total Visitors", value: "23,051" },
        ].map((card) => (
          <div key={card.title} className="bg-white rounded-xl p-6">
            <p className="text-sm text-gray-600 mb-1">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
