import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: 'We collect personal information including name, email, phone number, medical history, and appointment details to provide our healthcare services.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'Your information is used to schedule appointments, maintain medical records, process payments, and communicate important health-related updates.'
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal health information.'
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: 'We do not sell your personal information. Data is only shared with healthcare providers involved in your care and as required by law.'
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also request a copy of your data at any time.'
    },
    {
      icon: Database,
      title: 'Data Retention',
      content: 'We retain your medical records as required by law. Account data is kept active until you request deletion.'
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2f6f8f] to-[#1e4d63] rounded-lg p-8 mb-8 text-white">
        <Shield className="w-12 h-12 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white text-opacity-90">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <p className="text-gray-700 leading-relaxed">
          At Smartlite Medical, we are committed to protecting your privacy and ensuring the security of your personal health information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our clinic management system.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#2f6f8f] bg-opacity-10 p-3 rounded-lg">
                <section.icon className="w-6 h-6 text-[#2f6f8f]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HIPAA Compliance */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">HIPAA Compliance</h2>
        <p className="text-blue-800 leading-relaxed">
          We are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA) and follow all 
          regulations regarding the privacy and security of protected health information (PHI).
        </p>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Questions About Privacy?</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns about our privacy practices, please contact us:
        </p>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700">
            <strong>Email:</strong> privacy@smartlitemedical.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Healthcare Ave, Medical District, NY 10001
          </p>
        </div>
      </div>
    </div>
  );
}
