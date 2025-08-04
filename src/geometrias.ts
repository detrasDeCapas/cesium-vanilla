import { Cartesian2, Cartesian3, Math as CesiumMath, Color, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, GeometryInstance, Material, Matrix4, PerInstanceColorAppearance, Primitive, Rectangle, RectangleGeometry, ScreenSpaceEventHandler, SphereGeometry } from 'cesium';
import {viewer} from './main'

// Create a point at the given longitude, latitude, and height.
const point = Cartesian3.fromDegrees(-122.4175, 37.655, 0);

// Add the point to the viewer.
viewer.entities.add({
  position: point,
  point: {
    pixelSize: 10,
    color: Color.RED
  }
});

//Rectangulo

const rectangle = {
  coordinates: Rectangle.fromDegrees(
    -122.5, 37.6,
    -122.4, 37.7
  ),
  material: Color.BLUE.withAlpha(0.5),
  height: 400, // Altura en metros sobre el nivel del mar
  vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
};

viewer.entities.add({
  name: 'Rectangle',
  rectangle: rectangle,

});

//Primitivas

const instance = new GeometryInstance({
  geometry: new RectangleGeometry({
    rectangle: Rectangle.fromDegrees( -122.5, 37.6, -122.4, 37.7),
    vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
    height: 600, // Altura en metros sobre el nivel del mar
  }),
})

viewer.scene.primitives.add(new Primitive({
  geometryInstances: instance,
  appearance: new EllipsoidSurfaceAppearance({
    material: Material.fromType('Color', {
      color: Color.GREEN.withAlpha(0.5)
    })
  })
}));

// agrupacion de primitivas

const segundaInstancia = new GeometryInstance({
  geometry: new SphereGeometry({
    radius: 100000, // Radio de la esfera en metros
    vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
  }),
  attributes: {
    color: ColorGeometryInstanceAttribute.fromColor(Color.YELLOW.withAlpha(0.5))
  },
  modelMatrix: Matrix4.fromTranslation(Cartesian3.fromDegrees(-122.45, 37.75, 0)),
})

const terceraInstancia = new GeometryInstance({
  geometry: new SphereGeometry({
    radius: 50000, // Radio de la esfera en metros
    vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
  }),
  attributes: {
    color: ColorGeometryInstanceAttribute.fromColor(Color.PINK.withAlpha(0.5))
  },
  modelMatrix: Matrix4.fromTranslation(Cartesian3.fromDegrees(-122.45, 37.65, 0))
})

viewer.scene.primitives.add(new Primitive({
  geometryInstances: [segundaInstancia, terceraInstancia],
  appearance: new PerInstanceColorAppearance(),
}));
