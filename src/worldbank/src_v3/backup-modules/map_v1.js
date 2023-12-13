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




const geoserverEndpoint = 'http://localhost/geoserver/geonode/ows';
const geoserverUrl = 'http://localhost/geoserver/rest/workspaces/geonode/layers.json'
const osm = new LayerTile({
  title: 'OSM',
  type: 'base',
  visible: true,
  source: new OSM()
} );
  const map = new Map({
    target: 'map',
    
    layers: [osm],
    view: new View({
      projection:'EPSG:4326',
      center: [90, 24],
      zoom: 7.9,
    }),
  });
const getLayers = async () => {
  try {
    const response = await fetch(geoserverUrl);

    if (response.ok) {
      const responseJSON = await response.json();
      const mapLayers = [];

      responseJSON.layers.layer.map(async (layerInfo) => {
        try {
          const request = new Request(`${geoserverEndpoint}?service=WFS&version=2.0.0&request=GetFeature&typeName=geonode%3A${layerInfo.name}&outputFormat=application/json&srsname=EPSG:4326`, {
            method: 'GET',
            mode: 'cors',
          });

          const response1 = await fetch(request);

          if (response1.ok) {
            const responseJSON1 = await response1.json();

            const vectorLayer = new VectorLayer({
              source: new VectorSource({
                features: new GeoJSON().readFeatures(responseJSON1),
              }),
              
              name: 'ARIMA_Multi_Impact_Risque_actuel_A01',
            });

          

            mapLayers.push(vectorLayer);
          } else {
            throw new Error('GeoJSON request was not ok');
          }


         




        } catch (error) {
          console.error('There was a problem fetching GeoJSON data:', error);
        }
      });

  
      
     

      // Log mapLayers outside the loop
      map.addLayers(mapLayers)
      
      console.log(mapLayers);
      
      console.log('Success')
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
};

getLayers();
