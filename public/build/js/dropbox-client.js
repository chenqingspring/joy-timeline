var client = new Dropbox.Client({
    key: "41e7ki1qabbf2a7",
    secret: "s7mt52bbav64rwn",
    token: "ouIEkUpgbqAAAAAAAAASAel11n0kiwFIXmeO83AXOv-cCMkBWsIXV1NJBBmlXnAq"
});
// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
    console.log("authenticated")
}