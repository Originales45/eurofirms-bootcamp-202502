# SWeb page sales machinery of hosteleria

## This web page sales second hand machinery of hosterleria. 

Loremm ..  All second machinery that needs for your business .
Refigeratos. Dishwasher. Eshibitors. Coffe grinders.
Whith 1 year warranty and local repair service.

![cofee maquinery](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3gwODcyeWgycnI3cXl1Z3g4ZHhvOGUwenB4d3IweWVqeXhsNnc1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFyDpRagf96Uz9rzO/giphy.gif)

## Funcional

### Use Cases

Cient (User)
- Search Machinery
- Buy Machinery
- Report fault warranty
- Make product consultations
- chat with cosmtuer
- Pay the order
- Shipping form
- Register User
- Share product
- Report costumer
- Block costumer
- Request monitoring (v1.0)

Admin (User) [v0.1]
- View report
- Chat with costumer
- Prepare order 
- Block costumer
- Request monitoring 

### UIUX

[Figma](http://www.fgma.com)

## Technical

### Arhitecture

[Web page] -> [AP] -> [DB]
 
Web page
- Components
- Logic
- Data

Api
- Routes
- Logic
- Data


## UI components

```

Web Page
|- tittle
|- Register User
|- Pay
|- Products
|- Descriptions products
|- Buy car
|- Company data

...
```

### Data Model
User
- Id User(UUID)
- name (string, required)
- emil (string, required)
- username (string, required)
- password (string, required)

Order
- Id User(UUID)
- name (string, required)
- emil (string, required)
- direccion adress 1 (string, required)
- direccion adress 1 (string, required)
- province (string, required)
- city (string, required)
- country (string, required)
- zip code (string, required)
- Order (datae, requited)
- Pay order (string, required)

Chat [v0.1]
- id (UUID)
- author (Coustomer.id, required)
- text (string, required)
- date (date, required)

### Tecnologies
- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
- ...





