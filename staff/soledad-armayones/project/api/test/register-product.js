fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Jordi Lopez", "username":"Jlopez1975","password":"123123123","image":"https://futurbar.com/wp-content/uploads/2014/12/6726-Cafetera-Automatica-de-3-Grupos-F3-Futurmat.jpg","text":" F3 ELE Futurmatcafetera 3 grupos","price":"3282,90E"}'
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
    .then(() => console.log('product registered'))
    .catch(error => console.error(error))