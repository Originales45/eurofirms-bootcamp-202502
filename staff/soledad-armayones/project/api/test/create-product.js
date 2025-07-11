fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-20',
        'Content-Type': 'application/json'
    },
    body: '{"image":"","description":"F3 ELE Futurmat", "categori": "food-echibitor Machine", "price":3782,90E"}'
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
    .then(() => console.log('product created'))
    .catch(error => console.error(error))