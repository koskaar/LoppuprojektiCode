const toiletUrl = "https://vessaapi.azurewebsites.net/api/toilets/"



export function AddNewToilet(toilet) {
    fetch(toiletUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'name': toilet.name, 'address': toilet.address, 'zip': toilet.zip,
            'city': toilet.city, 'inva': toilet.inva, 'information': toilet.information,
            'latitude': toilet.latitude, 'longitude': toilet.longitude, 'picture': toilet.picture, 
            'opening': toilet.picture, 'closing': toilet.closing, 'pricing':toilet.pricing
        })
    })
        .then(res => console.log(res))
}

export function GetAllToilets(callback) {
    fetch(toiletUrl)
        .then(result => {
            return result.json()
            }).then(myjson => {
                callback(myjson);
            });
} 
