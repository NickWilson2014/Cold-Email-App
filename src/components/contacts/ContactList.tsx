import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Contact } from '../../types';

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    status: 'active',
    lastContacted: '2024-03-01',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Design Studio',
    location: 'New York, NY',
    status: 'pending',
    lastContacted: '2024-02-28',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Growth Inc',
    location: 'Austin, TX',
    status: 'inactive',
    lastContacted: '2024-02-15',
  },
];

const ContactList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Contacts</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Contact
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {mockContacts.map((contact) => (
          <div key={contact.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{contact.name}</h3>
                <p className="text-sm text-gray-600">{contact.company}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  contact.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : contact.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {contact.status}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contact.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;