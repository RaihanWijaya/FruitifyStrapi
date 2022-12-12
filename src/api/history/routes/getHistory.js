module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/history/getHistory',
            handler: 'history.getHistory',
        }
    ]
}