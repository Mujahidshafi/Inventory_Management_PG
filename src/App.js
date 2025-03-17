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
import MillJob from "./pages/MillJob";
import StorageDashboard from "./pages/StorageDashboard";
import SearchHistory from "./pages/SearchHistory";
import Login from "./pages/login";
import AddNewItems from "./pages/addNewItems";
import CleanStorageModify from "./pages/cleanSorageModify";
import Search from "./pages/Search";
import Sale from "./pages/Sale";


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
      <Route path="/fieldRunModify" element={<FieldRunModify />} />
      <Route path="/runningJob" element={<RunningJob />} />
      <Route path="/mill-job" element={<MillJob />} />
      <Route path="/storage-dashboard" element={<StorageDashboard />} />
      <Route path="/search-history" element={<SearchHistory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addNewItems" element={<AddNewItems />} />
      <Route path="/cleanStorageModify" element={<CleanStorageModify />} />
      <Route path="/search" element={<Search />} />
      <Route path="/sale" element={<Sale />} />

    </Routes>
  );
}

export default App;
