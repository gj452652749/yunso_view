require.config({
    baseUrl: "/js",
    shim: {
        'name': {
            deps: ['dep'],
            exports: 'exports'
        }
    },
    paths: {
        app:'../app'
    }
});