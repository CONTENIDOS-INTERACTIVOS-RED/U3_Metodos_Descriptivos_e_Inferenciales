<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Tema 2: Herramientas computacionales para análisis estadístico (R, Python, SPSS)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: imagen-bloque

      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En el entorno empresarial actual, caracterizado por la abundancia de datos y la necesidad de decisiones ágiles, el dominio de técnicas estadísticas como la regresión y la correlación se vuelve fundamental para comprender y anticipar comportamientos del mercado.
      


      // Bloque: titulo-segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Análisis de regresión lineal y múltiple en R, Python y SPSS


      .bg-full-width.bg-gradiente-2.mb-5
        .px-4.px-md-5


          p(data-aos="fade-left") La regresión estadística es una técnica que permite modelar la relación entre una variable dependiente y una o más variables independientes.

          // Bloque: iconos-color
          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-6
              .bg-color-2.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Regresión lineal simple
                    p.mb-0 Se estudia una sola variable independiente.
            .col-lg-6
              .bg-color-2.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Regresión múltiple
                    p.mb-0 Considera múltiples variables independientes.

          p(data-aos="fade-left") Estas técnicas permiten predecir valores futuros, analizar tendencias y evaluar el impacto de factores específicos en un resultado.

          p(data-aos="fade-left") Aplicación en herramientas:

          // Bloque: tarjetas-boton
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" style="width: 90px")
                h4.mb-2.text-center R
                p.mb-0.text-center Uso de funciones como lm() para regresión lineal.
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" style="width: 90px")
                h4.mb-2.text-center Python
                p.mb-0.text-center Con librerías como scikit-learn y statsmodels.
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" style="width: 90px")
                h4.mb-2.text-center SPSS
                p.mb-0.text-center Interfaz gráfica para modelar relaciones entre variables, ideal para usuarios no programadores.

      // Bloque: imagen-texto-color 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Supongamos que la empresa Alquería Medellín va a predecir ventas semanales de leche con base en inversión publicitaria y temperatura promedio semanal.
          p(data-aos="fade-left").mb-4 Para ello utilizará el modelo de regresión múltiple:
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color
              li
                i.fas.fa-arrow-circle-right
                | Variable dependiente: ventas (en litros).
              li
                i.fas.fa-arrow-circle-right
                | Variables independientes: inversión publicitaria (en millones), temperatura (°C).
          p(data-aos="fade-left") Vamos ahora con un ejercicio práctico con estos supuestos datos:

      // Bloque: tabla
      .titulo-figura.mb-2
        h5 Tabla 2. 
        span Datos

      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.bg-color-tabla.text-white Semana
              th.bg-color-tabla.text-white Ventas (L)
              th.bg-color-tabla.text-white Inversión Publicitaria (M)
              th.bg-color-tabla.text-white Temperatura (°C)
          tbody
            tr
              td 1
              td 8000
              td 5.0
              td 20
            tr
              td 2
              td 7500
              td 4.8
              td 22
            tr
              td 3
              td 8200
              td 5.5
              td 19
            tr
              td 4
              td 7900
              td 5.2
              td 21
            tr
              td 5
              td 7700
              td 4.9
              td 23


      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/figura-1.svg", data-aos="zoom-in", style="max-width: 894px").mx-auto

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 De acuerdo con lo anterior, el modelo muestra cómo una variación en la inversión o temperatura impacta las ventas. La interpretación de los coeficientes ayuda a orientar las decisiones de #[strong marketing] y distribución.
          .bg-color-4.p-4.p-lg-5(data-aos="fade-left")
            p.mb-0 Por ende, la regresión lineal y múltiple, son herramientas claves para anticipar comportamientos y planificar estratégicamente los recursos. La integración con herramientas como Python y SPSS, permite una mayor versatilidad y algo que señala Sánchez (2024), en el libro #[strong "Introducción a la Econometría Financiera"] publicado por la Editorial Universidad de Almería, en el cual aborda la aplicación de métodos econométricos en el análisis financiero, cubriendo modelos como regresiones, series temporales (ARIMA), GARCH (para volatilidad) y cointegración, con enfoque en mercados de acciones, bonos y derivados. Incluye técnicas avanzadas como #[em machine learning] y #[em event studies], junto con ejemplos prácticos en #[em software] como R o Python y busca modelizar riesgos, precios y tendencias en finanzas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Correlación entre variables cuantitativas y su interpretación empresarial

      p(data-aos="fade-left") Conozcamos la correlación de Pearson y la de Spearman:

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b").mb-5
            .div(titulo="Correlación de Pearson")
              p Es una medida estadística que cuantifica el grado y la dirección de la relación lineal entre dos variables cuantitativas. Este coeficiente, que oscila entre –1 y 1, indica si existe una asociación directa (valores positivos), inversa (valores negativos) o nula (valor cercano a 0) entre las variables. Sin embargo, su principal limitación es que solo detecta patrones lineales, por lo que puede pasar por alto relaciones más complejas.
            .div(titulo="Correlación de Spearman")
              p Es una alternativa no paramétrica que evalúa relaciones monótonas, es decir, si una variable tiende a aumentar (o disminuir) cuando la otra lo hace, sin importar si la relación es lineal o no. Esta métrica se basa en rangos más que en valores absolutos, lo que la hace útil para datos ordinales o distribuciones no normales.

      // Bloque: iconobloque-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Ambos coeficientes son herramientas fundamentales en el análisis exploratorio de datos, pero es crucial interpretarlos con cautela, dado que pueden surgir relaciones espurias.
          p(data-aos="fade-left") Estas son correlaciones que, aunque estadísticamente significativas, no reflejan una conexión causal real, sino que son producto de coincidencias o de la influencia de variables ocultas no consideradas en el análisis. Por ello, siempre es recomendable complementar estos indicadores con pruebas adicionales y un enfoque crítico para evitar conclusiones erróneas.
          p(data-aos="fade-left") Por ejemplo, almacenes Éxito quiere evaluar si existe relación entre inversión en publicidad digital y ventas mensuales, en tiendas físicas, con los siguientes datos simulados:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")

      // Bloque: tabla
      .titulo-figura.mb-2
        h5 Tabla 3. 
        span Relación inversión en publicidad vs. Ventas

      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.bg-color-tabla.text-white Mes
              th.bg-color-tabla.text-white Inversión en publicidad (millones)
              th.bg-color-tabla.text-white Ventas (millones)
          tbody
            tr
              td Ene.
              td 20
              td 180
            tr
              td Feb.
              td 25
              td 190
            tr
              td Mar.
              td 15
              td 160
            tr
              td Abr.
              td 30
              td 200
            tr
              td May.
              td 18
              td 170

      // Bloque: figura-completa
      .titulo-figura.mb-2
        span Python

      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in", style="max-width: 900px").mx-auto

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 De acuerdo con lo anterior, el resultado esperado es un coeficiente cercano a 1 indicaría una relación directa y fuerte; cercano a 0, una relación débil o nula. Cuyo análisis establece que la correlación ayuda a evaluar si se justifican mayores inversiones publicitarias. Sin embargo, no implica causalidad, por lo que se deben estudiar otros factores.
          .bg-color-3.p-4(data-aos="fade-left")
            p.mb-0 Finalmente, el análisis de correlación permite descubrir relaciones útiles para la toma de decisiones estratégicas. Sin embargo, debe complementarse con análisis causal o experimental. Por ello: "La correlación es una herramienta exploratoria poderosa, pero debe usarse con precaución, sin asumir causalidad directa" (Field, 2018).

      // Bloque: titulo-segundo
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Automatización del análisis de regresión y correlación con #[em scripts]

      // Bloque: audio-imagen
      .bg-full-width.bg-color-3.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              p(data-aos="fade-left").mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente pódcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Automatización del análisis de regresión y correlación con scripts"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
              
              p(data-aos="fade-left").mb-4 Siguiendo con nuestros casos empresariales, por ejemplo, una confitería establece un plan de monitorear el desempeño de ventas por sucursal y automatizar alertas ante caídas significativas.
            .col-lg-6
              figure
                img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in", style="max-width: 600px").mx-auto

      // Bloque: figura-completa
      .titulo-figura.mb-2
        span #[strong Ejercicio en Python:]

      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in", style="max-width: 951px").mx-auto

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el panorama anterior este tipo de visualización ayuda a detectar rápidamente variaciones en el desempeño por zonas. Al combinarlo con análisis de regresión mensual automatizado, se detectan anomalías en tiempo real. En conclusión, la automatización estadística no solo mejora la eficiencia, sino que fortalece la inteligencia operativa, permitiendo decisiones más rápidas y sustentadas. A tener en cuenta con respecto a: "La automatización del análisis estadístico, permite escalar el uso de modelos predictivos y tomar decisiones más inteligentes en organizaciones modernas" (James et al., 2021).

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
      
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71781" target="_blank" rel="noopener noreferrer") García Santos, M. B., Capa Benítez, L. B. & García Santos, M. B. (2017). Análisis exploratorio de datos son SPSS. Editorial Universo Sur. 
      
      
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=gTt3oACw4MM" target="_blank" rel="noopener noreferrer") IPANAQUE COSTILLA, J. M. (2024, 11 de enero). ¿Cómo calcular la prueba de chi cuadrado en SPSS? (video).
      
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
