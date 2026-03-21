self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("todo-cache-v2").then(function(cache) {
            return cache.addAll([
                "./index.html",
                "./bp192.png",
                "./bp512.png"
            ]);
        })
    );
});
