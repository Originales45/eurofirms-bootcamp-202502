# Web page sales machinery of hosteleria

## This web page sales second hand machinery of hosterleria. 0.1

Loremm ..  All second machinery that needs for your business .
Refigeratos. Dishwasher. Eshibitors. Coffe grinders.
Whith 1 year warranty and local repair service.

![coffee maquinery](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3gwODcyeWgycnI3cXl1Z3g4ZHhvOGUwenB4d3IweWVqeXhsNnc1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFyDpRagf96Uz9rzO/giphy.gif)

## Funcional

### Use Cases

Cient (User)
- Search Machinery (v0.1)
- Buy Machinery (v0.1)
- Report fault warranty (v0.1)
- Make product consultations (v0.1)
- chat with cosmtuer (v0.1)
- Pay the order  (v0.1)
- Shipping form (v0.1)
- Register User
- Share product
- Report costumer (v0.1) 
- Block costumer (v0.1)
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
|- Register Product: Image, name, escription, category, price
|- Register User
|- Search (v0.1)
|- Home
|- WhatsApp QR contact
|- Descriptions products (category: coffe-machine, refrigerator, food-exhibitor)
|- Buy machinary (v0.1)
|- Chat & Repair Contatc (v0.1)

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
- category (string, required, enum: coffee-machine | refrigerator | food-exhibitors)
- name (string, required)
- image (image, required)
- description  (string, required)
- price (number, required)




Order (v0.1)
- id (UUID)
- name (string, required)
- email (string, required)
- adress1 (string, required)
- adress2 (string, required) (v0.1)
- phone (numbers, required)
- province (string, required) (v0.1)
- city (string, required) (v0.1)
- country (string, required) (v0.1)
- zipCode (string, required) (v0.1)
- date (date, required) (v0.1)
- payment (string, required) (v0.1)

### Tecnologies
- React
- React.icons
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
- ...





