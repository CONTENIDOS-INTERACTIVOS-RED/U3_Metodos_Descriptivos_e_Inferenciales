export default {
  tema3: {
    tema: 'Interpretación de resultados y toma de decisiones basada en datos',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre interpretación de resultados estadísticos y toma de decisiones basada en datos.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Qué indica un valor p menor a 0.05 en un análisis de hipótesis?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Que el modelo no es confiable.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Que la hipótesis nula es verdadera.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Que hay suficiente evidencia para rechazar la hipótesis nula.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Que los datos están mal recogidos.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! Un valor p menor a 0.05 indica que hay evidencia suficiente para rechazar la hipótesis nula.',
        mensaje_incorrecto:
          'Incorrecto. Un valor p menor a 0.05 significa que hay evidencia estadística suficiente para rechazar la hipótesis nula.',
      },
      {
        id: 2,
        texto:
          '¿Cuál de los siguientes es un objetivo clave de los dashboards gerenciales?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Realizar cálculos manuales.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Mostrar todos los datos sin filtrar.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Comunicar información relevante y visual para la toma de decisiones.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Almacenar grandes bases de datos.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! Los dashboards deben comunicar información relevante de manera visual para facilitar decisiones.',
        mensaje_incorrecto:
          'Incorrecto. El objetivo principal de los dashboards es comunicar información clave visualmente para la toma de decisiones.',
      },
      {
        id: 3,
        texto:
          '¿Qué tipo de relación mide el coeficiente de correlación de Pearson?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Causal.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'No lineal.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Lineal entre dos variables cuantitativas.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Entre variables cualitativas.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Pearson mide específicamente relaciones lineales entre variables cuantitativas.',
        mensaje_incorrecto:
          'Incorrecto. El coeficiente de Pearson mide relaciones lineales entre variables cuantitativas.',
      },
      {
        id: 4,
        texto:
          '¿Cuál es una buena práctica en la visualización de datos empresariales?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Usar gráficos complejos con muchos colores.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Evitar mostrar tendencias.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Enfocarse en métricas clave y claridad visual.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Mostrar todos los datos posibles en una sola hoja.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! La claridad visual y el enfoque en métricas clave son fundamentales para una buena visualización.',
        mensaje_incorrecto:
          'Incorrecto. Las mejores visualizaciones se enfocan en métricas clave con claridad visual.',
      },
      {
        id: 5,
        texto:
          'En el contexto empresarial, ¿qué utilidad tiene un intervalo de confianza del 95%?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Determina si los datos son cualitativos.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Indica que el 95% de los datos se distribuyen igual.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Muestra el rango donde probablemente se encuentra el valor verdadero del parámetro.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Garantiza que la muestra es representativa.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! Un intervalo de confianza del 95% indica el rango probable del valor verdadero del parámetro.',
        mensaje_incorrecto:
          'Incorrecto. Un intervalo de confianza del 95% muestra el rango donde probablemente se encuentra el valor verdadero del parámetro.',
      },
    ],
  },
}
