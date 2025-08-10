<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Tema 3: Interpretación de resultados y toma de decisiones basada en datos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: imagen-iconobloque-texto
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 A través de la interpretación rigurosa de resultados cuantitativos, la representación visual efectiva de hallazgos y la aplicación de inferencias estadísticas, los profesionales pueden traducir datos complejos en acciones concretas.
          p(data-aos="fade-left") Los conceptos como valores p, intervalos de confianza, coeficientes de regresión y visualizaciones interactivas son herramientas clave para comunicar hallazgos a diferentes niveles organizacionales.

      // Bloque: titulo-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Principios de interpretación estadística en contextos empresariales

      p(data-aos="fade-left") La interpretación estadística en contextos empresariales, implica comprender, analizar y traducir los resultados cuantitativos en información accionable para los diferentes niveles de la organización. Elementos como los coeficientes de regresión, los valores p y los intervalos de confianza, son fundamentales. Por ejemplo, un valor p inferior a 0.05 indica que los resultados son estadísticamente significativos y, por tanto, es poco probable que se deban al azar. Los coeficientes, por su parte, indican la dirección e intensidad de la relación entre variables, mientras que los intervalos de confianza muestran el rango probable de valores verdaderos, permitiendo evaluar la precisión del modelo.

      // Bloque: color-texto-imagen 8:4
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 Convertir estos resultados en información útil para la gerencia, implica comunicar de forma clara y contextualizada lo que los datos significan para las decisiones empresariales. Por ejemplo, si un modelo predice que aumentar la inversión publicitaria en un 10 % incrementa las ventas en un 7 % con un 95 % de confianza, la dirección puede considerar viable dicha acción.
          p(data-aos="fade-left") Estableciendo un caso aplicado con una empresa de textilería de Bogotá, que analiza la posibilidad de expandirse al mercado de la Costa Atlántica. Utiliza un modelo de regresión múltiple que muestra que el crecimiento del PIB regional y el nivel de consumo per cápita están altamente correlacionados con el éxito de sus puntos de venta. La interpretación de los coeficientes y el valor p indica que la probabilidad de éxito en la región es alta, lo que respalda una decisión de expansión.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Visualización efectiva de resultados estadísticos para la toma de decisiones

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Una representación visual clara de los resultados estadísticos, es clave para una comunicación efectiva con los tomadores de decisiones. Los principios de diseño gráfico aplicado a datos, sugieren el uso de elementos visuales simples, intuitivos y relevantes. Entre ellos destacan los gráficos de barras, líneas, dispersión y mapas de calor, que permiten identificar patrones y anomalías de forma rápida.
          .bg-color-3.p-4.p-lg-5(data-aos="fade-left").mb-4
            p.mb-0 Los dashboards gerenciales, creados con herramientas como Power BI, Tableau o Looker, deben estructurarse en torno a los indicadores claves (KPIs), resaltando tendencias, comparaciones y valores atípicos. Es importante evitar el exceso de información visual, elegir escalas adecuadas y mantener una codificación cromática coherente.
          p(data-aos="fade-left") Por ejemplo, una empresa de ventas al detal en Medellín, presenta un informe mensual en Excel con tablas extensas. Se rediseña este informe utilizando un dashboard con gráficos que muestran la evolución de ventas por región, productos con mayor crecimiento y desviaciones respecto a las metas. Este nuevo formato permite que los gerentes detecten de inmediato, áreas de mejora y tomen acciones correctivas oportunas.

      // Bloque: titulo-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Toma de decisiones estratégicas basadas en inferencia estadística

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La inferencia estadística, mediante pruebas de hipótesis y estimaciones, permite sustentar decisiones estratégicas con un respaldo científico. Por ejemplo, cuando una organización quiere validar si un nuevo proceso de producción mejora el rendimiento respecto al proceso actual, puede realizar una prueba t para comparar medias. Si el valor p es menor al nivel de significancia elegido (como 0.05), puede afirmarse que hay evidencia suficiente, para adoptar el nuevo proceso.
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            p.mb-0 Este enfoque también es crucial para el análisis de riesgo y el desarrollo de escenarios. Los modelos predictivos permiten simular diferentes condiciones futuras y evaluar el impacto probable de cada una, reduciendo la incertidumbre en decisiones como lanzamientos de productos, cambios en la estrategia comercial o expansiones geográficas.
          p(data-aos="fade-left") El último caso empresarial para abordar, es el de una empresa de alimentos saludables, la cual considera lanzar una nueva línea de snacks. Se realiza una prueba piloto en tres sucursales y se aplica un análisis estadístico que muestra un aumento significativo en las ventas y una aceptación positiva del producto (valor p < 0.01). Basados en estos resultados, se decide implementar el lanzamiento a nivel regional.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-1
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En síntesis, la interpretación de resultados y su visualización adecuada permiten transformar datos en conocimiento, y este conocimiento en decisiones estratégicas que generen valor real en las organizaciones. Por ello se afirma que "La inferencia estadística no solo permite aprender a partir de los datos, sino que también debe influenciar la toma de decisiones estratégicas con evidencia cuantitativa que reduzca la incertidumbre en contextos industriales y empresariales" (Box, Hunter & Hunter, 2005, p.15).

      // Bloque: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/218566" target="_blank" rel="noopener noreferrer") Cabrero Ortega, M. Y. & García Pérez, A. (2022). Análisis estadístico de datos espaciales con QGIS y R. UNED - Universidad Nacional de Educación a Distancia.
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/W7KaR1rR1rs?si=5LrYcjqCoxdgdhUX" target="_blank" rel="noopener noreferrer") UniversidadEcotec. (2025). WEBINAR DECISIONES BASADAS EN DATOS: Dominando el Análisis con Python (video).
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema3,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
