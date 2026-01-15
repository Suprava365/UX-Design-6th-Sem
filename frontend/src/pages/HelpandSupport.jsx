import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Book, Video, Mail, Phone, Search } from 'lucide-react';

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      questions: [
        { q: 'How do I book an appointment?', a: 'Navigate to the Appointments page and click "Book Appointment".' },
        { q: 'How do I view my lab reports?', a: 'Go to Lab Reports section from your dashboard.' },
        { q: 'How do I update my profile?', a: 'Click on Settings and then Edit Profile.' }
      ]
    },
    {
      title: 'Appointments',
      icon: Calendar,
      questions: [
        { q: 'Can I cancel my appointment?', a: 'Yes, you can cancel up to 24 hours before the scheduled time.' },
        { q: 'How do I reschedule?', a: 'Cancel your current appointment and book a new one.' },
        { q: 'Will I get reminders?', a: 'Yes, we send email and SMS reminders 24 hours before.' }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        { q: 'I forgot my password', a: 'Click "Forgot Password" on the login page to reset it.' },
        { q: 'Why can\'t I login?', a: 'Ensure your email and password are correct. Contact support if issues persist.' },
        { q: 'Is my data secure?', a: 'Yes, we use industry-standard encryption and security measures.' }
      ]
    }
  ];

  const ContactCard = ({ icon: Icon, title, value, color }) => (
    <div className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${color}`}>
      <Icon className="w-8 h-8 mb-3 text-gray-600" />
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">How can we help you?</h1>
        <p className="text-gray-600">Find answers to common questions or contact our support team</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f6f8f] focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition text-left">
          <Video className="w-8 h-8 text-[#2f6f8f] mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Video Tutorials</h3>
          <p className="text-sm text-gray-600">Watch step-by-step guides</p>
        </button>

        <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition text-left">
          <MessageSquare className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Live Chat</h3>
          <p className="text-sm text-gray-600">Chat with our support team</p>
        </button>

        <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition text-left">
          <Book className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">User Guide</h3>
          <p className="text-sm text-gray-600">Browse detailed documentation</p>
        </button>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-[#2f6f8f]" />
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-l-2 border-gray-200 pl-4">
                    <p className="font-medium text-gray-800 mb-1">{item.q}</p>
                    <p className="text-sm text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={Mail}
            title="Email Support"
            value="support@clinic.com"
            color="border-blue-500"
          />
          <ContactCard
            icon={Phone}
            title="Phone Support"
            value="+1 (555) 123-4567"
            color="border-green-500"
          />
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Our support team is available Monday-Friday, 9AM-5PM EST
        </p>
      </div>
    </div>
  );
}
