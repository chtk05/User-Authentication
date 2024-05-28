# User Authentication
with the idea of developing to Anime club blog

## Project Information
This project aims is to create user registration, login, logout functions and unit test for each functionalities.
The user authentication repository is the main folder with two sub-folder i.e client(frontend) and server(backend).
The <b>frontend</b> allows user to perfrom login, register and logout requests then send to  <b>backend</b> which is where the server provides api endpoints to perform user's request and response back to client side. In backend we utilise library like JWT for authentication and sign cookies also implemnt middleware to verify user token.


## Tech Stack

### Frontend
- React.js 
- TailwindCSS
- Vite

### Backend
- Node
- Express
- MongoDB

### Testing Tools
- React testing library and Jest for Frontend
- Jest and Supertest for Backend

## Container
We utilise DOCKER to be our container, we have implement one dockerfile each in frontend and backend, at the root directory is where docker-compose.yml is. The docker-compose.yml specified the docker version, service that it will be provided here is frontend and backend.
- frontend provide frontend services
- backend provide backend services along with MongoDB as a database

## Test Cases
### Backend 
- api endpoint should register a new user
- api endpoint should login user
- api should log out a user
### Frontend
- Name, email, password, quote and button field should be rendered
- Password should ahve minimum length of 6
- All input field should initialise empty
- Button should be disable when input field is empty

## Screenshot
<img width="1217" alt="image" src="https://github.com/chtk05/User-Authentication/assets/80698340/b7a18d24-ca9d-434b-8faa-743eafc0fdfa">
<img width="1217" alt="image" src="https://github.com/chtk05/User-Authentication/assets/80698340/6c015a2d-2257-4f40-99dc-862e9b009209">
<img width="1217" alt="image" src="https://github.com/chtk05/User-Authentication/assets/80698340/846c1df8-3782-445e-adad-9e8550e84525">
<img width="1217" alt="image" src="https://github.com/chtk05/User-Authentication/assets/80698340/b1ef8cb4-bfe2-4935-89a5-3f7dc140b58e">




