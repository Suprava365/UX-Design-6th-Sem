import React, { useState, useEffect } from 'react';
import { settingsService } from '../../../services/settingsService';
import { Bell, Mail, MessageSquare, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function UserNotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: {
      appointments: true,
      labReports: true,
      reminders: true,
      newsletters: false
    },
    smsNotifications: {
      appointments: false,
      labReports: false,
      reminders: false
    },
    pushNotifications: {
      appointments: true,
      messages: true,
      updates: false
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await settingsService.getNotificationSettings();
      if (data) {
        setSettings(data);
      }
    } catch (error) {
      console.error('Error fetching notification settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage({ type: '', text: '' });
      
      await settingsService.updateNotificationSettings(settings);
      
      setMessage({ 
        type: 'success', 
        text: 'Notification settings updated successfully!' 
      });
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      console.error('Error updating notification settings:', error);
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Failed to update settings' 
      });
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const NotificationToggle = ({ label, description, checked, onChange, icon: Icon }) => (
    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-start gap-3 flex-1">
        {Icon && <Icon className="w-5 h-5 text-gray-600 mt-0.5" />}
        <div>
          <label className="text-sm font-medium text-gray-900 cursor-pointer">
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2f6f8f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2f6f8f]"></div>
      </label>
    </div>
  );

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2f6f8f] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="w-7 h-7" />
          Notification Settings
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Manage how you receive notifications and updates
        </p>
      </div>

      {/* Message */}
      {message.text && (
        <div className={`rounded-lg p-4 flex items-start gap-3 ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <span className="text-sm">{message.text}</span>
        </div>
      )}

      {/* Email Notifications */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-[#2f6f8f]" />
          <h2 className="text-lg font-semibold text-gray-800">Email Notifications</h2>
        </div>
        <div className="space-y-3">
          <NotificationToggle
            label="Appointment Notifications"
            description="Get notified about new, updated, or cancelled appointments"
            checked={settings.emailNotifications.appointments}
            onChange={() => handleToggle('emailNotifications', 'appointments')}
            icon={Calendar}
          />
          <NotificationToggle
            label="Lab Report Notifications"
            description="Receive updates when your lab reports are ready"
            checked={settings.emailNotifications.labReports}
            onChange={() => handleToggle('emailNotifications', 'labReports')}
          />
          <NotificationToggle
            label="Appointment Reminders"
            description="Get reminder emails before your scheduled appointments"
            checked={settings.emailNotifications.reminders}
            onChange={() => handleToggle('emailNotifications', 'reminders')}
          />
          <NotificationToggle
            label="Newsletters & Updates"
            description="Receive clinic newsletters and health tips"
            checked={settings.emailNotifications.newsletters}
            onChange={() => handleToggle('emailNotifications', 'newsletters')}
          />
        </div>
      </div>

      {/* SMS Notifications */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-[#2f6f8f]" />
          <h2 className="text-lg font-semibold text-gray-800">SMS Notifications</h2>
        </div>
        <div className="space-y-3">
          <NotificationToggle
            label="Appointment SMS"
            description="Receive text messages about appointments"
            checked={settings.smsNotifications.appointments}
            onChange={() => handleToggle('smsNotifications', 'appointments')}
          />
          <NotificationToggle
            label="Lab Report SMS"
            description="Get text alerts when lab reports are available"
            checked={settings.smsNotifications.labReports}
            onChange={() => handleToggle('smsNotifications', 'labReports')}
          />
          <NotificationToggle
            label="SMS Reminders"
            description="Receive appointment reminders via SMS"
            checked={settings.smsNotifications.reminders}
            onChange={() => handleToggle('smsNotifications', 'reminders')}
          />
        </div>
      </div>

      {/* Push Notifications */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-[#2f6f8f]" />
          <h2 className="text-lg font-semibold text-gray-800">Push Notifications</h2>
        </div>
        <div className="space-y-3">
          <NotificationToggle
            label="Appointment Alerts"
            description="Instant push notifications for appointments"
            checked={settings.pushNotifications.appointments}
            onChange={() => handleToggle('pushNotifications', 'appointments')}
          />
          <NotificationToggle
            label="Messages"
            description="Get notified when you receive new messages"
            checked={settings.pushNotifications.messages}
            onChange={() => handleToggle('pushNotifications', 'messages')}
          />
          <NotificationToggle
            label="System Updates"
            description="Receive notifications about system updates and announcements"
            checked={settings.pushNotifications.updates}
            onChange={() => handleToggle('pushNotifications', 'updates')}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={fetchSettings}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
        >
          Reset
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-[#2f6f8f] text-white rounded-lg hover:bg-[#25596f] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {saving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Saving...
            </>
          ) : (
            'Save Settings'
          )}
        </button>
      </div>
    </div>
  );
}
