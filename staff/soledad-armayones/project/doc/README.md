# Web page sales machinery of hosteleria

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

[Figma](https://www.figma.com/design/2XEbOJIh9e41BfEYDsahEl/Untitled?node-id=0-1&p=f&t=c9eJuFd2TJJg9BKo-0)

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
|- Logo
|- Image coffe machine 
|- Register User
|- Search
|- Home
|- Descriptions products
|- Buy machinary
|- Chat & Repair Contatc

...
```

### Data Model
User
- id (UUID)
- name (string, required)
- email (string, required)
- username (string, required)
- password (string, required)

Product
- id (UUID)
- name (string, required)
- image (image, required)
- description  (string, required)
- price (number, required)
- category (string, required, enum: coffee-machine | refrigerator | food-exhibitors)



Order (v0.1)
- id (UUID)
- name (string, required)
- email (string, required)
- adress1 (string, required)
- adress2 (string, required)
- phone (numbers, required)
- province (string, required)
- city (string, required)
- country (string, required)
- zipCode (string, required)
- date (date, required)
- payment (string, required)

### Tecnologies
- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
- ...





