import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import { MantineProvider } from "@mantine/core";
import UserListPage from "./pages/users/list.tsx";
import UserCreatePage from "./pages/users/create.tsx";
import Home from "./pages/home/index.tsx";
import CreateAppointment from "./pages/appointment/index.tsx";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="users" element={<UserListPage />} />
          <Route path="users/create" element={<UserCreatePage />} />
          <Route path="appointment" element={<CreateAppointment />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </MantineProvider>
);