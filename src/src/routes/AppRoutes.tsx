import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { EvidencesPage } from "../pages/Evidences/EvidencesPage";
import { HomePage } from "../pages/Home/HomePage";
import { MemberDetailPage } from "../pages/Members/MemberDetailPage";
import { MembersPage } from "../pages/Members/MembersPage";
import { StoriesPage } from "../pages/Stories/StoriesPage";
import { WorkDetailPage } from "../pages/Works/WorkDetailPage";
import { WorksPage } from "../pages/Works/WorksPage";

export function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="integrantes" element={<MembersPage />} />
          <Route path="integrantes/:id" element={<MemberDetailPage />} />
          <Route path="producciones" element={<WorksPage />} />
          <Route path="producciones/:id" element={<WorkDetailPage />} />
          <Route path="cuentos" element={<StoriesPage />} />
          <Route path="evidencias" element={<EvidencesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
