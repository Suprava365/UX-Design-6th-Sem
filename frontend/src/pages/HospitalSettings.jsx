import React, { useState, useEffect } from 'react';
import { settingsService } from '../../../services/settingsService';
import { Building, Clock, Mail, Phone, MapPin, Globe, AlertCircle, CheckCircle } from 'lucide-react';

export default function HospitalSettings() {
  const [settings, setSettings] = useState({
    hospitalName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    website: '',
    openingTime: '',
    closingTime: '',
    emergencyContact: '',
    description: '',
    specialties: []
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
      const data = await settingsService.getHospitalSettings();
      if (data) {
        setSettings({
          hospitalName: data.hospitalName || '',
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || '',
          city: data.city || '',
          state: data.state || '',
          zipCode: data.zipCode || '',
          country: data.country || '',
          website: data.website || '',
          openingTime: data.openingTime || '',
          closingTime: data.closingTime || '',
          emergencyContact: data.emergencyContact || '',
          description: data.description || '',
          specialties: data.specialties || []
        });
      }
    } catch (error) {
      console.error('Error fetching hospital settings:', error);
      setMessage({ 
        type: 'error', 
        text: 'Failed to load hospital settings' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage({ type: '', text: '' });
      
      await settingsService.updateHospitalSettings(settings);
      
      setMessage({ 
        type: 'success', 
        text: 'Hospital settings updated successfully!' 
      });
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      console.error('Error updating hospital settings:', error);
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Failed to update settings' 
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecialtyAdd = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const specialty = e.target.value.trim();
      if (!settings.specialties.includes(specialty)) {
        setSettings(prev => ({
          ...prev,
          specialties: [...prev.specialties, specialty]
        }));
      }
      e.target.value = '';
    }
  };

  const handleSpecialtyRemove = (specialty) => {
    setSettings(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialty)
    }));
  };

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
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Building className="w-7 h-7" />
          Hospital Settings
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Manage your hospital's information and operating hours
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

      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Name *
            </label>
            <input
              type="text"
              name="hospitalName"
              value={settings.hospitalName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="Smartlite Medical Center"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
                placeholder="info@hospital.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact
            </label>
            <input
              type="tel"
              name="emergencyContact"
              value={settings.emergencyContact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="Emergency hotline"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="url"
                name="website"
                value={settings.website}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
                placeholder="https://www.hospital.com"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={settings.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="Brief description of your hospital..."
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="123 Main Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={settings.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="New York"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State/Province
            </label>
            <input
              type="text"
              name="state"
              value={settings.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="NY"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={settings.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="10001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={settings.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
              placeholder="United States"
            />
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Operating Hours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opening Time
            </label>
            <input
              type="time"
              name="openingTime"
              value={settings.openingTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Closing Time
            </label>
            <input
              type="time"
              name="closingTime"
              value={settings.closingTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Specialties</h2>
        <div>
          <input
            type="text"
            onKeyDown={handleSpecialtyAdd}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
            placeholder="Type a specialty and press Enter..."
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {settings.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#2f6f8f] text-white rounded-full text-sm flex items-center gap-2"
              >
                {specialty}
                <button
                  type="button"
                  onClick={() => handleSpecialtyRemove(specialty)}
                  className="hover:text-red-200"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
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
