
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SessionManagement from "./pages/SessionManagement";
import ConsultingProjects from "./pages/ConsultingProjects";
import DigitalProducts from "./pages/DigitalProducts";
import LegalOffice from "./pages/LegalOffice";
import Judith from "./pages/Judith";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/judith" element={<Judith />} />
          <Route path="/session-management" element={<SessionManagement />} />
          <Route path="/consulting-projects" element={<ConsultingProjects />} />
          <Route path="/digital-products" element={<DigitalProducts />} />
          <Route path="/legal-office" element={<LegalOffice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
