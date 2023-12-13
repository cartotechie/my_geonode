
            // info box
            import { Fill, Stroke, Style, Text, Circle, RegularShape } from "ol/style";
           

            function handleMapInfoBoxClick(event, map) {
                var coordinate = event.coordinate;
            
                // Get features at the clicked pixel
                var features = map.getFeaturesAtPixel(event.pixel);
            
                if (features.length > 0) {
                    // Open the info box and display information for the first feature
                    var firstFeature = features[0];
                    var properties = firstFeature.getProperties();
            
                    // Keep only specific properties
                    properties = {
                        'class': properties['class'],
                        'class_1_13': properties['class_1_13'],
                        'class_1_14': properties['class_1_14'],
                        'class_1_15': properties['class_1_15'],
                        'class_12': properties['class_12'],
                        'div_name': properties['div_name'],
                        'dist_name': properties['dist_name'],
                        'name_en': properties['name_en'],
                    };
            
                    // Customize this part based on your feature properties
                    var infoContent = '<strong>Feature Info:</strong><br>';
                    for (var key in properties) {
                        if (properties.hasOwnProperty(key)) {
                            infoContent += key + ': ' + properties[key] + '<br>';
                        }
                    }
            
                    // Open the info box and display information
                    var infoBox = document.getElementById('info-box');
                    infoBox.innerHTML = infoContent;
            
                    // Position the info box just below the selected point
                    infoBox.style.left = event.pixel[0] + 'px';
                    infoBox.style.top = event.pixel[1] + 10 + 'px'; // Add some margin below the point
                    infoBox.style.display = 'block';
            
                    // Highlight the selected point
                    highlightPoint(firstFeature, 2000);
                } else {
                    // If no feature is clicked, close the info box
                    var infoBox = document.getElementById('info-box');
                    infoBox.style.display = 'none';
                }
            }
            

            function highlightPoint(feature) {
                // You can customize the highlight style based on your requirements
                var highlightStyle = new Style({
                    image: new Circle({
                        radius: 12,
                        fill: new Fill({
                            color: 'yellow',
                        }),
                        stroke: new Stroke({
                            color: 'red',
                            width: 2,
                        }),
                    }),
                });

                // Apply the highlight style to the selected feature
                feature.setStyle(highlightStyle);


                // Reset the style after the specified duration
                setTimeout(function() {
                    feature.setStyle(null); // Reset to the default style
                }, 2000);
            }


            export { handleMapInfoBoxClick,highlightPoint}