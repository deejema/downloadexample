Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("retrieveAllObjects", function(request, status) {
    var result     = [];
    var chunk_size = 1000;
    var processCallback = function(res) {
        result = result.concat(res);
        if (res.length === chunk_size) {
            process(res[res.length-1].id);
        } else {
            status.success(result);
        }
    };
    var process = function(skip) {
        var query = new Parse.Query(request.params.object_type);
        if (skip) {
            query.greaterThan("objectId", skip);
        }
        if (request.params.update_at) {
            query.greaterThan("updatedAt", request.params.update_at);
        }
        if (request.params.only_objectId) {
            query.select("objectId");
        }
        query.limit(chunk_size);
        query.ascending("objectId");
        query.find().then(function (res) {
            processCallback(res);
        }, function (error) {
            status.error("query unsuccessful, length of result " + result.length + ", error:" + error.code + " " + error.message);
        });
    };
    process(false);
});