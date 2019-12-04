## ABC Tipográfico

### Agenda

1. ¿Qué es?  
2. Clasificación de la tipografía  
3. Propiedades de edición (Curvas, svg, otf...)    
4. ¿Cómo escoger una tipografía? - Contar una historia    
5. ¿Funciona en la web?  
6. Tipografía y la web  
7. Reglas diagramación - Algunas reglas al maquetar 
8. Resumen  
9. Digbags ASCII Art  
10. Encontrar tipografías  
11. Buscar a partir de una muestra  
12. En uso 
13. Tipografía experimental
14. Conclusiones

## Slide 1

### ¿Qué es Tipografía?

Tarea u oficio e industria que se ocupa de la elección y el uso de tipos, para desarrollar una labor de impresión, que hace referencia a: letras, números y símbolos pertenecientes a un contenido impreso.

## Slide 2

### Clasificación de la tipografía

Las categorías prinicpales son:

- Palo seco (Sanserif)  
- Con remate (Serif)
- Manuscrita (Script)  
- Gráfica (Decorativa)  

> Every font has a distinct personality that is influencing how we interpret the words they are expressing, whether you are aware of it or not

> Getting the font wrong on your marketing materials, including your website, can be like walking into the meeting in the wrong outfit

![alt text](https://tiposformales.files.wordpress.com/2010/09/040_cuadro_clasificacion.jpg "Tabla con clasificación de tipografías")
[Clasificación tipográfica](https://tiposformales.com/2010/09/04/clasificacion-tipografica/)

## Slide 3

### Propiedades de edición  

En una pantalla, lo ideal es mantener las propiedades de interacción con el texto, la selección, la búsqueda y el cambio de propiedades gráficas. Se debe evitar convertir el texto a curvas, crear imágenes para representar el texto, crear un svg con el texto.

## Slide 4 y 5

### ¿Cómo escoger una tipografía?

"Abre los ojos y escucha" - Jan White

- Orgánico vs inorgánico (Humano - robot)
- Duro o blando (Feliz, tristre)
- ¿Quién esta hablando a quién?
- ¿Donde o cuando?(Lugar - tiempo)
- ¿Cuál es la actitud? (Es como lengu aje corporal)

Familia tipografíca

## Slide 6

### Funciona en la web

Transformar la fuente no es lo único que se debe tener en cuenta para que el texto funcione correctamente. Acá el criterio del ojo del maquetador es clave para validar atributos de calidad como el render del texto. 

Tener presente:
- Usar tamaños de fuente par  
- En lo posible usar fuentes palo seco  
- Realizar pruebas con html y css, no confiarse del render de programas de diseño  

Estar pendiente del  antialiasing: Concretamente, este efecto busca eliminar, o al menos difuminar, lo máximo posible los «dientes de sierra» que suelen aparecer en las texturas cuando los diferentes pixeles de las imágenes son demasiado grandes o no terminan de procesarse correctamente.

[Transfonter](https://transfonter.org/)

## Slide 7

### ¿Funciona en la web?

Optimizar el tiempo de carga de los archivos que definen la fuente es clave para una correcta visualización desde el momento cero de carga. Se recomienda usar una tipografía base por defecto que tenga una alta probabilidad de encontrarse de manera nativa, para texto corrido. Usar fuentes adaptadas, en destacados y títulos. Revisar el formato de conversión, cada vez se requieren menos archivos extra. Los navegadores modernos tienen suficiente con .woff.

> Use fonts designed for a screen. So called web fonts were designed with the screen in mind and its low-resolution pixel grid. The list includes Arial, Courier New, Georgia, Times New Roman and Verdana. While these fonts may look like over-exploited cliché and you may prefer Helvetica over Arial (like me), they’re also the simplest way to achieve legibility for the widest audience. The old rule still holds: when in doubt, use Verdana.

[Font Format](https://smad.jmu.edu/shen/webtype/format.html#Visual)  
[Can I use](https://caniuse.com/#feat=woff)  
[Typography And Cross Browser Compatibility](https://blog.prototypr.io/typography-and-cross-browser-compatibility-fc1fa3b8fa9a)  
[Font Smoothing Explained](https://szafranek.net/blog/2009/02/22/font-smoothing-explained/)   
[css-antialias](https://devhints.io/css-antialias)  
[Typographic Anti-Aliasing](https://www.smashingmagazine.com/2009/11/the-ails-of-typographic-anti-aliasing/)  

## Slide 8  

### Tipografía y la web  

#### Traducción y actualización de algunas conclusiones  

- Aceptar la realidad: Un sitio web se verá muy diferente a través de diferentes ambientes.

- Asuma lo peor: Cuando diseñe en photoshop, pruebe como se ve el diseño sin propiedades de optimización de visualización o ahorro de detalles. Lo mejor es hacer pruebas en pantalla directamente.

- Use fuentes diseñadas para pantalla: Llamadas web fonts, estas son diseñadas pensadas para la pantalla pensadas en displays de pixeles de baja resolución. La lista incluye Arial, Courir New, Times New Roman y Verdana. La vieja regla todavía se mantiene: Cuando dude use verdana.

- Cuidado con fuentes grandes: Fuentes grandes son sensibles a pixelarse cuando las propiedades de suavizado estan desactivadas. Adicionalmente cuando las fuentes son más grandes, se vuelven más evidentes los detalles de la tipografía.

- Prueba: Asegurate de que la pagina es legible. A traves de diferentes sistemas operativos y dispositivos. Lo recomendable es probar en el dispositivo físico, nos e recomienda usar emuladores.

- Si todo falla, use JS Sniffers: Hay un método para detectar con Javascript si el navegador esta usando algún tipo de suavizado de fuente. En este caso se puede servir diferentes tipos de fuente dependiendo de las configuraciones del usuario.

- Ya estamos en el futuro: Las pantallas tienen mejor resolución para visualizar las tipografías de una forma legible, sin necesidad de usar trucos. Aunque esto es cierto, siempre se debe pensar en diseñar en el peor caso, donde el usuario disponga de tecnología limitada, ya que esto permite que la carga sea más rápida y la interacción más simple. Incluso se beneficia la accesibilidad de las piezas ya que se incluye texto que es facil de leer por los asistentes.

#### What, then, can a designer do to ensure maximum legibility and a good look of a type?  

> Accept the reality. Right now there’s no way to tell what settings your users have. Most likely, they have subpixel rendering on Mac OS X, no antialiasing at all on Windows XP with IE6 or Firefox, and ClearType in IE7, IE8 or Vista, but you can’t be 100% sure. Needless to say, a website will look very different across all these environments.

> Assume the worst. When designing the page in Photoshop, check how does it looks without any text smoothing at all and with Smooth setting applied. Bear in mind that Smooth setting is not equal to standard antialiasing and there’s no Photoshop equivalent whatsoever to subpixel rendering. As for 2008, no smoothing at all is a very prevalent option out there, as it’s used by IE6 and Firefox on Windows XP with default settings.

> Use fonts designed for a screen. So called web fonts were designed with the screen in mind and its low-resolution pixel grid. The list includes Arial, Courier New, Georgia, Times New Roman and Verdana. While these fonts may look like over-exploited cliché and you may prefer Helvetica over Arial (like me), they’re also the simplest way to achieve legibility for the widest audience. The old rule still holds: when in doubt, use Verdana.

> Beware of big type. Big font sizes are especially harmed by pixelation when font smoothing is disabled. If your audience is likely to use this setting, avoid big type.

> Test. Make sure the page is legible with font smoothing turned off, standard antialiasing (Windows) and subpixel rendering (ClearType on Windows, Quartz on Mac OS X). Change the typeface or its size when legibility is a problem. If you use Windows, you can check Mac rendering with Safari. On Mac, you will need to install Windows XP or Vista. If you’re a web developer, you probably already did so.

> If all fails, use JavaScript sniffing. There’s a method to detect with JavaScript if the browser is using some form of font smoothing. It has some limitations, e.g. doesn’t distinguish between basic antialiasing and subpixel rendering. But it could be used to serve different fonts depending on user’s settings.

> Wait for a future. CSS3 includes font-smooth property, which will allow designers to control text smoothing. Unfortunately, as for 2008, no browser supports this property. Keep in mind that the whole issue may become irrelevant before this CSS property will be implemented. Computer displays are being constantly improved and one day they should have enough DPI’s to display type in a perfectly legible way without smart tricks.

[Font Smoothing Explained 2009 - Krzysztof Szafranek](https://szafranek.net/blog/2009/02/22/font-smoothing-explained/)

## Slide 9

### Diagramación

[Carácteres por línea](http://mikeyanderson.com/optimal_characters_per_line)  
[Glosario Gráfico](http://www.glosariografico.com/linea_viuda)
[Viudas y huerfanas](https://ligadura.wordpress.com/2010/06/02/viudas-y-huerfanas-que-son-y-como-eliminarlas/)  

## Slide 10

### Digbags ASCII Art

ASCII art, fue la primera intención de darle un look diferentes a las interfaces de solo texto. Actualmente se conservan por su alto performance, en intercambio de carácteres (y)

## Slide 11

### Encontrar tipografías

[What font is?](https://www.whatfontis.com)  
[Font identifier](https://www.fontsquirrel.com/matcherator)  

## Slide 14

### Tipografía experimental

[Ray Gun](http://www.designishistory.com/1980/ray-gun/)  
[ashworthchris](https://www.instagram.com/ashworthchris)  
[It's okay to be an artist. | Roxy & Phoebe](https://www.youtube.com/watch?v=sx0HyDwSgXQ)  
[phoebecornog](https://www.instagram.com/phoebecornog/)  
[roxyprima](https://www.instagram.com/roxyprima/)  
[mikesulick](https://www.instagram.com/mikesulick/)  
[Ben Johnston](https://www.behance.net/benjohnston)  
[tim_rodenbroeker](https://www.instagram.com/tim_rodenbroeker/)  
[schultzschultzgrafik](https://www.instagram.com/schultzschultzgrafik/)  
[Schultzschultz GmbH](https://www.schultzschultz.com/index.html)  

## Conclusiones

1. Revisar que la fuente este completa con todos los caracteres del español
2. Usar o crear una fuente para representar los íconos de la aplicación
3. Usar una tipografía con una familia de estilos grandes
4. Cuidado con las fuentes con licencia
5. Es un reto pensar solo en tipografía, o llevar a un cliente a experimentar desde este punto clave de la comunicación

## Recuersos

[Fonts in use](https://fontsinuse.com/)  
[What the font](https://www.myfonts.com/WhatTheFont/)  
[Basic Rules of Design & Layout](http://www.graphic-design.com/Type/voice/index.html)
[A Crash Course in Typography: The Basics of Type](https://www.jotform.com/blog/a-crash-course-in-typography-the-basics-of-type/)  
[Anatomy of a Typeface ](http://typedia.com/learn/only/anatomy-of-a-typeface/)  
[abc - typography](http://abc.planet-typography.com/)  
[Type Classifications](https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/type-classifications)  
[Best practices for using font-weights](https://www.webtype.com/info/articles/fonts-weights/)  
[Worst Fonts Ever! 11 Examples of Bad Typography in Print](https://www.companyfolders.com/blog/worst-fonts-ever-11-examples-of-bad-typography-in-print)  
[Font vs Typeface](https://creativemarket.com/blog/font-vs-typeface-and-14-other-design-terms-we-always-get-wrong)  
[The Wrong Font Can Kill You. Literally. Your Sales, Too.](https://www.neurosciencemarketing.com/blog/articles/fonts-kill.htm)  
[Why is design important for brands](https://amelia.sg/why-is-design-important-for-brands-in-singapore/)  
[Get started with variable fonts](https://medium.com/@clagnut/get-started-with-variable-fonts-c055fd73ecd7)  
[Family example](https://www.colophon-foundry.org/typefaces/apercu/)    
[Font logo guide](https://worstofalldesign.com/blog/font-logo-guide)  
[11 Fonts That Designers Love To Hate](https://www.boredpanda.com/typefaces-worst-fonts-ever-creative-market)  
[What Your Font Choice Is Saying About You](https://makeapowerfulpoint.wordpress.com/2013/08/07/what-your-font-choice-is-saying-about-you/)  
[A List Apart - Typography](https://alistapart.com/blog/topic/typography-web-fonts/)  
[The Era of Symbol Fonts](https://alistapart.com/article/the-era-of-symbol-fonts/)  
[Say Hello to Octicons](https://github.blog/2012-05-09-say-hello-to-octicons/)  
[Css fonts](https://www.w3.org/TR/css-fonts-3/)  
[pinterest](https://co.pinterest.com/pin/324681454386145035/)