const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiamVyZW15aHVic3kiLCJhIjoiY2p4azM2Z3dkMDI5bzN2cG9jaGV6aTZ6MiJ9.G9CTUSSJlk0GHA9I5Y4s1g&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('unable to find location. Try another search', undefined)
        }else{
            callback(undefined, {   
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}



module.exports = geocode