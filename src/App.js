import { Route, Routes } from "react-router-dom";
import BoilerPlate from "./pages/BoilerPlate";
import AdminMenu from "./pages/adminMenu";
import UpdateLocation from "./pages/updateLocation";
import FieldRunStorage from "./pages/fieldRunStorage";
import SearchModify from "./pages/searchModify";
import DeleteItems from "./pages/deleteItems";
import ScreeningStorage from "./pages/screeningStorage";
import EmployeeMenu from "./pages/employeeMenu";


function App() {
  return (
    <Routes>
      <Route path="/" element={<BoilerPlate />} />
      <Route path="/adminMenu" element={<AdminMenu />} />
      <Route path="/updateLocation" element={<UpdateLocation />} />
      <Route path="/fieldRunStorage" element={<FieldRunStorage />} />
      <Route path="/searchModify" element={<SearchModify />} />
      <Route path="/deleteItems" element={<DeleteItems />} />
      <Route path="/screeningStorage" element={<ScreeningStorage />} />
      <Route path="/employeeMenu" element={<EmployeeMenu />} />
    </Routes>
  );
}

export default App;
