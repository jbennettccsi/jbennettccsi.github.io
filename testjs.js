require([
      "esri/portal/Portal",
      "esri/identity/OAuthInfo",
      "esri/identity/IdentityManager"
    ], function (Portal, OAuthInfo, esriId) {

      const info = new OAuthInfo({
        appId: "q3yu8yxxzdbg5Grz",
        popup: false // the default
      });
      esriId.registerOAuthInfos([info]);

      esriId
        .checkSignInStatus(info.portalUrl + "/sharing")
        .then(() => {
          handleSignedIn();
        })

        .catch(() => {
          handleSignedOut();

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