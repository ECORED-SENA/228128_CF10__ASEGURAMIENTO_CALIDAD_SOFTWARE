<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Tiempos computacionales
      
  
    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.bg16.p-4
      figure.mb-4.mb-lg-0.position-relative.up(data-aos="fade-right")
        img.img-a.img-t(src="@/assets/curso/temas/4.png",)
      .p-4.cardw(data-aos="fade-left")
        p.mb-0 La complejidad informática estudia la clasificación de los problemas computacionales, teniendo en cuenta su dificultad, además mide el tiempo en que un algoritmo le da respuesta a una necesidad o a un problema, utilizando ciertas fórmulas matemáticas en las que no se profundizará, pero se explicarán algunos conceptos que se deben conocer para entender el ámbito de este tema, las ecuaciones matemáticas y todo su desarrollo se pueden investigar dirigiéndose a las referencias más adelante.                 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Estructura de datos

    .row.bg6.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-4           
              .col-lg-7.my-3.order-1 
                .bg5.p-3.brad(data-aos="flip-down") 
                  p(data-aos="fade-down").mb-0 Es la forma de organizar los datos en una computadora para que después sean utilizados de manera eficiente. Existen diferentes estructuras de datos y estas estructuras son utilizadas dependiendo de la necesidad de la aplicación. Para el almacenamiento y recuperación de los datos, se manejan dos tipos de estructura de datos, dinámica y estática, y los recorridos de búsqueda de estas estructuras pueden ser lineales y no lineales.  
                .row.justify-content-center.align-items-center.p-3.my-3(data-aos="flip-down")           
                  .col-lg-auto.mov
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')       
                  .col
                    h5(data-aos="fade-down").mb-0.tb Se crean algoritmos para poder recorrer y hacer búsquedas de información en grandes cantidades de datos, y se explica el funcionamiento de cada uno de ellos, para mejorar su comprensión:                                          
              .col-lg-5.my-3.order-lg-2 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')  

            .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/9.svg', alt="Imagen que presenta una estructura lineal.") 
                  .col-lg-7.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Necesario
                      p Las estructuras lineales son estructuras que se definen inicialmente como una secuencia de elementos en donde se crea una relación de predecesor y sucesor. Estas estructuras utilizan cuatro operaciones básicas que son: crear, añadir, borrar y consultar, y existen tres estructuras lineales que son: las pilas ejecuta las tres operaciones al final de la secuencia, listas las tres operaciones, se ejecutan sobre una posición en específico y puede ser desplazada, y colas se añade al final y se consulta y borra al inicio	     

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/10.svg',alt="Imagen que presenta una estructura de árbol binario.") 
                  .col-lg-7.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Árbol binario
                      p Es una estructura de datos en donde se representa por nodos, y cada nodo puede tener dos hijos, uno a la izquierda y otro a la derecha. Si uno de los nodos tiene un valor de null, se le dice que es un nodo hoja.                                   

            h5.tb(data-aos="fade-down") Estas estructuras se pueden recorrer de tres formas: 

            .row.justify-content-center.mb-5           
              .col-lg-4.my-3
                .bg7.p-5.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')            
                  h5(data-aos="fade-down") #[mark.t1.px-2.ts Preorden]
                  p(data-aos="fade-down").mb-0 Se sigue el orden primero con el nodo raíz, después el nodo de la izquierda y por último, el de la derecha. 
              .col-lg-4.my-3
                .bg7.p-5.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')            
                  h5(data-aos="fade-down") #[mark.t1.px-2.ts Postorden]
                  p(data-aos="fade-down").mb-0 Se recorre primero el nodo de la izquierda, luego el de la derecha y por último, el nodo raíz.  
              .col-lg-4.my-3
                .bg7.p-5.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')            
                  h5(data-aos="fade-down") #[mark.t1.px-2.ts Inorden]
                  p(data-aos="fade-down").mb-0 Primero se recorre el nodo izquierdo, después la raíz y por último, el derecho.  

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Complejidad algorítmica    


    .row.bg8.align-items-center(data-aos="fade-right")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            p(data-aos="fade-down") Es una métrica que ayuda a describir el comportamiento de un algoritmo en dos características, una es el tiempo que se demora para solucionar un problema y la otra es la memoria que utiliza para hacerlo; esto ayuda a seleccionar qué algoritmo es más eficiente que otro para solucionar un problema, y una forma de medir esto es utilizando la Notación Asintótica, la cual mide la eficiencia y complejidad de un algoritmo. #[b.tb Según esta notación, se puede interpretar que el algoritmo más eficiente es el que no varía o varía lo menos posible, sin importar las entradas. Su comportamiento se representa de la siguiente forma:]  
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Gráfica de complejidad Big-O                 
            .row.justify-content-center.align-items-center           
              .col-lg-8.my-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='La imagen presenta una gráfica de complejidad Big-O.')            

              .col-lg-4.my-3
                img.img-t.img-a.mov(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='') 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Algoritmos de búsqueda 

    .row.bg9.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.mb-5           
              .col-lg-4.my-3
                .bg5.p-3.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 Es simplemente buscar un dato en un conjunto de datos; existen algoritmos diferentes para realizar este tipo de búsquedas y depende de cómo estén ordenados los datos. Aquí se debe observar qué tipo de algoritmo utilizar: uno que busque secuencialmente o uno que busque aleatoriamente, teniendo en cuenta que la búsqueda secuencial, es el algoritmo menos eficiente, porque solo toma el número que se desea buscar y lo compara uno a uno con el conjunto de datos hasta encontrarlo.
              .col-lg-4.my-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='') 
              .col-lg-4.my-3
                .bg3.p-3.brad.h-100.j(data-aos="fade-right")
                  p(data-aos="fade-down").mb-0 Hablemos ahora sobre la ordenación. Este es un proceso para organizar los elementos o un conjunto de datos de forma ascendente o descendente, si es el caso que los elementos sean números y si son alfabéticos, en orden alfabético; esta ordenación se repite hasta que los elementos o datos estén ordenados correctamente. Para lograr este proceso, se utilizan dos simples operaciones, comparación e intercambio.  

            .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-7.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/21.svg', alt="Imagen que presenta un algoritmo de burbuja.") 
                  .col-lg-4.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Método de burbuja
                      p Recorre el #[i array], comparando valores que se encuentran en posiciones seguidas. Si los datos de las dos posiciones no se encuentran ordenadas, se intercambian, y se sigue iterando hasta que el #[i array] quede en el orden correcto.       

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-7.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/22.svg', alt="Imagen que presenta un ejemplo del ordenamiento por selección y reemplazo.") 
                  .col-lg-4.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Método de burbuja 
                      p En este método lo primero se debe hacer, es seleccionar el elemento de la primera posición y compararlo como el más pequeño o el más grande de todo el conjunto de elementos. En este caso, seleccionaremos el más pequeño, recorremos posición por posición, comparando que el elemento que seleccionamos es el más pequeño que el de la posición actual; si después de recorrer todo el #[i array] encontramos el más pequeño, lo intercambiamos con el elemento que está en la primera posición y nos desplazamos a la segunda posición, volvemos a comprar hasta el final del #[i array] y si encontramos el más pequeño, lo intercambiamos con el elemento de la segunda posición y así sucesivamente hasta terminar de desplazarnos por todo el #[i array]. 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-7.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/23.svg', alt="Imagen que presenta un ejemplo de ordenamiento por selección y reemplazo.") 
                  .col-lg-4.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Método de inserción 
                      p Este método lo que hace es comprar el elemento con el elemento que se encuentra a la izquierda. Como el primer elemento está en la posición 0 y no hay ningún elemento al lado izquierdo, pasamos al elemento 1 y lo comparamos con el elemento de la posición 0, si este elemento es menor que el elemento de la posición anterior, entonces lo intercambiamos, de lo contrario pasamos a la siguiente posición, el elemento debe desplazarse hacia la izquierda tantas veces hasta que encuentre uno menor. 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-7.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/24.svg', alt="Imagen que presenta un ejemplo de quicksort.") 
                  .col-lg-4.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Quicksort 
                      p Este método lo que hace es tomar inicialmente un pívot. Normalmente se toma el primer elemento, después se empieza a comparar cada uno de los elementos, y en el #[i array] de la izquierda se van a agregando uno a uno los menores o iguales al pívot y a la derecha se van agregando los mayores; después se concatenan teniendo en cuenta que el pívot queda en el medio, y se toman los #[i array] a la izquierda y derecha y vuelve y se toma un pívot para volver a hacer el proceso, al final devuelve el #[i array] ordenado.                                             
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Índices y rendimiento en bases de datos                                                            
    p.mb-5(data-aos="fade-down") Para mejorar el rendimiento de la base de datos y optimizar las consultas, es importante utilizar índices que permitan especificar las búsquedas de la información.      
    
    .row.justify-content-center.align-items-center.bg10.pb-0 
      .col-lg-3.my-3.p-0.ps-5
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/25.png')     
      .col-lg-9.my-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.px-5 Índice es un identificador que permite que la consulta se haga teniendo en cuenta este parámetro y pueda ejecutarse de forma más eficiente y rápida, existen tipos de índices que se ajustan a la implementación de las búsquedas, cuando se crean las tablas de las bases de datos, normalmente uno crea un llave primaria que indica que la búsqueda debe ser relacionada con esa llave en especial, esta llave primaria es a su vez un índice.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
