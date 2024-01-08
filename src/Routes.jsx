import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TransferOrdercomplete = React.lazy(
  () => import("pages/TransferOrdercomplete"),
);
const TransferLoadinganimation = React.lazy(
  () => import("pages/TransferLoadinganimation"),
);
const TransferPaymentFlow = React.lazy(
  () => import("pages/TransferPaymentFlow"),
);
const BankOrdercomplete = React.lazy(() => import("pages/BankOrdercomplete"));
const BankLoadinganimation = React.lazy(
  () => import("pages/BankLoadinganimation"),
);
const AccountNumberDetails = React.lazy(
  () => import("pages/AccountNumberDetails"),
);
const Dropdown = React.lazy(() => import("pages/Dropdown"));
const BankPaymentFlow = React.lazy(() => import("pages/BankPaymentFlow"));
const CardOrdercomplete = React.lazy(() => import("pages/CardOrdercomplete"));
const CardLoadinganimation = React.lazy(
  () => import("pages/CardLoadinganimation"),
);
const CardPin = React.lazy(() => import("pages/CardPin"));
const CardPaymentFlow = React.lazy(() => import("pages/CardPaymentFlow"));
const Applicationdetails = React.lazy(() => import("pages/Applicationdetails"));
const Forgetpassword = React.lazy(() => import("pages/Forgetpassword"));
const Signup = React.lazy(() => import("pages/Signup"));
const Pdfdocx = React.lazy(() => import("pages/Pdfdocx"));
const Document = React.lazy(() => import("pages/Document"));
const LANDINGPAGEOne = React.lazy(() => import("pages/LANDINGPAGEOne"));
const Login = React.lazy(() => import("pages/Login"));
const LANDINGPAGE = React.lazy(() => import("pages/LANDINGPAGE"));
const PricingOne = React.lazy(() => import("pages/PricingOne"));
const NotificationTwelve = React.lazy(() => import("pages/NotificationTwelve"));
const ClientDashboard = React.lazy(() => import("pages/ClientDashboard"));
const Pticing = React.lazy(() => import("pages/Pticing"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pticing" element={<Pticing />} />
          <Route path="/clientdashboard" element={<ClientDashboard />} />
          <Route path="/notificationtwelve" element={<NotificationTwelve />} />
          <Route path="/pricingone" element={<PricingOne />} />
          <Route path="/landingpage" element={<LANDINGPAGE />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landingpageone" element={<LANDINGPAGEOne />} />
          <Route path="/document" element={<Document />} />
          <Route path="/pdfdocx" element={<Pdfdocx />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/applicationdetails" element={<Applicationdetails />} />
          <Route path="/cardpaymentflow" element={<CardPaymentFlow />} />
          <Route path="/cardpin" element={<CardPin />} />
          <Route
            path="/cardloadinganimation"
            element={<CardLoadinganimation />}
          />
          <Route path="/cardordercomplete" element={<CardOrdercomplete />} />
          <Route path="/bankpaymentflow" element={<BankPaymentFlow />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route
            path="/accountnumberdetails"
            element={<AccountNumberDetails />}
          />
          <Route
            path="/bankloadinganimation"
            element={<BankLoadinganimation />}
          />
          <Route path="/bankordercomplete" element={<BankOrdercomplete />} />
          <Route
            path="/transferpaymentflow"
            element={<TransferPaymentFlow />}
          />
          <Route
            path="/transferloadinganimation"
            element={<TransferLoadinganimation />}
          />
          <Route
            path="/transferordercomplete"
            element={<TransferOrdercomplete />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
