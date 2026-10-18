import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LocalizationProvider } from "./lib/localization";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Command from "./pages/Command";
import Recruitment from "./pages/Recruitment";
import Community from "./pages/Community";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EndOfWatch from "./pages/EndOfWatch";
import SeptemberRemembrance from "./pages/SeptemberRemembrance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="lssd-theme">
        <LocalizationProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex min-h-screen flex-col bg-background">
              <Navigation />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/divisions" element={<Divisions />} />
                  <Route path="/command" element={<Command />} />
                  <Route path="/recruitment" element={<Recruitment />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/endofwatch" element={<EndOfWatch />} />
                  <Route path="/11-zari" element={<SeptemberRemembrance />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
