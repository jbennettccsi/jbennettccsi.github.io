require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/portal/Portal",
    "esri/identity/OAuthInfo",
    "esri/identity/IdentityManager"

  ], function(esriConfig,Map, MapView, FeatureLayer, Portal, OAuthInfo, esriId) {

  esriConfig.apiKey = "AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",  //This is the DIV in HTML that displays map
    map: map,
    center: [-118.80543,34.02700],  //-87.747 41.963
    zoom: 13
  });

    //Points
  const trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
  });
  map.add(trailheadsLayer);

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

  //Start Authentication stuff
  const info = new OAuthInfo({
      appId: "q3yu8yxxzdbg5Grz",
      popup: false  //What does this do?
  });
  esriId.registerOAuthInfos([info]);

  esriId.checkSignInStatus(info.portalUrl + "/sharing").then(() => {
    handleSignedIn();
  })

  .catch(() => {
      handleSignedOut
  });

  document.getElementById("sign-in").addEventListener("click", function () {
    esriId.getCredential(info.portalUrl + "/sharing");
  });

  document.getElementById("sign-out").addEventListener("click", function () {
    esriId.destroyCredentials();
    window.location.reload();
  });

  function handleSignedIn() {
    const portal = new Portal();
    portal.load().then(() => {
      const results = { name: portal.user.fullName, username: portal.user.username };
      document.getElementById("results").innerText = JSON.stringify(results, null, 2);
    });
  }

  function handleSignedOut() {
    document.getElementById("results").innerText = 'Signed Out'
  }

});

//AAPKcb4e9f06e3e14bc087a75d0cd0e90ed8E9Fp-hjVMRneNabPlLRw_NvneSA8LuafesQ25Rk5zTb2tQFjJVgPPH7bhAP3eltH
