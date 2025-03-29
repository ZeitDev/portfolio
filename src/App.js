import { Layout, LegalNotice, PrivacyPolicy } from './Components'
import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="*" element={<Layout />} />
        </Route>
          <Route path="/legalnotice" element={<LegalNotice />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  );
}



export default App;