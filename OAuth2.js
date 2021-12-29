require([
    "esri/portal/Portal",
    "esri/identity/OAuthInfo",
    "esri/identity/IdentityManager",
    "esri/portal/PortalQueryParams"
    ],
    function(Portal, OAuthInfo, IdentityManager, PortalQueryParams){

        const oAuthInfo = new OAuthInfo({
            appId: "q3yu8yxxzdbg5Grz",  //app ID
            popup: false  //false causes redirect to Arcgis.com, then back to app
        });
        esriId.registerOAuthInfos([oAuthInfo]);

        //Check to see if user is logged in
        esriId.checkSignInStatus(info.portalUrl + "/sharing").then(() => {
            displayItems();
        }).catch(SignIn());

        //Retrieve user credentials
        esriId.getCredential(info.portalUrl + "/sharing");

        //Run this to destroy credentials (essentially sign out)
        //esriId.destroyCredentials();

        //Create portal
        function SignIn(){
            const portal = new Portal();
            portal.authMode = "immediate";  //signs user in when loaded??
            portal.load().then(() => {
                //Query portal for items to display
                const portalQueryParams = new PortalQueryParams({
                    query: "owner:" + portal.user.username,
                    sortField: "numViews",
                    sortOrder: "desc",
                    num: 100
                });
                portal.queryItems(portalQueryParams).then(createGallery);
            });
        }
    }
);