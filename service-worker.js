caches.open("todo-cache-v2").then(cache => {
    return cache.addAll([
        "/",
        "/index.html",
        "/bp192.png",
        "/bp512.png"
    ]);
});
