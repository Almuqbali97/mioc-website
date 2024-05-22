import { Routes, Route } from 'react-router-dom';
import Home from './pages/website-pages/Home';
import Register from './pages/website-pages/Register';
import Login from './pages/website-pages/Login';
import RequireAuth from './components/auth/RequireAuth';
import Logout from './pages/website-pages/Logout';
import UserProfile from './pages/user-pages/UserProfile.jsx';
import AdminPage from './pages/admin-pages/AdminPage';
import WelcomeMessage from './pages/website-pages/organization/WelcomeMessage';
import ImportantDates from './pages/website-pages/organization/ImportantDates';
import SientificComittee from './pages/website-pages/organization/SientificComittee';
import OrganizingCommittee from './pages/website-pages/organization/OrganizingCommittee';
import OnlineRegistration from './pages/website-pages/online-registration/OnlineRegistration';
import RegistrationChecklist from './pages/website-pages/online-registration/RegistrationChecklist.jsx'
import ProgramAtGlance from './pages/website-pages/program/ProgramAtGlance.jsx';
import SientificProgram from './pages/website-pages/program/SientificProgram.jsx';
import CoursesAndWorkshops from './pages/website-pages/program/CoursesAndWorkshops.jsx';
import Cme from './pages/website-pages/program/Cme.jsx';
import AbstractSubmission from './pages/website-pages/abstract/AbstractSubmission.jsx';
import Faculty from './pages/website-pages/faculty/Faculty.jsx';
import ReserveYourSpace from './pages/website-pages/sponsers-exhibit/ReserveYourSpace.jsx';
import SponsersAndExhibitors from './pages/website-pages/sponsers-exhibit/SponsersAndExhibitors.jsx';
import MuscatCity from './pages/website-pages/travel/MuscatCity.jsx';
import Transportation from './pages/website-pages/travel/Transportation.jsx';
import VisaInformation from './pages/website-pages/travel/VisaInformation.jsx';
import Accommodation from './pages/website-pages/travel/Accommodation.jsx';
import TestComponantes from './components/TestComponantes.jsx';
import Website from './layouts/Website.jsx';
import AdminPanel from './layouts/AdminPanel.jsx';
import AbstractsManagement from './pages/admin-pages/AbstractsManagement.jsx';
import AbstractInfo from './pages/website-pages/abstract/AbstractInfo.jsx';
import CheckoutPage from './pages/website-pages/online-registration/CheckoutPage.jsx';
import CancelPayment from './pages/website-pages/online-registration/CancelPayment.jsx';
import SuccessPayment from './pages/website-pages/online-registration/SuccessPayment.jsx';
import RegistrersManagement from './pages/admin-pages/RegistrersManagement.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Website />}>
          {/* general */}
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* organizaion */}
          <Route path='/welcom-message' element={<WelcomeMessage />} />
          <Route path='/important-dates' element={<ImportantDates />} />
          <Route path='/organising-committee' element={<OrganizingCommittee />} />
          <Route path='/sientific-committee' element={<SientificComittee />} />
          {/* registration */}
          <Route path='/online-registration' element={<OnlineRegistration />} />
          <Route path='/registration-checklist' element={<RegistrationChecklist />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/payment/cancel' element={<CancelPayment />} />
          <Route path='/payment/success' element={<SuccessPayment />} />
          {/* program */}
          <Route path='/cme' element={<Cme />} />
          <Route path='/program-at-a-glance' element={<ProgramAtGlance />} />
          <Route path='/sientific-program' element={<SientificProgram />} />
          <Route path='/courses-and-workshops' element={<CoursesAndWorkshops />} />
          {/* faculty*/}
          <Route path='/faculty' element={<Faculty />} />
          {/* sponser/exhibit */}
          <Route path='/reserve-your-space' element={<ReserveYourSpace />} />
          <Route path='/sponsers-and-exhibitors' element={<SponsersAndExhibitors />} />
          {/* travel */}
          <Route path='/muscat-city' element={<MuscatCity />} />
          <Route path='/transportation' element={<Transportation />} />
          <Route path='/visa-information' element={<VisaInformation />} />
          <Route path='/accommodation' element={<Accommodation />} />
          <Route path='/abstract-info' element={<AbstractInfo />} />
          {/* Require auth */}
          <Route element={<RequireAuth />}>
            {/* abstract */}
            <Route path='/submit-abstract' element={<AbstractSubmission />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/user/profile' element={<UserProfile />} />
          </Route>
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<AdminPanel />}>
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/abstracts' element={<AbstractsManagement />} />
            <Route path='/admin/registrers' element={<RegistrersManagement />} />
          </Route>
        </Route>

      </Routes>
      {/* <TestComponantes /> */}

    </>
  )
}

export default App
