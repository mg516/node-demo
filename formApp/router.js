function route(handle,pathname) {
    console.log("路由到：" + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("未知路由：" + pathname);
        return "404 Not found";
    }
}

exports.route = route;