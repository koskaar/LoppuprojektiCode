const toiletsUrl = "https://vessaapi.azurewebsites.net/api/toilets/"
const usersUrl = "https://vessaapi.azurewebsites.net/api/users/"
const reviewsUrl = "https://vessaapi.azurewebsites.net/api/reviews/"
// Puuttuu vielä Viesti-functionit. Alhaalla esimerkki CALLBACKistä.

export function AddNewToilet(toilet) {
    fetch(toiletsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'name': toilet.name, 'address': toilet.address, 'zip': toilet.zip,
            'city': toilet.city, 'inva': toilet.inva, 'information': toilet.information,
            'latitude': toilet.latitude, 'longitude': toilet.longitude, 'picture': toilet.picture,
            'opening': toilet.picture, 'closing': toilet.closing, 'pricing': toilet.pricing
        })
    })
        .then(res => console.log(res))
}

export function GetAllToilets(callback) {
    fetch(toiletsUrl)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
}

export function GetOneToilets(toilet_id, callback) {
    fetch(toiletsUrl + toilet_id)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
}

export function DeleteToilet(toilet_id) {
    fetch(toiletsUrl + toilet_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

export function UpdateToilet(toilet) {
    fetch(toiletsUrl + toilet.toilet_id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'toilet_id': toilet.toilet_id, 'name': toilet.name, 'address': toilet.address, 'zip': toilet.zip,
            'city': toilet.city, 'inva': toilet.inva, 'information': toilet.information,
            'latitude': toilet.latitude, 'longitude': toilet.longitude, 'picture': toilet.picture,
            'opening': toilet.picture, 'closing': toilet.closing, 'pricing': toilet.pricing
        })
    })
        .then(res => console.log(res))
}

export function AddNewUser(user) {
    fetch(usersUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'firstname': user.firstname, 'lastname': user.lastname, 'email': user.email,
            'nickname': user.nickname, 'password': user.password, 'picture': user.picture
        })
    })
        .then(res => console.log(res))
}

export function GetAllUsers(callback) {
    fetch(usersUrl)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
}

export function GetOneUser(user_id, callback) {
    fetch(usersUrl + user_id)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
}

export function DeleteUser(user_id) {
    fetch(usersUrl + user_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

export function UpdateUser(user) {
    fetch(usersUrl + user.user_id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'user_id': user.user_id, 'firstname': user.firstname, 'lastname': user.lastname, 'email': user.email,
            'nickname': user.nickname, 'password': user.password, 'picture': user.picture
        })
    })
        .then(res => console.log(res))
}

export function AddNewReview(review) {
    fetch(reviewsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'user_id': review.user_id, 'toilet_id': review.toilet_id, 'rating': review.rating,
            'review_text': review.review_text
        })
    })
        .then(res => console.log(res))
}

export function GetAllReviews(callback) {
    fetch(reviewsUrl)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
} 

export function GetOneReview(review_id, callback) {
    fetch(reviewsUrl + review_id)
        .then(result => {
            return result.json()
        }).then(myjson => {
            callback(myjson);
        })
} 

export function DeleteReview(review_id) {
    fetch(reviewsUrl + review_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

export function UpdateReview(review) {
    fetch(reviewsUrl + review.review_id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'review_id': review.review_id, 'user_id': review.user_id, 'toilet_id': review.toilet_id, 
            'rating': review.rating, 'review_text': review.review_text
        })
    })
        .then(res => console.log(res))
}


// GetAllToilets((data) => {
//     let AllToilets = data.map(res => {
//       console.log(res);
//       return ({ latitude: res.latitude, longitude: res.longitude, name: res.name })
//     })
//     console.log(data)
//     console.log(AllToilets)
//   }