import {
  Viewer, Ion, Cartesian3, Terrain, Math as CesiumMath
} from 'cesium';

import './style.css';
import 'cesium/Build/Cesium/Widgets/widgets.css';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YWNmYTA5Ny01MTc0LTQzNzQtYjQ0My1hYjRiOGQzNzdjN2EiLCJpZCI6MTY1ODUxLCJpYXQiOjE2OTQ0NzgyODR9.1KqSQo7R4OO4zPMja7K751joAYNtrKP6KpTSYo3NdsA';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrain: Terrain.fromWorldTerrain(),
});    

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: CesiumMath.toRadians(0.0),
    pitch: CesiumMath.toRadians(-15.0),
  }
});