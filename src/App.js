import React, { useMemo } from "react";
// import "./App.css";

import Navbar from "./Navbar";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import "./styles.css";
import Login from "./pages/Login";
function App() {
  console.log(window.location);
  // const containerStyle = {
  //   width: "100%",
  //   height: "100%",
  // };
  // const center = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };
  // const [arr, setArr] = useState([]);
  // const [val, setVal] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setArr((currentItem) => {
  //     return [
  //       ...currentItem,
  //       { id: crypto.randomUUID(), title: val, completed: false },
  //     ];
  //   });
  //   setVal("");
  // };
  // const checkTodo = (id, task) => {
  //   setArr((currentItem) => {
  //     return currentItem.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, completed: task };
  //       }
  //       return item;
  //     });
  //   });
  // };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkw4RPmwaUBwuT-AWidjDCeaDDaOAnEbw",
  });
  const [map, setMap] = React.useState(null);
  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  const google = window.google;
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  // return <Login />;
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // return (
  //   <LoadScript googleMapsApiKey="AIzaSyAkw4RPmwaUBwuT-AWidjDCeaDDaOAnEbw">
  //     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
  //       {/* Child components, such as markers, info windows, etc. */}
  //       <></>
  //     </GoogleMap>
  //   </LoadScript>
  // );
  // return (
  //   <div className="app">
  //     {isLoaded ? (
  //       <h1>Loading ....</h1>
  //     ) : (
  //       <GoogleMap
  //         mapContainerClassName="map-container"
  //         center={center}
  //         zoom={10}
  //       />
  //     )}
  //   </div>
  // );
  // return isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={10}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     {/* Child components, such as markers, info windows, etc. */}
  //     <></>
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
  // return (
  //   // <>
  //   //   <form onSubmit={handleSubmit} className="new-item-form">
  //   //     <div className="form-row">
  //   //       <label htmlFor="item">New Item</label>
  //   //       <input
  //   //         type="text"
  //   //         id="item"
  //   //         value={val}
  //   //         onChange={(e) => {
  //   //           console.log("value", e.target.value);
  //   //           setVal(e.target.value);
  //   //         }}
  //   //       />
  //   //       <button
  //   //         type="submit"
  //   //         className="btn"
  //   //         // onClick={(e) => {
  //   //         //   e.preventDefault();
  //   //         //   addItem();
  //   //         // }}
  //   //       >
  //   //         Add
  //   //       </button>
  //   //     </div>
  //   //   </form>
  //   //   <h1 className="header">Todo List</h1>
  //   //   {arr.map((item) => (
  //   //     <div key={item.id} className="list-item">
  //   //       <input
  //   //         type="checkbox"
  //   //         onChange={(e) => checkTodo(item.id, e.target.checked)}
  //   //         checked={item.completed}
  //   //       />
  //   //       <text>{item.title}</text>
  //   //       <button className="btn btn-danger">Delete</button>
  //   //     </div>
  //   //   ))}
  //   // </>
  return <Navbar />;
  //   <div className="app">
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={10}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       {/* Child components, such as markers, info windows, etc. */}
  //       <></>
  //     </GoogleMap>
  //   </div>
  // );
}

export default App;
