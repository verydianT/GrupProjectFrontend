import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { Marker } from "react-map-gl";
import CardLocs from "../components/CardLoc";
import { Col } from "react-bootstrap";
import NaviBar from "../components/Navbar";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const MAPBOX_TOKEN = "pk.eyJ1IjoiZWxkb2RvNjQxIiwiYSI6ImNrdndna3hnaDN2ajgzMG8wbjh3NG44YzUifQ.vXDXCjgnSb--p576SCputQ";

export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude: -8.67356,
    longitude: 115.20362,
    zoom: 10,
  });
  const [poi, setPoi] = useState({});
  const [category, setCategory] = useState();
  const mapRef = useRef();

  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
  }, []);

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  useEffect(() => {
    getPlaces(viewport.longitude, viewport.latitude);
  }, []);

  const getPlaces = async (viewport, category) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?type=poi&proximity=${viewport.longitude},${viewport.latitude}&access_token=pk.eyJ1IjoiZGF2aWR3aW5hbGRhIiwiYSI6ImNraWg1dHhsZDEzMTgyd3F3YTBnN2J4NWoifQ.UxGrdErOGNdkBwUmIKOZbg`
    );
    const data = await response.json();
    setPoi(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    getPlaces(viewport, e.target.value);
    if (poi.features !== undefined) {
      poi.features.map((i) => {
        console.log(i);
        console.log(i.geometry.coordinates[0]);
        let a = i.geometry.coordinates;
        let objectCoordinates = Object.assign({}, a);
        console.log(objectCoordinates);
      });
    }
  };

  return (
    <div>
      <NaviBar/>
      <div style={{ height: "70vh", width: "100%" }}>
        <MapGL ref={mapRef} {...viewport} width="100%" height="100%" onViewportChange={handleViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v11">
          <Geocoder mapRef={mapRef} onViewportChange={handleGeocoderViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} position="top-left" />
          <form style={{ marginTop: "0.70em", marginLeft: "16em" }}>
            <select id="category" onChange={handleSubmit} style={{ width: "240px", height: "35px", border: "none", borderRadius: "5px", fontSize: "15px", paddingLeft: "1em" }}>
              <option value="">Select Category</option>
              <option value="beach">Beach</option>
              <option value="coffee">Coffee</option>
              <option value="spa">SPA</option>
            </select>
          </form>

          {poi.features !== undefined ? (
            poi.features.map((u) => {
              return (
                <Marker longitude={u.geometry.coordinates[0]} latitude={u.geometry.coordinates[1]}>
                  <svg
                    height={SIZE}
                    viewBox="0 0 24 24"
                    style={{
                      cursor: "pointer",
                      fill: "#d00",
                      stroke: "none",
                      transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                    }}
                  >
                    <path d={ICON} />
                  </svg>
                </Marker>
              );
            })
          ) : (
            <div></div>
          )}
        </MapGL>

        {category !== undefined ? (
          <Col
            className="text-center"
            style={{
              paddingTop: "5px",
              height: "2em",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: "#f3f5f6",
              letterSpacing: "0.3em",
            }}
          >
            {category}
          </Col>
        ) : (
          <div></div>
        )}

        {poi.features !== undefined ? (
          poi.features.map((u) => {
            return <CardLocs key={u.id} nameLoc={u.text} loc={u.place_name} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
