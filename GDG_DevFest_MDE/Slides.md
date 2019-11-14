# Textos para crear los slides

- Incluir el contador de diapositivas
- Incluir cuenta de twitter transversal a la presentación
- Resaltar algunos textos como pistas para las preguntas del evento
- Mostrar la agenda cada cierto tiempo

## Slide 1

### 11:40 AM / Automatizar tareas usando Google Scripting
#### Andrés Bedoya Tobón

- Nombre de la charla, autor y redes
- Definir el nivel de dificultad de la charla (novatos/avanzados)

## Slide 2

### Agenda

- ¿Qué es programación?
- Automatizar tareas / Referente caso github
- ¿Qué es Google Apps Script?
- ¿Cuando usar G.A.S?
- ¿cuando no usar G.A.S?
- Para tener en cuenta (Precaución con los datos)
- ¿Cómo funciona? / Diagrama
    - Requisitos mínimos
    - GAS cheat sheet
    - Creación de scripts
    - Ejecución
    - Debug
    - Ejecución según eventos / Tiempo / Fecha
- Resumen de la charla
- Ejemplos
    - Silla App (Aplicación para asignar sillas aleatorias en un salón)
    - Formulario para rifa en la charla (Se deja en el canal de youtube)
- Agradecimiento e info de contacto

## Slide 3

- ¿Qué es programación?

Diagrama de flujo con las principales tareas para realizar un programa.

## Slide 4

- Automatizar tareas

## Slide 5

- ¿Qué es Google Apps Script?

> Es una plataforma de desarrollo rápido, que hace fácil y rápido crear aplicaciones de negocio que se puedan integrar con G Suite.

> Se basa en Javascript 1.6 con algunas partes de 1.7 y 1.8 y proporciona un subconjunto de la API ECMAScript 5, sin embargo en vez de ejecutarse en el cliente, se ejecuta en Google Cloud.​

No hay manipulación del DOM, lo único que se hace en el browser es la escritura del código.

## Slide 6

### ¿Cuando usar G.A.S?

- Para estudiar y aprender a programar en javascript

- Cuando el código NO es muy extenso

- Para crear una funcionalidad personalizada en alguna de las aplicaciones soportadas de G Suite

- Para validar una funcionalidad temporal, de manera rápida

- Para tener una solución en la nube con poca configuración

- Para combinar habilidades de programación con una plataforma potente como Google

## Slide 7

### ¿Cuando NO usar G.A.S?

- Para solucionar una necesidad de un cliente que requiera ser robusta, escalable, administrable, mantenible, entre otros.

- Cuando se requiera trabajo sincronizado y dividido, si bien drive es para trabajar en equipo. Distribuir tareas entre varias personas requiere de la creacion de un estandar extra, que es innecesario.

- No es posible integración con frameworks, librerías o servicios externos

- Aunque es posible conectarse a una base de datos usando [JDBC Service](https://developers.google.com/apps-script/guides/jdbc) Si tu programa requiere de esto, posiblemente es mejor migrar a otra solución. Ya que excel puede ser usado como base de datos.

## Slide 8

### Para tener en cuenta

Google drive dispone de herramientas de control de cambios, historial de versiones, trabajo offline y otras características para garantizr la integridad de los datos. Sin embargo antes de realizar scripts o automatizar un proceso sobre información valiosa, se recomienda trabajar sobre datos de prueba, en un archivo que se pueda "dañar"

Por lo general los scripts, no piden confirmación para actualizar campos, borrar datos o crear nuevos registros, estos procedimientos se realizan sin preguntarle al usuario, por tanto en este proceso se puede llevar al archivo a un estado corrupto.

## Slide 9

### ¿Cómo funciona?

- Prerequisitos
    - Cuenta de google
    - Acceso a google drive
- Se recomienda tener, conocimientos en programación
    - [Código Spaghetti](img/r_1283653_RMBmE.jpg)
    - [Google apps script cheatsheet](https://github.com/jychri/google-apps-script-cheat-sheet)
    - [Javascript cheatsheet 1/2](img/javascript-cheatsheet-page1-hq-codemio.jpg)
    - [Javascript cheatsheet 2/2](img/javascript-cheatsheet-page2-hq-codemio.jpg)
- Empezando
    - Crear una nueva hoja de cálculo de google
    - Ingresar al editor de secuencia de comandos (Herramientas/Editor de secuencia de comandos)
    - Escribir funcion inicial
    - Guardar el proyecto con un nombre apropiado
    - Seleccionar la función a ejecutar y presionar el botón play
    - Asignar permisos de ejecución si se presenta cuadro de dialogo

## Slide 10

#### Resumen

- ¿Qué es programación?
- ¿Qué es automatizar un proceso?
- ¿Qué es Google Apps Sript?
- Pros / contras de G.A.S
- ¿Cómo funciona?

## Slide 11

### Ejemplo - Silla APP

- Problema: Los estudiantes universitarios, siempre se sientan en los mismos puestos, esto hace que no conozcan nuevos amigos y se presenten
conflictos si otras personas usan su espacio.

- Pasos para solucionar el problema:    
    - Tener una lista de los estudiantes de clase
    - Desordenar la lista
    - Asignar una silla del salón según el nuevo orden
    - Diagramar los resultados

- Para validar la solución gráfica se crea una tabla en la hoja de cálculo que simule los puestos del salón, el tablero y a cada estudiante por el nombre

- Finalmente se traduce a código la solución

## Slide 12

### Código

Variable Global:

    - var estudiantes = ["Juan","Esteban","William","David","Ana","Carmen"];

Lista de funciones
    -  shuffle(array): Desordena un arreglo *       
    -  invertColor(hex,bg), padZero(str, len): Crea un color que contraste con un fondo *   
    -  getRandomColor(): Calcula un color aleatorio *   
    -  desordenador(): Interactua con la hoja de cálculo  
 
*: Funciones tomadas de stack over flow y otros sitios

## Enlaces de apoyo

- [Apps Script Dashboard](https://script.google.com/)

