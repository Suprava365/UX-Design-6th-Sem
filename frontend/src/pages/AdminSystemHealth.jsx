import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, Wifi, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function AdminSystemHealth() {
  const [systemStatus, setSystemStatus] = useState({
    overall: 'operational',
    lastChecked: new Date()
  });

  const services = [
    {
      name: 'API Server',
      icon: Server,
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      lastIncident: 'None'
    },
    {
      name: 'Database',
      icon: Database,
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastIncident: '2 days ago'
    },
    {
      name: 'Network',
      icon: Wifi,
      status: 'operational',
      uptime: '99.97%',
      responseTime: '23ms',
      lastIncident: 'None'
    },
    {
      name: 'Authentication Service',
      icon: Activity,
      status: 'operational',
      uptime: '100%',
      responseTime: '89ms',
      lastIncident: 'None'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      operational: 'text-green-600 bg-green-100',
      degraded: 'text-yellow-600 bg-yellow-100',
      down: 'text-red-600 bg-red-100'
    };
    return colors[status] || colors.operational;
  };

  const getStatusIcon = (status) => {
    return status === 'operational' ? CheckCircle : AlertCircle;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Activity className="w-7 h-7" />
            System Health
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Monitor system performance and uptime
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Last checked</div>
          <div className="text-sm font-medium text-gray-800">
            {systemStatus.lastChecked.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Overall Status */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="w-8 h-8" />
          <h2 className="text-2xl font-bold">All Systems Operational</h2>
        </div>
        <p className="text-white text-opacity-90">
          All services are running smoothly with no reported issues
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {services.map((service, index) => {
          const StatusIcon = getStatusIcon(service.status);
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <StatusIcon className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 capitalize">{service.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-medium text-gray-900">{service.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium text-gray-900">{service.responseTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Incident</span>
                  <span className="font-medium text-gray-900">{service.lastIncident}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Average Response Time</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">42ms</p>
          <p className="text-sm text-gray-600 mt-1">Last 24 hours</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-gray-800">Success Rate</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">99.94%</p>
          <p className="text-sm text-gray-600 mt-1">Last 7 days</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Server className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-gray-800">Active Connections</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-gray-600 mt-1">Current active users</p>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Incidents</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-800">Database Performance Degradation</h4>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <p className="text-sm text-gray-600">
              Database response times increased by 15% due to high query load. Resolved by scaling resources.
            </p>
            <span className="text-xs text-green-600 font-medium mt-1 inline-block">Resolved</span>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-800">Scheduled Maintenance</h4>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
            <p className="text-sm text-gray-600">
              Routine system maintenance completed successfully with minimal downtime.
            </p>
            <span className="text-xs text-green-600 font-medium mt-1 inline-block">Completed</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t text-center">
          <button className="text-[#2f6f8f] hover:underline text-sm">
            View Full Incident History
          </button>
        </div>
      </div>
    </div>
  );
}
