fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
        Authorization: 'susana20',
        'Content-Type': 'application/json'
    },
    body: '{"name":"Rocket Boxer Timer Maquina De Espresso","image":"https://www.espressocoffeeshop.es/497902-large_default/rocket-boxer-timer-espresso-machine.jpg","category": "coffee-machine","description":"Máquina de espresso Rocket Boxer Timer, diseñada para entornos comerciales de alto volumen. Ofrece control preciso de la temperatura y la presión para espressos perfectos.", "price":"4560"}'
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