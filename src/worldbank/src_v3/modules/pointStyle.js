
import { Fill, Stroke, Style, Text, Circle, RegularShape } from "ol/style";
   
   const defaultPointStyle = new Style({
     image: new Circle({
       radius: 6,
       fill: new Fill({
         color: 'red',
       }),
       stroke: new Stroke({
         color: 'white',
         width: 2,
       }),
     }),
   });
   

   const squarePointStyle = new Style({
     image: new RegularShape({
       fill: new Fill({
         color: 'blue',
       }),
       stroke: new Stroke({
         color: 'white',
         width: 2,
       }),
       points: 4,
       radius: 8,
       angle: Math.PI / 4,
     }),
   });
   


   const crossPointStyle = new Style({
     image: new RegularShape({
       fill: new Fill({
         color: 'green',
       }),
       stroke: new Stroke({
         color: 'white',
         width: 2,
       }),
       points: 4,
       radius: 8,
       radius2: 0,
       angle: 0,
     }),
   });
   

   javascript
   const starPointStyle = new Style({
     image: new RegularShape({
       fill: new Fill({
         color: 'orange',
       }),
       stroke: new Stroke({
         color: 'white',
         width: 2,
       }),
       points: 5,
       radius: 8,
       radius2: 4,
       angle: 0,
     }),
   });
   


   const customSVGPointStyle = new Style({
     image: new Icon({
       src: 'path/to/custom-icon.svg',
       anchor: [0.5, 1],
       scale: 0.5,
     }),
   });
   


   javascript
   const textPointStyle = new Style({
     text: new Text({
       text: 'A',
       font: '12px Calibri,sans-serif',
       fill: new Fill({
         color: 'black',
       }),
       stroke: new Stroke({
         color: 'white',
         width: 2,
       }),
     }),
   });
   
