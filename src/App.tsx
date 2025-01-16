import "./App.css";
import { NavbarMobile } from "./components";
import { Router } from "./router";
import { useNavbarStore } from "./store";

function App() {
  const { isOpen } = useNavbarStore();

  return (
    <div className="relative">
      {isOpen && <NavbarMobile />}
      <Router />
    </div>
  );
}

export default App;
