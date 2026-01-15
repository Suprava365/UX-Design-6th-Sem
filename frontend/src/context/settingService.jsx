import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const settingsService = {
  // Hospital Settings (Admin only)
  getHospitalSettings: async () => {
    const response = await axios.get(
      `${API_URL}/settings/hospital`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  updateHospitalSettings: async (settings) => {
    const response = await axios.put(
      `${API_URL}/settings/hospital`,
      settings,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // User Profile Settings
  getMyProfile: async () => {
    const response = await axios.get(
      `${API_URL}/settings/me`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  updateMyProfile: async (profileData) => {
    const response = await axios.put(
      `${API_URL}/settings/me`,
      profileData,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Password Management
  changePassword: async (passwordData) => {
    const response = await axios.put(
      `${API_URL}/settings/change-password`,
      passwordData,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Notification Settings
  getNotificationSettings: async () => {
    const response = await axios.get(
      `${API_URL}/settings/notifications`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  updateNotificationSettings: async (notificationSettings) => {
    const response = await axios.put(
      `${API_URL}/settings/notifications`,
      notificationSettings,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Account Deletion
  deleteMyAccount: async () => {
    const response = await axios.delete(
      `${API_URL}/settings/me`,
      { headers: getAuthToken() }
    );
    return response.data;
  }
};
