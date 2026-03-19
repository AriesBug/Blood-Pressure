self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("todo-cache").then(function(cache) {
            return cache.addAll([
                "/index.html",
                "/BP192.png",
                "/bp512.png"
            ]);
        })
    );
});
