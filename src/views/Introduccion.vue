<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Párrafo inicial
    p(data-aos="fade-left") En esta unidad se analizarán las aplicaciones en Inteligencia de Negocios y el análisis de datos, en entornos empresariales, como herramientas esenciales para transformar grandes volúmenes de información en conocimiento útil y estratégico. Estas herramientas permiten detectar patrones, anticipar comportamientos, optimizar procesos y respaldar decisiones empresariales, con base en evidencia cuantitativa y cualitativa.

    // Bloque: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") A través del estudio de enfoques y técnicas propias de la analítica empresarial, como los modelos descriptivos, predictivos y prescriptivos, se profundizará en el uso de datos para resolver problemas reales en áreas como #[em marketing], finanzas, operaciones y gestión del talento humano. Se hará énfasis en la capacidad de extraer valor a partir de datos internos y externos, aplicando principios de la estadística inferencial, el aprendizaje automático básico y la visualización de información.

        p(data-aos="fade-left") Además, se trabajará en estudios de caso aplicados a empresas reales y simuladas, donde el estudiante fortalecerá su capacidad para seleccionar técnicas analíticas pertinentes, interpretar resultados y presentar recomendaciones sustentadas en datos. Esta aproximación integradora, lo preparará para asumir desafíos profesionales donde el análisis de datos sea un factor clave de competitividad e innovación.

        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Este desarrollo temático le permitirá al estudiante comprender cómo las herramientas de Inteligencia de Negocios (BI) como Power BI, Tableau, Excel avanzado, SPSS, R o Python, son utilizadas en la práctica empresarial para generar informes dinámicos, construir tableros de control (dashboards), modelar escenarios y realizar simulaciones que aporten al cumplimiento de objetivos organizacionales.

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-6.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esta unidad representa una oportunidad formativa crucial para desarrollar competencias analíticas, estratégicas y tecnológicas, indispensables para actuar con eficacia en entornos empresariales cada vez más complejos, digitales y orientados a la toma de decisiones basada en evidencia. ¡Bienvenido!

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
