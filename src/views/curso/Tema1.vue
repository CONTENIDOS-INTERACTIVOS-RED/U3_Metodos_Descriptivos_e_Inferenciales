<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Implementación de modelos estadísticos en BI'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // BLOQUE: imagen-bloque (usando img-bloque pattern)
      .bg-color-7.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El análisis estadístico se ha convertido en una herramienta esencial en los entornos empresariales, permitiendo transformar datos en decisiones estratégicas. En esta temática, se presentan los fundamentos del modelado estadístico, su integración en plataformas de inteligencia de negocios (BI) y los métodos para validar y monitorear modelos predictivos. A través de un enfoque práctico, se explorarán aplicaciones reales como la previsión de ventas, la segmentación de clientes o el análisis de riesgo, fomentando una comprensión sólida sobre cómo los modelos estadísticos fortalecen la toma de decisiones basada en datos.
      
      // BLOQUE: titulo-segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Fundamentos de modelado estadístico en entornos empresariales
      
      p(data-aos="fade-left").mb-5 El modelado estadístico en los entornos empresariales, consiste en la creación de representaciones matemáticas basadas en datos históricos para identificar patrones, hacer predicciones y tomar decisiones. Existen diferentes tipos de modelos:
      
      // BLOQUE: infografia-1
      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/infografia.svg', alt='', style="max-width: 800px;").mx-auto
                .bg-color-white.box-shadow.p-3(x="12%" y="72%" numero="+")
                  h5 Modelos predictivos
                  p Proyectan los comportamientos futuros (ejemplo, regresión lineal).
                .bg-color-white.box-shadow.p-3(x="11.5%" y="23%" numero="+")
                  h5 Modelos prescriptivos
                  p Recomiendan las decisiones óptimas (ejemplo, modelos de optimización).
                .bg-color-white.box-shadow.p-3(x="68%" y="50%" numero="+")
                  h5 Modelos descriptivos
                  p Resumen las características de un conjunto de datos (ejemplo, medidas de tendencia central).

      .bg-full-width.bg-gradiente-1
        .px-4.px-md-5.pb-md-3

          // BLOQUE: texto-color-imagen
          .row.mb-5
            .col-lg-8
              p(data-aos="fade-left") #[strong Ventajas:]
              
              .bg-color-2.p-4(data-aos="fade-left").mb-4
                ul.lista-ul--color
                  li 
                    i.far.fa-arrow-alt-circle-right
                    | Mejora la precisión en la toma de decisiones.
                  li 
                    i.far.fa-arrow-alt-circle-right
                    | Permite la optimización de procesos (logística, marketing, producción).
                  li 
                    i.far.fa-arrow-alt-circle-right
                    | Proporciona respaldo cuantitativo para estrategias empresariales.

              p(data-aos="fade-left") Ahora nos basamos en un ejemplo práctico:
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          
          // BLOQUE: tarjetas-boton
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Previsión de ventas
                p.mb-0.text-center Uso de modelos de regresión lineal múltiple, para anticipar la demanda.
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Análisis de riesgo financiero
                p.mb-0.text-center Aplicación de distribuciones probabilísticas y simulación de Monte Carlo.
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Segmentación de clientes
                p.mb-0.text-center Uso de análisis de clúster para personalizar campañas de marketing.
      
      // BLOQUE: imagen-texto-color 5:7
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Bajo un caso aplicado, por ejemplo una empresa de textiles en Medellín aplica un modelo de regresión múltiple para estimar sus ventas trimestrales con base en las variables: inversión en publicidad, clima económico y comportamiento de ventas anteriores.
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 Como lo expresa Montgomery, D. C. (2012), quien enfatiza que el modelado estadístico permite capturar relaciones complejas entre variables y facilita una mejor comprensión del comportamiento empresarial, expresando "Los modelos estadísticos bien estructurados son instrumentos esenciales para predecir con fiabilidad y validar decisiones organizacionales" (Montgomery, 2012, p. 145).
          p(data-aos="fade-left") Tenemos, a continuación, un ejercicio práctico sencillo, en el cual suponemos que una empresa de calzado en Medellín, desea predecir sus ventas mensuales y tiene los siguientes datos:
      
      // BLOQUE: tabla
      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Datos iniciales
      
      .tabla-a.color-acento-contenido.mb-5
        table
          caption Datos iniciales para el ejercicio de regresión
          thead
            tr
              th.bg-color-tabla.text-white Mes
              th.bg-color-tabla.text-white Inversión en Publicidad (millones)
              th.bg-color-tabla.text-white Ventas (millones)
          tbody
            tr
              td 1
              td 5
              td 30
            tr
              td 2
              td 6
              td 34
            tr
              td 3
              td 4
              td 28
            tr
              td 4
              td 7
              td 38
      
      // BLOQUE: texto-color-imagen
      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left") Para la anterior actividad, se pretende calcular la recta de regresión lineal simple y predecir las ventas, si la inversión es de 6,5 millones.
          p(data-aos="fade-left") Nos basamos en el modelo de regresión lineal simple:
          p(data-aos="fade-left").mb-5 Fórmula: Ventas = a + b * Inversión
          .bg-color-1.p-4(data-aos="fade-left")
            ul.lista-ul--color
              li 
                i.far.fa-arrow-alt-circle-right
                | Intercepto (a): 13.8.
              li 
                i.far.fa-arrow-alt-circle-right
                | Pendiente (b): 3.4.
              li 
                i.far.fa-arrow-alt-circle-right
                | Ecuación del modelo: Ventas = 13.8 + 3.4 * Inversión.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      
      h2(data-aos="fade-left").mb-4 Un análisis predictivo:
      
      // BLOQUE: imagen-texto-color 5:7
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-2 Para una inversión de 6.5 millones:
          p(data-aos="fade-left").mb-2 Ventas = 13.8 + 3.4 * 6.5 = 35.9 millones.
          p(data-aos="fade-left").mb-4 Bajo un análisis, este modelo sugiere que por cada millón adicional invertido en publicidad, las ventas aumentan en promedio 3.4 millones. Se observa una relación lineal positiva entre ambas variables.
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 Finalmente concluimos que la regresión lineal es una herramienta útil para estimar comportamientos de variables económicas en función de otras cuantificables. En este caso, permite prever ingresos futuros basados en inversión.
      
      // BLOQUE: titulo-segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Integración de modelos estadísticos en plataformas de BI
      
      p(data-aos="fade-left").mb-4 La integración de modelos estadísticos en plataformas de BI permite transformar datos complejos en visualizaciones interactivas, facilitando la toma de decisiones. Herramientas como Power BI, Tableau y Qlik, permiten incrustar scripts escritos en lenguajes como R o Python.
      
      p(data-aos="fade-left").mb-4 #[strong Técnicas de integración:]
      
      // BLOQUE: iconos-color
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Uso de scripts R en Power BI
                p.mb-0 para ejecutar análisis de regresión, clustering o series temporales.
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Incorporación de modelos predictivos
                p.mb-0 como objetos visuales actualizables.
      
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Automatización de informes
                p.mb-0 basados en salidas estadísticas.
      
      // BLOQUE: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Un caso aplicado en el cual una empresa logística de Medellín usa Power BI para prever la rotación de inventario. Se carga un script en R que ejecuta un modelo ARIMA sobre series históricas de rotación por bodega. Los resultados se muestran en gráficos dinámicos que permiten anticipar cuellos de botella logísticos.
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            p.mb-0 Provost y Fawcett (2013), explican cómo el uso de plataformas de BI con modelos analíticos, favorece decisiones rápidas, contextualizadas y visualmente comprensibles, determinando: "La verdadera ventaja competitiva de los modelos de datos, radica en su integración fluida en entornos de toma de decisiones interactiva como BI" (Provost & Fawcett, 2013, p. 203).
          p(data-aos="fade-left") Podemos colocar en práctica como actividad de inicio, por medio de Power BI lo siguiente:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      
      // BLOQUE: iconos-color
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-6.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Crear un conjunto de datos
                p.mb-0 sobre pedidos diarios de una tienda.
        .col-lg-4
          .bg-color-6.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Insertar un script en R
                p.mb-0 que calcule la media móvil de los pedidos.
      
        .col-lg-4
          .bg-color-6.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Visualizar los resultados
                p.mb-0 en una gráfica de líneas.
      
      // BLOQUE: titulo-segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Validación y seguimiento de modelos predictivos en inteligencia de negocios
      
      // BLOQUE: imagen-texto-color 5:7
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 La validación de modelos garantiza que las predicciones sean precisas y aplicables a nuevos datos. Involucra métodos estadísticos como:
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color
              li 
                i.far.fa-arrow-alt-circle-right
                | Validación cruzada (k-fold).
              li 
                i.far.fa-arrow-alt-circle-right
                | Métricas de ajuste: R², RMSE, MAE.
              li 
                i.far.fa-arrow-alt-circle-right
                | Overfitting vs. Underfitting: complejidad del modelo frente a su capacidad de generalización.
          p(data-aos="fade-left") #[strong Las empresas deben estar en actualización continua, entendiendo que los modelos deben recalibrarse con datos nuevos para mantener su relevancia y precisión. Esto es especialmente crítico en entornos cambiantes como los mercados digitales o el retail.]
      
      // BLOQUE: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Por ejemplo, una empresa de retail de Medellín, implementa un modelo de clasificación para identificar clientes propensos para abandonar el servicio. Cada trimestre, el modelo es ajustado, según los nuevos datos de compra, comportamiento online y quejas. Se usa validación cruzada para mantener la precisión del 85 % en la predicción de churn, relacionando que James et al. (2013), destacan la importancia de una validación rigurosa como parte del ciclo de vida del modelo predictivo en entornos de inteligencia de negocios, expresando que: "Un modelo predictivo es tan útil como su capacidad para mantenerse robusto ante nuevos datos" (James et al., 2013, p. 248).
          p(data-aos="fade-left") Ahora llevemos la teoría a la práctica, con un ejercicio sencillo y vamos a suponer que un modelo de predicción de ventas tiene estos errores de predicción, en millones: 2.5, 1.8, 3.2, 2.0, 2.9.
          p(data-aos="fade-left") Calcule el RMSE:
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            figure.mb-0
              img(src="@/assets/curso/tema1/formula-1.svg", alt="", style="max-width: 432px;").mx-auto
          p(data-aos="fade-left").mb-5 #[strong Reflexión.] ¿Es este error aceptable para decisiones de inversión?
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      
      
      // BLOQUE: imagen-texto-color 5:7
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 Para un planteamiento inicial, se desea evaluar el desempeño de un modelo predictivo mediante el cálculo de la raíz del error cuadrático medio (RMSE), con los siguientes errores:
          p(data-aos="fade-left").mb-4 Errores = [2.5, 1.8, 3.2, 2.0, 2.9]
          p(data-aos="fade-left").mb-4 Fórmula del RMSE:
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            figure.mb-0
              img(src="@/assets/curso/tema1/formula-2.svg", alt="", style="max-width: 341px;").mx-auto
          p(data-aos="fade-left").mb-4 Cálculo:
          p(data-aos="fade-left").mb-4 RMSE = 2.535
          p(data-aos="fade-left").mb-4 El anterior ejercicio permite un análisis en el cual un RMSE de 2.535 indica que, en promedio, las predicciones del modelo tienen un error de ±2.535 unidades respecto al valor real.
          p(data-aos="fade-left") #[strong Conclusión.] El RMSE es una métrica útil para evaluar la precisión de modelos predictivos. Mientras menor sea su valor, mejor es la capacidad del modelo para hacer predicciones acertadas, lo cual es clave en entornos empresariales, para reducir la incertidumbre en la toma de decisiones.
      
      // BLOQUE: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p García Santos, M. B., Capa Benítez, L. B. & García Santos, M. B. (2017). Análisis exploratorio de datos son SPSS. Editorial Universo Sur. https://elibro.net/es/lc/tecnologicadeloriente/titulos/71781
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71781" target="_blank" rel="noopener noreferrer") García Santos, M. B., Capa Benítez, L. B. & García Santos, M. B. (2017). Análisis exploratorio de datos son SPSS
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=gTt3oACw4MM" target="_blank" rel="noopener noreferrer") IPANAQUE COSTILLA, J. M. (2024, 11 de enero). ¿Cómo calcular la prueba de chi cuadrado en SPSS? (video)
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
