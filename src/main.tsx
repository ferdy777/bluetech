import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TableProvider } from "./context/TableContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TableProvider>
      <App />
    </TableProvider>
  </BrowserRouter>
);
