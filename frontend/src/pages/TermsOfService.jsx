import React from 'react';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2f6f8f] to-[#1e4d63] rounded-lg p-8 mb-8 text-white">
        <FileText className="w-12 h-12 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white text-opacity-90">
          Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <p className="text-gray-700 leading-relaxed">
          Welcome to Smartlite Medical Clinic Management System. By accessing or using our platform, you agree to be bound by these Terms of Service. 
          Please read them carefully before using our services.
        </p>
      </div>

      {/* Acceptance */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
        </div>
        <p className="text-gray-600 leading-relaxed pl-9">
          By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
          and our Privacy Policy. If you do not agree, please do not use our platform.
        </p>
      </div>

      {/* User Accounts */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">2. User Accounts</h2>
        <ul className="space-y-2 text-gray-600 pl-5">
          <li className="list-disc">You must provide accurate and complete information when creating an account</li>
          <li className="list-disc">You are responsible for maintaining the security of your account credentials</li>
          <li className="list-disc">You must notify us immediately of any unauthorized access</li>
          <li className="list-disc">One person may not maintain multiple accounts</li>
          <li className="list-disc">Accounts are non-transferable</li>
        </ul>
      </div>

      {/* Use of Services */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Acceptable Use</h2>
        <p className="text-gray-600 leading-relaxed mb-3">You agree NOT to:</p>
        <ul className="space-y-2 text-gray-600 pl-5">
          <li className="list-disc">Violate any laws or regulations</li>
          <li className="list-disc">Impersonate another person or entity</li>
          <li className="list-disc">Submit false or misleading information</li>
          <li className="list-disc">Attempt to gain unauthorized access to our systems</li>
          <li className="list-disc">Transmit viruses or malicious code</li>
          <li className="list-disc">Interfere with or disrupt our services</li>
        </ul>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <h2 className="text-xl font-semibold text-yellow-900">4. Medical Disclaimer</h2>
        </div>
        <p className="text-yellow-800 leading-relaxed pl-9">
          Our platform is a tool for scheduling and managing healthcare appointments. It does not provide medical advice, diagnosis, or treatment. 
          Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>

      {/* Appointments */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Appointments and Cancellations</h2>
        <ul className="space-y-2 text-gray-600 pl-5">
          <li className="list-disc">Appointments must be cancelled at least 24 hours in advance</li>
          <li className="list-disc">Late cancellations or no-shows may result in fees</li>
          <li className="list-disc">The clinic reserves the right to reschedule appointments when necessary</li>
          <li className="list-disc">You will receive appointment reminders via email and/or SMS</li>
        </ul>
      </div>

      {/* Payment */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Payment Terms</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Payment is required at the time of service unless other arrangements have been made. We accept various payment methods including 
          credit cards, debit cards, and insurance. You are responsible for any applicable co-pays, deductibles, or services not covered by insurance.
        </p>
      </div>

      {/* Data and Privacy */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data and Privacy</h2>
        <p className="text-gray-600 leading-relaxed">
          We are committed to protecting your privacy and personal health information in accordance with HIPAA regulations. 
          Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
        </p>
      </div>

      {/* Termination */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Account Termination</h2>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to suspend or terminate your account if you violate these Terms of Service. You may also request account deletion 
          at any time through your account settings. Upon termination, your access to the platform will be revoked, but your medical records 
          will be retained as required by law.
        </p>
      </div>

      {/* Limitation of Liability */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          To the fullest extent permitted by law, Smartlite Medical shall not be liable for any indirect, incidental, special, consequential, 
          or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
          or other intangible losses.
        </p>
      </div>

      {/* Changes to Terms */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service 
          on this page and updating the "Effective Date" at the top. Your continued use of the platform after any such changes constitutes your 
          acceptance of the new Terms of Service.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Contact Us</h2>
        <p className="text-blue-800 mb-3">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="space-y-1 text-sm text-blue-800">
          <p><strong>Email:</strong> legal@smartlitemedical.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Healthcare Ave, Medical District, NY 10001</p>
        </div>
      </div>
    </div>
  );
}
