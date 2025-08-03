import { Cartesian3, Math as CesiumMath } from 'cesium';
import {viewer} from './main'

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: CesiumMath.toRadians(45.0), //giro en el eje de la altura
    pitch: CesiumMath.toRadians(-45.0), //inclinación hacia abajo maneja la oblicuidad vertical
    roll: CesiumMath.toRadians(45.0) //rotación sobre el eje de la vista maneja la oblicuidad lateral
  }
});