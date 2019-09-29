module.exports = {
    devServer:{
        proxy:{
            '/test':{
                target:'http://localhost:5000',
                ws:true,
                changeOrigin:true
            },
            '/phone': {
                target: 'http://localhost:5000/',
                ws: true,
                changeOrigin: true
            },
            '/phreg':{
                target: 'http://localhost:5000/',
                ws: true,
                changeOrigin: true
            }
        }
    },
    lintOnSave:false
}
