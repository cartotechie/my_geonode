import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import Map from 'ol/Map';
import View from 'ol/View.js';
import VectorLayer from 'ol/layer/Vector';
import { OSM, Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';

import LayerSwitcher from 'ol-layerswitcher';
import LayerTile from 'ol/layer/Tile';

const defaultCenter = [ 92.08484286873286, 24.906870848845983];
const defaultZoom = 14;


// Function to create a Vector Layer from GeoJSON
const createVectorLayer = (geoJSON, title,style) => {
    return new VectorLayer({
      style:function (feature) {
        
        return style
      },
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geoJSON),
        
      }),
      
      title: title
    });
  };
  
  const initMap = () => {
    const osm = new LayerTile({
      title: 'OSM',
      type: 'base',
      visible: false,
      source: new OSM()
    });
  
    const map = new Map({
      target: 'map',
      layers: [osm],
      view: new View({
        projection: 'EPSG:4326',
        center: defaultCenter,
        zoom: defaultZoom,
        maxZoom:20
      
      }),
    });
  
    const layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'group',
      tipLabel: 'Layers',
      open: true,
    });
    map.addControl(layerSwitcher);
  
    return map;
  };

  function createSubVectorLayer(source, style, title, visible) {
    return new VectorLayer({
      source: source,
      style: style,
      title: title,
      visible: visible
    });
  }
  

  export {initMap,createVectorLayer,createSubVectorLayer}