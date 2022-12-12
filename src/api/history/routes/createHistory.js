module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'POST',
            path: '/history/createHistory',
            handler: 'history.createHistory',
        }
    ]
}