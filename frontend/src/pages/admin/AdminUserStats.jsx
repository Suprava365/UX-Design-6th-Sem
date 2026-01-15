import React, { useState, useEffect } from 'react';
import { adminUserService } from '../../../services/adminUserService';
import { 
  Users, UserCheck, UserX, TrendingUp, 
  Activity, Clock, RefreshCw 
} from 'lucide-react';

export default function AdminUserStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await adminUserService.getUserStats();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-[#2f6f8f]" />
          <p className="text-gray-600">Loading statistics...</p>
        </div>
      </div>
    );
  }

  const StatCard = ({ icon: Icon, title, value, color, trend }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${
              trend.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className={`w-4 h-4 ${!trend.positive && 'transform rotate-180'}`} />
              {trend.value}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Statistics</h1>
          <p className="text-gray-600 text-sm mt-1">
            Real-time insights into user activity and growth
          </p>
        </div>
        <button
          onClick={fetchStats}
          className="bg-[#2f6f8f] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#25596f] transition"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Users"
          value={stats?.totalUsers || 0}
          color="bg-blue-500"
        />
        <StatCard
          icon={UserCheck}
          title="Active Users"
          value={stats?.activeUsers || 0}
          color="bg-green-500"
        />
        <StatCard
          icon={UserX}
          title="Inactive Users"
          value={stats?.inactiveUsers || 0}
          color="bg-red-500"
        />
        <StatCard
          icon={Activity}
          title="New This Month"
          value={stats?.newUsersThisMonth || 0}
          color="bg-purple-500"
        />
      </div>

      {/* Role Distribution */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Users by Role</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats?.usersByRole && Object.entries(stats.usersByRole).map(([role, count]) => (
            <div key={role} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{count}</p>
              <p className="text-sm text-gray-600 capitalize mt-1">{role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">User Growth (Last 30 Days)</h2>
        {stats?.recentGrowth && stats.recentGrowth.length > 0 ? (
          <div className="space-y-2">
            {stats.recentGrowth.map((day, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24">
                  {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div
                    className="bg-[#2f6f8f] h-full rounded-full flex items-center justify-end pr-2 text-white text-sm font-medium"
                    style={{ width: `${Math.min((day.count / 10) * 100, 100)}%` }}
                  >
                    {day.count > 0 && day.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No growth data available</p>
        )}
      </div>

      {/* Email Verification Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Verification</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm text-gray-700">Verified</span>
              <span className="text-lg font-bold text-green-600">
                {stats?.emailVerified || 0}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <span className="text-sm text-gray-700">Unverified</span>
              <span className="text-lg font-bold text-orange-600">
                {stats?.emailUnverified || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Summary</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">Logins Today</span>
              </div>
              <span className="text-lg font-bold text-blue-600">
                {stats?.loginsToday || 0}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-700">Active Sessions</span>
              </div>
              <span className="text-lg font-bold text-purple-600">
                {stats?.activeSessions || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
