import { Route, Routes } from "react-router-dom";
import BoilerPlate from "./pages/BoilerPlate";
import AdminMenu from "./pages/adminMenu";
import UpdateLocation from "./pages/updateLocation";
import FieldRunStorage from "./pages/fieldRunStorage";
import SearchModify from "./pages/searchModify";
import Transfer from "./pages/transfer";
import InProcess from "./pages/inProcess";
import CleanStorage from "./pages/cleanStorage";
import DeleteItems from "./pages/deleteItems";
import ScreeningStorage from "./pages/screeningStorage";
import EmployeeMenu from "./pages/employeeMenu";
import FieldRunModify from "./pages/fieldRunModify";
import RunningJob from "./pages/runningJob";


function App() {
  return (
    <Routes>
      <Route path="/" element={<BoilerPlate />} />
      <Route path="/adminMenu" element={<AdminMenu />} />
      <Route path="/updateLocation" element={<UpdateLocation />} />
      <Route path="/fieldRunStorage" element={<FieldRunStorage />} />
      <Route path="/searchModify" element={<SearchModify />} />
      <Route path="/cleanStorage" element={<CleanStorage />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/inProcess" element={<InProcess />} />
      <Route path="/deleteItems" element={<DeleteItems />} />
      <Route path="/screeningStorage" element={<ScreeningStorage />} />
      <Route path="/employeeMenu" element={<EmployeeMenu />} />
      <Route path="/fieldRunModify" element={<FieldRunModify/>} />
      <Route path="/runningJob" element={<RunningJob/>} />
    </Routes>
  );
}

export default App;
