fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
        Authorization: 'susana20',
        'Content-Type': 'application/json'
    },
    body: '{"name":"Cafetera Espresso profesional 3 Pistones profesional PKF33","image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsnZIxx8l5NuBfYMUh1CESe2fwiF6E4EGHfyvYRqhlpGQqbyFFekToQdFA-V8vxi6TFeMAEUGvsiXuJ_8V8Iai8tMPs0uEevSB5ha2Vcr84aa3eKr1aXDPpg","category": "coffee-machine","description":"Cafetera industria expreso 3 pistones 540 cafes", "price":"3434,08"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('post created'))
    .catch(error => console.error(error))