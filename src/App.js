import { StyleSheet } from "@react-pdf/renderer";
import "./App.css";
import Registration from "./pages/registration";
import Home from "./pages/home";
import GeneratePDF from "./pages/generatePDF";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#61dafb",
    }
  });
  const navigate = useNavigate();

  const handleHomeClick = () => navigate("/");
  const handleTransProviderRegistrationClick = () => {
    console.log("navigate to Trans Provider Registration");
    navigate("/registration");
  };
  const handleGeneratePDFClick = () => navigate("/generatePDF");
  return (
    <div className="App">
      <header className="App-header">
        <div>
  <h1 style={{ textAlign: "center" }}>
    Welcome to Transportation Provider Registration
  </h1>
<br />
    <button onClick={handleHomeClick}>Home</button>
    <button onClick={handleTransProviderRegistrationClick}>
      Transportation Provider Registration
    </button>
    <button onClick={handleGeneratePDFClick}>
      Generate Transportation Provider Registration PDF
    </button>
  </div>
      </header>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/generatePDF" element={<GeneratePDF />} />
      </Routes>      

            <footer style={styles.page} className="App-footer">
        <table>
          <tbody>
            <tr>
              <td align="left">© 2026 Internet Software Works</td>
              <td align="right">
                Created by Tom Erickson of{" "}
                <a href="https://internetsoftwareworks.com" target="_blank" rel="noreferrer">
                  Internet Software Works
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default App;
