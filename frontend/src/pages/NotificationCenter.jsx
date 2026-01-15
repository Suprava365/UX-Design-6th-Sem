import React, { useState } from 'react';
import { Bell, Check, Trash2, Filter, Calendar, FileText, User, Settings } from 'lucide-react';

export default function NotificationsCenter() {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Reminder',
      message: 'You have an appointment tomorrow at 10:00 AM with Dr. Smith',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'lab',
      icon: FileText,
      title: 'Lab Report Ready',
      message: 'Your blood test results are now available to view',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'system',
      icon: Settings,
      title: 'System Update',
      message: 'New features have been added to improve your experience',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'profile',
      icon: User,
      title: 'Profile Update Required',
      message: 'Please update your contact information',
      time: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Confirmed',
      message: 'Your appointment on Jan 20 has been confirmed',
      time: '3 days ago',
      read: true
    }
  ];

  const getIconColor = (type) => {
    const colors = {
      appointment: 'bg-blue-100 text-blue-600',
      lab: 'bg-green-100 text-green-600',
      system: 'bg-purple-100 text-purple-600',
      profile: 'bg-orange-100 text-orange-600'
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Bell className="w-7 h-7" />
            Notifications
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            {notifications.filter(n => !n.read).length} unread notifications
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-[#2f6f8f] hover:bg-[#2f6f8f] hover:text-white border border-[#2f6f8f] rounded-lg transition flex items-center gap-2">
            <Check className="w-4 h-4" />
            Mark All Read
          </button>
          <button className="px-4 py-2 text-red-600 hover:bg-red-50 border border-red-600 rounded-lg transition flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-5 h-5 text-gray-600" />
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === 'all' 
                ? 'bg-[#2f6f8f] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === 'unread' 
                ? 'bg-[#2f6f8f] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Unread
          </button>
          <button
            onClick={() => setFilter('appointment')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === 'appointment' 
                ? 'bg-[#2f6f8f] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setFilter('lab')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === 'lab' 
                ? 'bg-[#2f6f8f] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Lab Reports
          </button>
          <button
            onClick={() => setFilter('system')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === 'system' 
                ? 'bg-[#2f6f8f] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            System
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition ${
                !notification.read ? 'border-l-4 border-[#2f6f8f]' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${getIconColor(notification.type)}`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <button className="text-sm text-[#2f6f8f] hover:underline">
                        Mark as read
                      </button>
                    )}
                    <button className="text-sm text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Settings Link */}
      <div className="mt-6 text-center">
        <button className="text-[#2f6f8f] hover:underline text-sm flex items-center gap-2 mx-auto">
          <Settings className="w-4 h-4" />
          Manage Notification Settings
        </button>
      </div>
    </div>
  );
}
