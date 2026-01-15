import React, { useState } from 'react';
import { BarChart3, Download, Calendar, TrendingUp, Users, DollarSign, FileText } from 'lucide-react';

export default function AdminReports() {
  const [dateRange, setDateRange] = useState('month');

  const reportTypes = [
    {
      title: 'Appointment Report',
      description: 'Total appointments, completed, cancelled',
      icon: Calendar,
      color: 'bg-blue-500',
      stats: { total: 245, completed: 198, cancelled: 15 }
    },
    {
      title: 'Patient Report',
      description: 'New patients, active patients, total visits',
      icon: Users,
      color: 'bg-green-500',
      stats: { new: 34, active: 189, visits: 567 }
    },
    {
      title: 'Revenue Report',
      description: 'Total revenue, pending payments',
      icon: DollarSign,
      color: 'bg-purple-500',
      stats: { revenue: '$45,230', pending: '$2,450' }
    },
    {
      title: 'Lab Reports',
      description: 'Total tests, pending results',
      icon: FileText,
      color: 'bg-orange-500',
      stats: { total: 156, pending: 12 }
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BarChart3 className="w-7 h-7" />
            Reports & Analytics
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            View and download clinic performance reports
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex gap-4 items-center">
          <label className="text-sm font-medium text-gray-700">Time Period:</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="ml-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export All
          </button>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {reportTypes.map((report, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className={`${report.color} p-3 rounded-lg w-fit mb-4`}>
              <report.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">{report.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <div className="space-y-2 text-sm">
              {Object.entries(report.stats).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 capitalize">{key}:</span>
                  <span className="font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">23%</p>
            <p className="text-sm text-gray-600">Growth This Month</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">189</p>
            <p className="text-sm text-gray-600">Active Patients</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">$45K</p>
            <p className="text-sm text-gray-600">Monthly Revenue</p>
          </div>
        </div>
      </div>

      {/* Custom Reports */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Generate Custom Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent">
              <option>Comprehensive</option>
              <option>Appointments Only</option>
              <option>Financial Only</option>
              <option>Patient Statistics</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-[#2f6f8f] text-white px-6 py-2 rounded-lg hover:bg-[#25596f]">
          Generate Report
        </button>
      </div>
    </div>
  );
}
