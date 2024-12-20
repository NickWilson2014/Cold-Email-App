import React from 'react';
import { MoreVertical, Play, Pause, Trash2 } from 'lucide-react';
import type { Campaign } from '../../types';

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Q1 Sales Outreach',
    status: 'active',
    sentEmails: 2500,
    openRate: 48.2,
    replyRate: 15.6,
    createdAt: '2024-03-10',
  },
  {
    id: '2',
    name: 'Product Launch Follow-up',
    status: 'draft',
    sentEmails: 0,
    openRate: 0,
    replyRate: 0,
    createdAt: '2024-03-12',
  },
  {
    id: '3',
    name: 'Customer Feedback',
    status: 'completed',
    sentEmails: 1500,
    openRate: 52.1,
    replyRate: 18.4,
    createdAt: '2024-03-08',
  },
];

const CampaignList = () => {
  const handleNewCampaign = () => {
    window.location.hash = '#new-campaign';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Active Campaigns</h2>
        <button 
          onClick={handleNewCampaign}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          New Campaign
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {mockCampaigns.map((campaign) => (
          <div key={campaign.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-gray-900">{campaign.name}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Created on {new Date(campaign.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {campaign.status === 'active' ? (
                  <button className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100">
                    <Pause className="w-5 h-5" />
                  </button>
                ) : campaign.status === 'draft' ? (
                  <button className="p-2 text-gray-600 hover:text-green-600 rounded-lg hover:bg-gray-100">
                    <Play className="w-5 h-5" />
                  </button>
                ) : null}
                <button className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-sm">
                <span className="text-gray-600">Sent: </span>
                <span className="font-medium">{campaign.sentEmails.toLocaleString()}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Open Rate: </span>
                <span className="font-medium">{campaign.openRate}%</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Reply Rate: </span>
                <span className="font-medium">{campaign.replyRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;