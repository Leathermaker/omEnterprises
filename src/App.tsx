import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { NavbarMobile } from "./components";
import { Router } from "./router";
import { useNavbarStore } from "./store";
import SmoothScrolling from "./components/SmoothScroll";
import { Toaster } from "react-hot-toast";
function App() {
  const { isOpen } = useNavbarStore();

  return (
    <SmoothScrolling>
      <div className="relative">
        {isOpen && <NavbarMobile />}
        <Router />
        <div className="md:block hidden">
          <AnimatedCursor
            innerSize={8} // Size of the inner cursor
            outerSize={35} // Increase the size of the outer cursor
            color="155, 89, 182" // RGB color of the cursor
            outerAlpha={0} // Transparency of the outer cursor
            innerScale={0.7} // Scale of the inner cursor
            outerScale={5} // Scale of the outer cursor
            outerStyle={{
              border: "1px solid rgba(104, 77, 244, 0.5)", // Add a 2px border with transparency
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </SmoothScrolling>
  );
}

export default App;
