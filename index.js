var app = require('app'),
    BrowserWindow = require('browser-window'),
    menubar = require('menubar'),
    mainWindow,
    mb

/*mb = menubar({
    preloadWindow:true
})
mb.on('ready', function () {
    console.log('ready')

    mb.on('after-create-window', function () {
        mb.window.loadUrl('file://' + __dirname + "/index.html")
        //mb.window.openDevTools()
    })

})*/

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width:800,
        height:600
    })

    mainWindow.loadUrl('file://' + __dirname + "/index.html")

     mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow  = null
    })

})
