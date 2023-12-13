//import '.worldbank/static/worldbank/css/map.css';
import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import Map from 'ol/Map';
import View from 'ol/View.js';
import VectorLayer from 'ol/layer/Vector';
import { OSM, Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import LayerGroup from 'ol/layer/Group';
import LayerSwitcher from 'ol-layerswitcher';
import LayerTile from 'ol/layer/Tile';




const geoUrl = 'http://localhost/geoserver/geonode/ows';
const url = 'http://localhost/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aadmin_boundaries_osm_refined&maxFeatures=50&outputFormat=application%2Fjson'
const layerName = 'admin_boundaries_osm_refined';


const geoserverUrl = 'http://localhost/geoserver/rest/workspaces/geonode/layers.json'

fetch(geoserverUrl)
.then(response =>response.json())
.then(data =>{


  const createVectorSource = (layerName) => {
    return new VectorSource({
      format: new GeoJSON(),
      url: function (extent) {
        return `${geoUrl}?service=WFS&version=2.0.0&request=GetFeature&typeName=${layerName}&outputFormat=application/json&srsname=EPSG:4326&bbox=${extent.join(',')},EPSG:4326`;
      },
      strategy: bboxStrategy,
    });
  };


  const glayers = data.layers.layer.map(layerInfo => {
    console.log(layerInfo);
    const layer = new VectorLayer({
      visible: true,
      title: layerInfo.name,
      source: createVectorSource(layerInfo.name),
    });
    return layer;
  });

  const overlays = new LayerGroup({
    title: 'Overlays',
    layers: glayers,
  });
  
  const points = new LayerGroup({
    title: 'Points',
    layers: [glayers[1]],
  });
  
  const lines = new LayerGroup({
    title: 'Lines',
    layers: [glayers[4]],
  });
  
  const areas = new LayerGroup({
    title: 'Areas',
    visible: false,
    layers: [glayers[0]],
  });
  

    const osm = new LayerTile({
      title: 'OSM',
      type: 'base',
      visible: false,
      source: new OSM()
    } );
    
    const watercolor = new LayerTile({
      title: 'None',
      type: 'base',
      visible: false,
  
    } );
    
    const baseMaps = new LayerGroup({
      title: 'Base maps',
      layers: [ watercolor,osm]
    } );

    const map = new Map({
      target: 'map',
      
      layers: [baseMaps,areas,lines,points],
      view: new View({
        projection:'EPSG:4326',
        center: [90, 24],
        zoom: 7.9,
      }),
    });
    





const layerSwitcher = new LayerSwitcher({
 
  reverse: true,
  groupSelectStyle: 'group'
});
map.addControl(layerSwitcher);


})

