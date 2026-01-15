import React, { useState, useEffect } from 'react';
import { adminUserService } from '../../../services/adminUserService';
import { X, Mail, Phone, Calendar, Shield, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

export default function UserDetailsModal({ user, onClose }) {
  const [activityLogs, setActivityLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchActivityLogs();
  }, [user]);

  const fetchActivityLogs = async () => {
    try {
      setLoading(true);
      const data = await adminUserService.getUserActivityLogs({ 
        userId: user._id, 
        limit: 10 
      });
      setActivityLogs(data.logs || data);
    } catch (error) {
      console.error('Error fetching activity logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      admin: 'bg-red-100 text-red-700',
      doctor: 'bg-blue-100 text-blue-700',
      staff: 'bg-green-100 text-green-700',
      patient: 'bg-gray-100 text-gray-700'
    };
    return colors[role] || colors.patient;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">User Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* User Info Card */}
          <div className="bg-gradient-to-r from-[#2f6f8f] to-[#1e4d63] rounded-lg p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-3xl font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                    {user.role}
                  </span>
                  {user.isActive ? (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Inactive
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                  {user.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {user.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Joined {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">User ID</div>
              <div className="font-mono text-sm text-gray-900">{user._id}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Email Verified</div>
              <div className="font-semibold text-gray-900">
                {user.isEmailVerified ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                ) : (
                  <span className="text-orange-600 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    Not Verified
                  </span>
                )}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Last Updated</div>
              <div className="text-sm text-gray-900">
                {new Date(user.updatedAt).toLocaleDateString()}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Account Status</div>
              <div className="text-sm font-semibold text-gray-900">
                {user.isActive ? 'Active' : 'Inactive'}
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <button
                onClick={fetchActivityLogs}
                className="text-[#2f6f8f] hover:text-[#25596f] text-sm flex items-center gap-1"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
            
            {loading ? (
              <div className="text-center py-8 text-gray-500">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                Loading activity logs...
              </div>
            ) : activityLogs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No activity logs found
              </div>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {activityLogs.map((log, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-900">{log.action}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                    </div>
                    {log.details && (
                      <div className="text-gray-600 text-xs">
                        {JSON.stringify(log.details)}
                      </div>
                    )}
                    {log.ipAddress && (
                      <div className="text-gray-500 text-xs mt-1">
                        IP: {log.ipAddress}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Close Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
