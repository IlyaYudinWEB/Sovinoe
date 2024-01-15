var wms_layers = [];

var lyr__0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Коротковолновая инфракрасная съёмка",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr__1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Псевдо цвета",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr__2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Естественные цвета",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19833425.752589, 10852139.806594, 19892182.061129, 10895072.952053]
                            })
                        });
var lyr__3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Кварцевая порода перспективный район",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19834054.805933, 10855954.574289, 19857500.221452, 10884830.863622]
                            })
                        });
var lyr__4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Карбонатная порода район добычи",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19855524.875325, 10856042.244334, 19891477.674281, 10884978.454895]
                            })
                        });
var lyr__5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Карбонатная порода перспективный район",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19834054.805933, 10855954.574289, 19857500.221452, 10884830.863622]
                            })
                        });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5];
