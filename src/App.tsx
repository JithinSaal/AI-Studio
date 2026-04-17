import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout';
import MarketDiscovery from './pages/MarketDiscovery';
import PipelineMonitor from './pages/PipelineMonitor';
import OutreachTracker from './pages/OutreachTracker';
import PitchApproval from './pages/PitchApproval';
import CampaignConfig from './pages/CampaignConfig';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MarketDiscovery />} />
          <Route path="/monitor" element={<PipelineMonitor />} />
          <Route path="/tracker" element={<OutreachTracker />} />
          <Route path="/review" element={<PitchApproval />} />
          <Route path="/setup" element={<CampaignConfig />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
