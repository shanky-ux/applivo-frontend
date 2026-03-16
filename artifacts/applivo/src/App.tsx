import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch, Router } from "wouter";
import LandingPage from "@/pages/LandingPage";
import PricingPage from "@/pages/PricingPage";
import FeaturesPage from "@/pages/FeaturesPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import FAQPage from "@/pages/FAQPage";
import WhyDesktopPage from "@/pages/WhyDesktopPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/how-it-works" component={HowItWorksPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/why-desktop" component={WhyDesktopPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
