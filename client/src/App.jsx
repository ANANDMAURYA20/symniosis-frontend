import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from './layouts/HomeLayout';
import { RequestStaff } from './components/RequestStaff';
import { ContactSection, OurTeam, AboutUs, HowItWorks } from './components/main';
import { MainLayout } from './layouts/MainLayout';
import ServicesSection from './components/ServicesSection';

// Import all service pages
import BackOffice from './pages/services/BackOffice';
import TaxPreparation from './pages/services/TaxPreparation';
import Accounts from './pages/services/Accounts';
import Restaurant from './pages/services/Restaurant';
import Monthly from './pages/services/Monthly';
import Payroll from './pages/services/Payroll';
import BookCleanup from './pages/services/BookCleanup';
import DataMigration from './pages/services/DataMigration';
import Budgeting from './pages/services/Budgeting';
import CFO from './pages/services/CFO';
import EngagementModel from './pages/services/EngagementModel';
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <div className="App antialiased text-gray-800">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/contact" element={<ContactSection />} /> 
            <Route path="/request-a-staff" element={<RequestStaff />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services" element={<ServicesSection />} />
            
            {/* Service Routes */}
            <Route path="/services/back-office" element={<BackOffice />} />
            <Route path="/services/tax-preparation" element={<TaxPreparation />} />
            <Route path="/services/accounts" element={<Accounts />} />
            <Route path="/services/restaurant" element={<Restaurant />} />
            <Route path="/services/monthly" element={<Monthly />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/services/book-cleanup" element={<BookCleanup />} />
            <Route path="/services/data-migration" element={<DataMigration />} />
            <Route path="/services/budgeting" element={<Budgeting />} />
            <Route path="/services/cfo" element={<CFO />} />
            <Route path="/engagement-model" element={<EngagementModel />} />
            <Route path="/learn-more" element={<LearnMore />} />
            
            <Route path="/*" element={<HomeLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
