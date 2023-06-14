import React, { useMemo, useState } from "react";
// import "./App.css";

import Navbar from "./Navbar";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  LoadScript,
} from "@react-google-maps/api";
import "./styles.css";
import Login from "./pages/Login";
function App() {
  console.log(window.location);
  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 33.703334, lng: 73.052352 },
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: 33.633713, lng: 73.078925 },
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: 33.628102, lng: 73.070884 },
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 33.634219, lng: 73.059209 },
    },
  ];
  // const [markersLocation, setMarkerLocation] = useState(markers);
  // console.log("markersLocation", markersLocation);
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
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 33.649149,
    lng: 73.083322,
  };
  {
    /* {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null} */
  }
  {
    /* {markers.map(({ id, name, position }) => (
            
            <Marker
              key={id}
              position={position}
              // onClick={() => handleActiveMarker(id)}
            >
              
            </Marker>
          ))} */
  }
  // return <Login />;
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // return (
  //   <LoadScript googleMapsApiKey="AIzaSyAkw4RPmwaUBwuT-AWidjDCeaDDaOAnEbw">
  //     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
  //       <>
  //         {markers.map(({ id, position }) => (
  //           <Marker position={position} />
  //         ))}
  //       </>
  //     </GoogleMap>
  //   </LoadScript>
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
}

export default App;
