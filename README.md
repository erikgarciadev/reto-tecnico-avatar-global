# Reto técnico Avatar Global

Proyecto realizado principalmente con las tecnologias React , Vite y Typescript.

## Estructura

```
root
|
│   README.md    
│   App.tsx  
│   index.css   
│   main.tsx    
│   .gitignore

└───src
│   │
│   └───components (En esta carpeta se encuentra los componentes que pueden ser utilizados en el proyecto)
│   │    
│   └───interfaces  (Interfaces para el tipado de los datos)
│   │    
│   └───layouts (Layouts para el proyecto, para este proyecto solo se tiene uno que contiene el Header, y tambien se valida si esta cargando o hay un error)
│   │    
│   └───pages  (Paginas que contiene el proyecto, este proyecto solo contiente 3 : Lista de Peliculas, Lista de Personajes y Detalle del Personaje)
│   │    
│   └───routes  (Carpetas con las routes, que podria ser publicas o privadas)
│   │    
│   └───services  (Servicios utilizados para consumir API, en este caso solo se tiene un servicio)
│   │    
│   └───utils  (En este carpeta puede ir funciones, constantes, data que pueden ser necesarios en toda el proyecto)

```



## Librerias usadas

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

  Se utiliza para realizar el desplazamiento entre páginas

- autoprefixer
- postcss
- tailwindcss 

  Se implemento [tailwindcss](https://tailwindcss.com/) para agilizar el diseño en los componentes y páginas

## Tareas realizadas

- [X] Realizar componentes
  - [x] Header
  - [X] MovieCard
  - [X] CharacterCard
  - [X] FullCharacterCard
  - [X] BadgeRole
  - [X] ButtonBack
  - [X] Loader
  - [X] Error
- [X] Diseñar las vistas
  - [X] Vista Peliculas
  - [X] Vista Personajes
  - [X] Vista Detaille Personaje

## Levantamiento del proyecto

- Ejecutar en su consola el siguiente comando:

```
npm install
```

- Después ejecutar el siguiente comando en consola :

```
npm run dev
```

- En su consola le mostrar el url para poder ver el proyecto levantado, por defecto sería:
  http://localhost:5173/
