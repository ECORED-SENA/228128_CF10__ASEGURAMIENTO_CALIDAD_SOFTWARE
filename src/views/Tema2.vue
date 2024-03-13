<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Análisis de rendimiento
      
    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.bg16.p-4
      figure.mb-4.mb-lg-0.position-relative.up(data-aos="fade-right")
        img.img-a.img-t(src="@/assets/curso/temas/27.png",)
      .p-4.cardw(data-aos="fade-left")
        p.mb-0 La base de datos es el centro de toda aplicación, si la aplicación no responde de la mejor manera después de un tiempo, se debe a la escalabilidad de la base de datos y del rendimiento de la misma; esto bajará la calidad de la aplicación por los tiempos de respuesta de la información. Además, existen muchos factores que si no se tienen en cuenta, pueden generar cuellos de botella y muchos inconvenientes más.        


    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Análisis de plan de ejecución de consultas 

    .row.bg11.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down").mb-5 Lo primero es identificar las consultas que van a traer más información y que pueden tornarse lentas al momento en que los usuarios comiencen a realizar solicitudes.

            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Monitoreo de la consulta               
            .row.justify-content-center.align-items-center           
              .col-lg-9.my-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='Imagen que presenta un ejemplo del monitoreo de la consulta.')            

              .col-lg-3.my-3
                .bg5.p-3.brad.mb-4(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 Luego se inicia el monitoreo de esas consultas identificando los tiempos de respuesta, utilizando el comando explain en MySQL. Hay que tener en cuenta que este comando puede variar ,dependiendo del motor de base de datos que se utilice.
                img.img-t.img-a.mov(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')      

            .row.justify-content-center.align-items-center.px-3.my-3.bg12.brad.mb-5(data-aos="flip-down")           
              .col-lg-auto.beat.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')       
              .col.my-3
                h5(data-aos="fade-down").mb-0 Este comando lo que hace es desplegar el plan de ejecución de la consulta. En este caso se va a observar las dos últimas columnas que muestran que se está utilizando solo un índice y que arroja 20 resultados, de esta forma se puede verificar y monitorear qué hace la consulta.   

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Optimización de consultas

    p(data-aos="fade-down") Ahora se puede monitorear el tiempo de respuesta de las consultas, en este caso se implementaron dos consultas que arrojan el mismo resultado, pero los tiempos de respuesta entre una y otra cambian.   

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Consulta 1" :icono="require('@/assets/curso/temas/32.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 #[mark.px-2.t4.text-white Consulta 1]
            p Si se observa la sentencia marcada con azul, no utiliza Join y solo utiliza la llave primaria, y la segunda sentencia utiliza el Join. Si se detalla el tiempo de la sentencia roja, es mucho mejor el tiempo de respuesta, por lo tanto, una forma de optimizar las sentencias de búsqueda con respecto al rendimiento es utilizando los Join.                                                          
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='Imagen que presenta el proceso explicado en la consulta 1.')       

      .py-4.py-md-5(titulo="Consulta 2" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 #[mark.px-2.t4.text-white Consulta 2]
            p Ahora se agrega además un index a la consulta con el campo identificación.                                                          
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='Imagen que presenta el proceso explicado en la consulta 2.')  

      .py-4.py-md-5(titulo="Consulta 3" :icono="require('@/assets/curso/temas/34.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 #[mark.px-2.t4.text-white Consulta 3]
            p El tiempo entre las dos consultas, agregándole el índice mejora aún más, de esta forma se puede monitorear y mejorar el rendimiento de nuestras consultas y de la base de datos.                                                          
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='Imagen que presenta el proceso explicado en la consulta 3.')     

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Recomendaciones

    p(data-aos="fade-down").mb-5 Al momento de mejorar un sistema, se debe tener muy en cuenta cómo se arman las consultas en la base de datos y como tenemos claro cómo se arman estas sentencias y se mejoran dichas consultas, se darán unas recomendaciones para mejorar el rendimiento. #[b.tb Estas son:]
    .row.justify-content-center.align-items-center          
      .col-lg-6.my-3    
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span 1
            | No utilizar consultas anidadas. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            span Tratar de utilizar los #[em Joins] si es posible.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Si se debe usar por fuerza mayor una consulta anidada usarla solo en el FROM.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Normalizar la base de datos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Tratar de guardar cálculos en un campo siempre y cuando se necesite en determinado tiempo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Utilizar los tipos y las longitudes de los campos de forma adecuada.        
      .col-lg-6.my-3    
        img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')     


</template>

<script>
export default {
  name: 'Tema2',
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
