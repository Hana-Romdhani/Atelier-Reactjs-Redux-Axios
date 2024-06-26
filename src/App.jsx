import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Events from "./Components/Events";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import EventDetails from "./Components/EventDetails";
import AddEvent from "./Components/AddEvent";
import { useDispatch } from "react-redux";
import { fetchEvents } from "./redux/slices/eventSlice";

function App({ loader }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
    <NavBar/>
      <Routes >
        <Route path="/events">
        <Route index element={<Events   loader={loader} />} />
        <Route path="Add" element={<AddEvent/>} />
        <Route path="details/:id" element={<EventDetails/>} />
        <Route path="update/:id" element={<AddEvent/>}  />

        </Route>
        {/* <Route path="details/:nom" element={<EventDetails/>} /> */}
       

        <Route path="*" element={<><p>Not found</p></>} />
      </Routes>
     
    </>
  );
}

export default App;

