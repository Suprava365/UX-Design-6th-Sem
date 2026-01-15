import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get auth token from localStorage
const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const adminUserService = {
  // Create new user
  createUser: async (userData) => {
    const response = await axios.post(
      `${API_URL}/admin/users`,
      userData,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Get all users with pagination and filters
  getAllUsers: async (params = {}) => {
    const response = await axios.get(`${API_URL}/admin/users`, {
      headers: getAuthToken(),
      params
    });
    return response.data;
  },

  // Get user by ID
  getUserById: async (userId) => {
    const response = await axios.get(
      `${API_URL}/admin/users/${userId}`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Update user
  updateUser: async (userId, userData) => {
    const response = await axios.put(
      `${API_URL}/admin/users/${userId}`,
      userData,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Update user password
  updateUserPassword: async (userId, passwordData) => {
    const response = await axios.patch(
      `${API_URL}/admin/users/${userId}/password`,
      passwordData,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Deactivate user
  deactivateUser: async (userId) => {
    const response = await axios.patch(
      `${API_URL}/admin/users/${userId}/deactivate`,
      {},
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Reactivate user
  reactivateUser: async (userId) => {
    const response = await axios.patch(
      `${API_URL}/admin/users/${userId}/reactivate`,
      {},
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Delete user
  deleteUser: async (userId) => {
    const response = await axios.delete(
      `${API_URL}/admin/users/${userId}`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Bulk operations
  bulkUpdateRoles: async (userIds, role) => {
    const response = await axios.post(
      `${API_URL}/admin/users/bulk-update-roles`,
      { userIds, role },
      { headers: getAuthToken() }
    );
    return response.data;
  },

  bulkDeactivateUsers: async (userIds) => {
    const response = await axios.post(
      `${API_URL}/admin/users/bulk-deactivate`,
      { userIds },
      { headers: getAuthToken() }
    );
    return response.data;
  },

  bulkDeleteUsers: async (userIds) => {
    const response = await axios.post(
      `${API_URL}/admin/users/bulk-delete`,
      { userIds },
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Get user statistics
  getUserStats: async () => {
    const response = await axios.get(
      `${API_URL}/admin/users/stats`,
      { headers: getAuthToken() }
    );
    return response.data;
  },

  // Get user activity logs
  getUserActivityLogs: async (params = {}) => {
    const response = await axios.get(
      `${API_URL}/admin/users/activity-logs`,
      {
        headers: getAuthToken(),
        params
      }
    );
    return response.data;
  },

  // Export users
  exportUsers: async (format = 'csv') => {
    const response = await axios.get(
      `${API_URL}/admin/users/export`,
      {
        headers: getAuthToken(),
        params: { format },
        responseType: 'blob'
      }
    );
    return response.data;
  },

  // Import users
  importUsers: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(
      `${API_URL}/admin/users/import`,
      formData,
      {
        headers: {
          ...getAuthToken(),
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  },

  // Upload profile picture
  uploadProfilePicture: async (userId, file) => {
    const formData = new FormData();
    formData.append('profilePicture', file);
    
    const response = await axios.post(
      `${API_URL}/admin/users/${userId}/profile-picture`,
      formData,
      {
        headers: {
          ...getAuthToken(),
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  }
};
