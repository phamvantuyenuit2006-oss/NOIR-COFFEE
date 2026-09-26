import React from 'react';
import { AppProvider } from './context/AppContext';

// Core Essential Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { CoffeeBeans } from './components/CoffeeBeans';
import { OurSpace } from './components/OurSpace';
import { Locations } from './components/Locations';
import { Membership } from './components/Membership';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { MobileStickyOrderBar } from './components/MobileStickyOrderBar';
import { ToastContainer } from './components/ToastContainer';

// Essential Modals
import { CartDrawer } from './components/modals/CartDrawer';
import { CustomizeDrinkModal } from './components/modals/CustomizeDrinkModal';
import { CustomizeBeanModal } from './components/modals/CustomizeBeanModal';
import { OrderOptionsModal } from './components/modals/OrderOptionsModal';
import { SearchOverlay } from './components/modals/SearchOverlay';
import { MembershipModal } from './components/modals/MembershipModal';
import { SpaceModal } from './components/modals/SpaceModal';
import { LocationModal } from './components/modals/LocationModal';
import { TableReservationModal } from './components/modals/TableReservationModal';
import { BrewCalculatorModal } from './components/modals/BrewCalculatorModal';
import { SubmitReviewModal } from './components/modals/SubmitReviewModal';

import { useScrollReveal } from './hooks/useScrollReveal';

function MainLayout() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#171411] font-sans antialiased selection:bg-[#9E472A]/25 selection:text-[#9E472A]">
      {/* 1. Sleek Floating Header */}
      <Header />

      {/* 2. Hero with Interactive Sensory Stage */}
      <Hero />

      {/* 3. Core Specialty Drink & Bakery Menu */}
      <SignatureMenu />

      {/* 5. Whole Bean Specialty Catalog with Custom Grind */}
      <CoffeeBeans />

        {/* 7. Architectural Space & Café Atmosphere Gallery */}
        <OurSpace />

        {/* 8. 3 Flagship Store Locations & Booking */}
        <Locations />

        {/* 9. Exclusive VIP Coffee Club Membership */}
        <Membership />

        {/* 10. Verified Reviews & Community Feedback */}
        <Testimonials />

        {/* 11. Refined Brand Footer */}
        <Footer />

        {/* 12. Smart AI Barista & Concierge Chatbot */}
        <Chatbot />

        {/* Mobile Sticky Action Bar */}
        <MobileStickyOrderBar />

        {/* Interactive Drawers & Dialogs */}
        <CartDrawer />
        <CustomizeDrinkModal />
        <CustomizeBeanModal />
        <OrderOptionsModal />
        <SearchOverlay />
        <MembershipModal />
        <SpaceModal />
        <LocationModal />
        <TableReservationModal />
        <BrewCalculatorModal />
        <SubmitReviewModal />

        {/* Toast Notification Layer */}
        <ToastContainer />
      </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;

