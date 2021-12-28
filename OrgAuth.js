require(["esri/config","esri/Map","esri/views/MapView"], function(esriConfig,Map,MapView) {

    esriConfig.apiKey = "AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH";

    const map = new Map({basemap: "arcgis-charted-territory"});

    const view = new MapView({
        map: map,
        center: [-118.805, 34.027],  //-87.747 41.963
        zoom: 13,
        container: "viewDiv"  //This is the div in the HTML doc that will show the map
    });
});

//AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH