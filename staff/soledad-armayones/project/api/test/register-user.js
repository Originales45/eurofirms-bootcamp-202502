fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Mar 30", "username":"Mar30", "password":"123123123", "address":"Colom50", "email": "mar30@gmail.com", "phone": "650505050"}'
})

    .catch(error => { throw new Error('connection error') })
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
    .then(() => console.log('user registered'))
    .catch(error => console.error(error))