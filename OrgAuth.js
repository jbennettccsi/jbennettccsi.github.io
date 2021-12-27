  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

  ], function(esriConfig,Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "q3yu8yxxzdbg5Grz";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-87.747286,41.963653],
    zoom: 13
  });

//Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services6.arcgis.com/uUNS2ciCcjNBnb3f/arcgis/rest/services/NED_Small_Cell/FeatureServer/0"
  });

  map.add(trailheadsLayer);

//Trails feature layer (lines)
  const trailsLayer = new FeatureLayer({
    url: "https://services6.arcgis.com/uUNS2ciCcjNBnb3f/arcgis/rest/services/NED_Fiber_Routes/FeatureServer/0"
  });

  map.add(trailsLayer, 0);

// Parks and open spaces (polygons)
  const parksLayer = new FeatureLayer({
    url: "https://services6.arcgis.com/uUNS2ciCcjNBnb3f/arcgis/rest/services/Area_Notes/FeatureServer/0"
  });

  map.add(parksLayer, 0);

  });