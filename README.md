# Avaibook Frontend Test

Este repo contiene el código inicial para la prueba, así como la descripción de las tareas. La intención es comprobar como solventas el problema que te planteamos.

- En el repo encontrarás un fichero llamado db.js, con un array de 1000 productos. Está será la "base de datos" con la que trabajarás en la prueba. No necesitas usar ningún servicio de bases datos para la prueba.

- Usamos 3 categorías: <meat, greens, fish> en el fichero db.js, pero siéntete libre de permitir a los usuarios de tu app añadir más categorías si así lo consideras (no se valorará ni mejor ni peor).

## Tareas

1. Los usuarios de la app tienen que poder listar todos los productos, y además:

- Tienen que poder filtrar por categoría, precio máximo y precio mínimo.
- Se deben mostrar 24 productos por página.
- No usar librerías para la funcionalidad de paginar.

2. Los usuarios tienen que poder crear productos desde un formulario. El formulario se encontrará en otra ruta distinta a la de la lista de productos. Los productos creados se añadirán a la base de datos de db.js.

3. Si clickas en un producto de la lista, debes retornar los 6 productos con el precio más cercano al seleccionado en la misma categoría.

4. Tienes que crear una NavBar para navegar entre las diferentes páginas del sitio (listado y el formulario de creación de productos)

5. Dotar de estilos a la aplicación para que sea lo más usable posible.

## Opcional

- Mantener la selección en los filtros tras refrescar la página
- Habilitar una opción que permita limpiar los filtros al mismo tiempo

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
