  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

  ], function(esriConfig,Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH";

  const map = new Map({
    basemap: "arcgis-imagery"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-87.747286,41.963653],
    zoom: 13
  });

//Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
  });

  map.add(trailheadsLayer);

//Trails feature layer (lines)
  const trailsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
  });

  map.add(trailsLayer, 0);

// Parks and open spaces (polygons)
  const parksLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
  });

  map.add(parksLayer, 0);

  });