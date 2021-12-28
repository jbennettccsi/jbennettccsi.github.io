require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layer/FeatureLayer"],
    function(esriConfig, Map, MapView, FeatureLayer) {

        esriConfig.apiKey = "AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH";

        const map = new Map({basemap: "arcgis-charted-territory"});

        const view = new MapView({
            map: map,
            center: [-118.805, 34.027],  //-87.747 41.963
            zoom: 13,
            container: "viewDiv"  //This is the div in the HTML doc that will show the map
        });

        //Points
        const trailheadsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
        });        
        map.add(trailheadsLayer); //command will add thing to map

        //Polylines
        const trailsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
        });        
        map.add(trailsLayer, 0);

        //Polygons
        const parksLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
        });        
        map.add(parksLayer, 0);
});

//AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH
