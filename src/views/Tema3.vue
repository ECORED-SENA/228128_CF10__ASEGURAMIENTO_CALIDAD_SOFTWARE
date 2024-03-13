<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Afinamiento de bases de datos

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')       

      .col-lg-7.my-3
        .row.justify-content-center.align-items-center.px-3.bg2.brad.mb-4(data-aos="flip-down")           
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')       
          .col.my-3
            p(data-aos="fade-down").mb-0 El afinamiento de base de datos es el proceso que se hace de acuerdo al sistema operativo, a la arquitectura del servidor, como el disco duro, memoria, etc., y a las transacciones y usuarios que se puedan conectar y hacer solicitudes. 

        p(data-aos="fade-down") Los informes basados en esquemas de rendimiento, proporcionan información sobre las operaciones del servidor MySQL a través de útiles informes de alto nivel. MySQL #[i Workbench] utiliza las vistas #[i #[b.tb SYS]] en el esquema de rendimiento para generar más de 20 informes para ayudar a analizar el rendimiento de sus bases de datos MySQL. Los informes ayudan a analizar los puntos de acceso de E / S,descubrir declaraciones SQL de alto costo y revisar las estadísticas de espera y las métricas del motor InnoDB.  

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Motor de almacenamiento                      
    .row.justify-content-center.mb-4 
      .col-lg-7.my-3
        p(data-aos="fade-down") Un motor de base de datos es el que ofrece un sistema de administración para utilizar operaciones para editar, leer y actualizar datos. En este caso se hablará de MySQL y MariaDB, y existen dos tipos de motores: transaccionales y no transaccionales:
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')       

      .col-lg-5.my-3
        .bg13.brad.px-3.h-100
          .row.justify-content-center          
            .col-lg-5.my-3
              .bgw.brad.h-100.p-3        
                ol.lista-ol--cuadro.fa-ul
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | InnoDB.  
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | MyISAM.
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      | CSV.
                    li 
                      .lista-ol--cuadro__vineta
                        span 4
                      | Merge.
                    li 
                      .lista-ol--cuadro__vineta
                        span 5
                      | Archive.
                    li 
                      .lista-ol--cuadro__vineta
                        span 6
                      | Blackhol.e
                    li 
                      .lista-ol--cuadro__vineta
                        span 7
                      | Federated.     
            .col-lg-7.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')       

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Parámetros de configuración y herramientas de monitoreo 
      
    p(data-aos="fade-down") Las configuraciones para un óptimo funcionamiento de una base de datos, dependen del motor que se use, el tipo de base de datos, las necesidades del sistema, entre otras características. No es lo mismo configurar una base de datos en un servidor básico que en un servidor con discos en espejo con espacio sólido y 32 Gb de memoria; tampoco es lo mismo configurar un servidor para que almacene una base de datos de forma local en un servidor propio, que configurarlo en un contenedor ofrecido por Amazon.  

    h5.tb.mb-5(data-aos="fade-down") A continuación, se presentan algunos conceptos para tener en cuenta, según las necesidades y arquitecturas:

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3
        SlyderF(columnas="col-lg-12")
          .tarjeta.bg14.p-5
            h4.text-center.mb-4 Aplicación web 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-database.color1
                | Normalmente vinculado a la CPU.
              li 
                i.fas.fa-database.color1
                | DB mucho más pequeño que RAM.
              li 
                i.fas.fa-database.color1
                | 90 % o más consultas simples. 

          .tarjeta.bg14.p-5
            h4.text-center.mb-4 Procesamiento de transacciones en línea (OLTP) 
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-database.color1
                | Normalmente vinculado a CPU o E / S. 

              li 
                i.fas.fa-database.color1
                | DB un poco más grande que la RAM a 1TB. 

              li 
                i.fas.fa-database.color1
                | 20-40 % de consultas de escritura de datos pequeños. 

              li.mb-0 
                i.fas.fa-database.color1
                | Algunas transacciones largas y consultas de lectura complejas.  

          .tarjeta.bg14.p-5
            h4.text-center.mb-4 Almacén de datos (DW) 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-database.color1
                | Normalmente vinculado a E / S o RAM. 

              li 
                i.fas.fa-database.color1
                | Grandes cargas masivas de datos. 

              li 
                i.fas.fa-database.color1
                | Grandes consultas de informes complejos. 

              li 
                i.fas.fa-database.color1
                | También llamado "Apoyo a la toma de decisiones" o "Inteligencia empresarial".  

          .tarjeta.bg14.p-5
            h4.text-center.mb-4 Aplicación de escritorio 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-database.color1
                | No es una base de datos dedicada. 

              li 
                i.fas.fa-database.color1
                | Una estación de trabajo general, quizás para un desarrollador.  

          .tarjeta.bg14.p-5
            h4.text-center.mb-4 Tipo de aplicación mixta 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-database.color1
                | Características mixtas de DW y OLTP. 

              li 
                i.fas.fa-database.color1
                | Una amplia mezcla de consultas.   

      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='') 

    p(data-aos="fade-down").mb-4 A continuación, se mencionan algunas herramientas que podrían ayudar con el monitoreo del rendimiento de las bases de datos.

    .row.justify-content-center.align-items-center.px-3.bg15.brad(data-aos="flip-down")           
      .col-md-2.col-sm-12.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')       
      .col-10
        .bgw.brad.p-3.my-3
          .row.justify-content-center.align-items-top          
            .col-lg.my-1.col-md-12
              ul.lista-ul.fa-ul.mb-0
                li.mb-0 
                  i.fas.fa-database.color1
                  | Germain APM.
            .col-lg.my-1.col-md-12                  
              ul.lista-ul.fa-ul.mb-0                   
                li.mb-0 
                  i.fas.fa-database.color1
                  | Datadog.
            .col-lg.my-1.col-md-12                  
              ul.lista-ul.fa-ul.mb-0                  
                li.mb-0 
                  i.fas.fa-database.color1
                  | Percona.
            .col-lg.my-1.col-md-12                  
              ul.lista-ul.fa-ul.mb-0                    
                li.mb-0 
                  i.fas.fa-database.color1
                  | MariaDB.
            .col-lg.my-1.col-md-12                  
              ul.lista-ul.fa-ul.mb-0                  
                li.mb-0 
                  i.fas.fa-database.color1
                  | Sowflake.      
</template>

<script>
export default {
  name: 'Tema3',
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
