//import '.worldbank/static/worldbank/css/map.css';


import Map from 'ol/Map.js';
//import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import VectorLayer from 'ol/layer/Vector';
import { OSM, Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';

const geoserverUrl = 'http://localhost/geoserver/geonode/ows';
const url = 'http://localhost/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aadmin_boundaries_osm_refined&maxFeatures=50&outputFormat=application%2Fjson'
const layerName = 'admin_boundaries_osm_refined';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const wfsSource = new VectorSource({
  format: new GeoJSON(),
  url: function (extent) {
      return `${geoserverUrl}?service=WFS&version=2.0.0&request=GetFeature&typeName=${layerName}&outputFormat=application/json&srsname=EPSG:3857&bbox=${extent.join(',')},EPSG:3857`;
  },
  strategy: bboxStrategy,
});

const wfsLayer = new VectorLayer({
  source: wfsSource,
});

map.addLayer(wfsLayer);