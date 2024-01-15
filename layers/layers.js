var wms_layers = [];

var lyr_PseudocolorSWIR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pseudo color SWIR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PseudocolorSWIR_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr_PseudocolorIR_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pseudo color IR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PseudocolorIR_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr_Naturalcolor_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Natural color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Naturalcolor_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr_Quartz1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Quartz 1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Quartz1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19834054.805933, 10855954.574289, 19857500.221452, 10884830.863622]
                            })
                        });
var lyr_Carbonate2_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carbonate 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Carbonate2_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19855524.875325, 10856042.244334, 19891477.674281, 10884978.454895]
                            })
                        });
var lyr_Carbonate1_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carbonate 1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Carbonate1_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19834054.805933, 10855954.574289, 19857500.221452, 10884830.863622]
                            })
                        });

lyr_PseudocolorSWIR_0.setVisible(true);lyr_PseudocolorIR_1.setVisible(true);lyr_Naturalcolor_2.setVisible(true);lyr_Quartz1_3.setVisible(true);lyr_Carbonate2_4.setVisible(true);lyr_Carbonate1_5.setVisible(true);
var layersList = [lyr_PseudocolorSWIR_0,lyr_PseudocolorIR_1,lyr_Naturalcolor_2,lyr_Quartz1_3,lyr_Carbonate2_4,lyr_Carbonate1_5];
