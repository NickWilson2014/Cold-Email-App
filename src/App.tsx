import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contacts from './pages/Contacts';
import Campaigns from './pages/Campaigns';
import NewCampaign from './pages/NewCampaign';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  const hash = window.location.hash || '#dashboard';

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath={hash} />
      <div className="ml-64">
        {hash === '#dashboard' && <Dashboard />}
        {hash === '#contacts' && <Contacts />}
        {hash === '#campaigns' && <Campaigns />}
        {hash === '#new-campaign' && <NewCampaign />}
        {hash === '#analytics' && <Analytics />}
        {hash === '#settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;