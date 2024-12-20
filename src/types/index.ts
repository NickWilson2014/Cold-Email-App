export interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  sentEmails: number;
  openRate: number;
  replyRate: number;
  createdAt: string;
}

export interface EmailTemplate {
  id: string;
  subject: string;
  body: string;
}

export interface Stats {
  totalCampaigns: number;
  totalEmails: number;
  averageOpenRate: number;
  averageReplyRate: number;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  status: 'active' | 'pending' | 'inactive';
  lastContacted: string;
}