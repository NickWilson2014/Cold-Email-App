import React from 'react';
import { Users, UserPlus, UserCheck, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Contacts', value: '1,234', icon: Users },
  { label: 'New This Month', value: '56', icon: UserPlus },
  { label: 'Active Contacts', value: '789', icon: UserCheck },
  { label: 'Needs Follow-up', value: '23', icon: Clock },
];

const ContactStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactStats;