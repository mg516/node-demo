function start() {
    console.log("/start.");
    return "Hello Start";
}

function upload() {
    console.log("/upload.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;