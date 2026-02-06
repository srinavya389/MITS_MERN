import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import { Route, Routes } from "react-router-dom";

import UseState from "./Hooks/UseState";
import Hook from "./Hooks/Hook";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

import UseEffect from "./Hooks/UseEffect";
import UseEffectApi from "./Hooks/UseEffectApi";
import UseRef from "./Hooks/UseRef";
import UseReduce from "./Hooks/UseReduce";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
import Todo from "./component/Todo";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Namrutha" />} />

        <Route
          path="/about"
          element={<About name="Namrutha" age={20} dept="CS&DS" />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route path="/useState" element={<UseState />} />

        {/* 🔽 Hooks Parent Route */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReduce" element={<UseReduce />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="usecallback" element={<UseCallback />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo"element={<Todo/>}/>
      </Routes>
    </>
  );
};

export default App;