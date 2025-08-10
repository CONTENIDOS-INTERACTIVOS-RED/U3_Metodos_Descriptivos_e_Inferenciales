export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Aplicaciones en Inteligencia de Negocios	 - Análisis de datos en entornos empresariales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Implementación de modelos estadísticos en BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Fundamentos de modelado estadístico en entornos empresariales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Integración de modelos estadísticos en plataformas de BI',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Validación y seguimiento de modelos predictivos en inteligencia de negocios',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Herramientas computacionales para análisis estadístico (R, Python, SPSS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Análisis de regresión lineal y múltiple en R, Python y SPSS',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Correlación entre variables cuantitativas y su interpretación empresarial',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Automatización del análisis de regresión y correlación con scripts',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Interpretación de resultados y toma de decisiones basada en datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principios de interpretación estadística en contextos empresariales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Visualización efectiva de resultados estadísticos para la toma de decisiones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Toma de decisiones estratégicas basadas en inferencia estadística',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'James, G., Witten, D., Hastie, T. & Tibshirani, R. (2013). An Introduction to Statistical Learning with Applications in R.',
      link:
        'https://www.academia.edu/download/60707896/An_Introduction_to_Statistical_Learning_with_Applications_in_R-Springer_201320190925-63943-2cqzhk.pdf',
    },
    {
      referencia:
        "Provost, F. & Fawcett, T. (2013). Data Science for Business. O'Reilly Media.",
      link:
        'https://www.usenix.org/system/files/login/articles/16_books-online.pdf',
    },
    {
      referencia:
        'Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics. SAGE.',
      link:
        'http://repo.darmajaya.ac.id/5678/1/Discovering%20Statistics%20Using%20IBM%20SPSS%20Statistics%20%28%20PDFDrive%20%29.pdf',
    },
    {
      referencia:
        'Montgomery, D.C. (2012) Introduction to Statistical Quality Control. Editorial John Wiley & Sons, Inc.',
      link: 'https://www.uaar.edu.pk/fs/books/12.pdf',
    },
    {
      referencia:
        'Sánchez García, J. & Cruz Rambaud, S. (2024). Introducción a la Econometría Financiera. Editorial Universidad de Almería.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281504',
    },
    {
      referencia:
        'Alonso Cifuentes, J. C. (2024). Introducción al modelo clásico de regresión para el científico de datos en R. Editorial Universidad Icesi.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/278901',
    },
    {
      referencia:
        'Box, G. E. P., Hunter, W. G.,& Hunter, J. S. (2005). Statistics for Experimenters: Design, Innovation, and Discovery (2a ed.). Wiley-Interscience.',
      link:
        'https://scholar.archive.org/work/ttnk6iy7wbdlrgv3azy2x43ofi/access/wayback/http://pdfs.semanticscholar.org/b9e0/4ec28d6c16ef898c5d4b1c8eacc6a7b56389.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de regresión',
      significado:
        'Técnica estadística que permite modelar la relación entre una variable dependiente y una o más variables independientes.',
    },
    {
      termino: 'Automatización',
      significado:
        'Proceso de programar tareas estadísticas repetitivas para mejorar la eficiencia y reducir errores humanos.',
    },
    {
      termino: 'Coeficiente de correlación',
      significado:
        'Medida numérica que indica la fuerza y dirección de una relación lineal entre dos variables.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Panel visual interactivo que resume y presenta datos claves, mediante gráficos, indicadores y filtros.',
    },
    {
      termino: 'Data-driven',
      significado:
        'Enfoque de gestión basado en la toma de decisiones, fundamentadas en datos y evidencia analítica.',
    },
    {
      termino: 'Error cuadrático medio (ECM)',
      significado:
        'Métrica que evalúa la precisión de un modelo, al calcular la media de los errores al cuadrado.',
    },
    {
      termino: 'Inferencia estadística',
      significado:
        'Proceso de extraer conclusiones sobre una población, a partir del análisis de una muestra.',
    },
    {
      termino: 'Intervalo de confianza',
      significado:
        'Rango de valores dentro del cual se espera que se encuentre un parámetro poblacional, con cierta probabilidad.',
    },
    {
      termino: 'Inteligencia de Negocios (BI)',
      significado:
        'Conjunto de estrategias y tecnologías para analizar datos empresariales y apoyar la toma de decisiones.',
    },
    {
      termino: 'Modelo estadístico',
      significado:
        'Representación matemática de una situación real, que permite analizar y predecir los comportamientos de los datos.',
    },
    {
      termino: 'Pearson (coeficiente de)',
      significado:
        'Medida de correlación lineal entre dos variables cuantitativas, continuas.',
    },
    {
      termino: 'Power BI',
      significado:
        'Herramienta de Microsoft para análisis de datos y visualización interactiva, mediante dashboards dinámicos.',
    },
    {
      termino: 'Python',
      significado:
        'Lenguaje de programación ampliamente utilizado para análisis de datos, modelado estadístico y automatización.',
    },
    {
      termino: 'R (software)',
      significado:
        'Entorno de programación y software estadístico especializado en análisis y visualización de datos.',
    },
    {
      termino: 'Regresión lineal múltiple',
      significado:
        'Modelo que predice una variable dependiente utilizando múltiples variables independientes.',
    },
    {
      termino: 'Rotación de inventario',
      significado:
        'Indicador logístico que mide la frecuencia con la que una empresa renueva su inventario en un periodo.',
    },
    {
      termino: 'Salidas estadísticas',
      significado:
        'Resultados obtenidos al ejecutar un análisis, incluyendo tablas, gráficos, coeficientes y pruebas.',
    },
    {
      termino: 'Script',
      significado:
        'Secuencia de comandos o código escrito en un lenguaje de programación, para ejecutar tareas automáticamente.',
    },
    {
      termino: 'SPSS',
      significado:
        'Software de IBM diseñado para análisis estadístico, mediante interfaz gráfica y procedimientos inferenciales.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información para facilitar su comprensión y análisis.',
    },
  ],
}
