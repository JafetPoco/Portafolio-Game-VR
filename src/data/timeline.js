export const projectMeta = {
  title: 'Campfire Defense',
  subtitle: 'Cómo nació, creció y sobrevivió una idea',
  course: 'Desarrollo de Videojuegos VR',
  author: 'Tu Nombre',
  date: '2026',
}

export const timeline = [
  {
    id: 'ideacion',
    phase: 'Fase 01',
    title: 'Lluvia de Ideas',
    status: 'completed',
    icon: 'Lightbulb',
    summary:
      'Sesión inicial de brainstorming para definir la temática y mecánicas del juego.',
    details: {
      objetivos: [
        'Definir el núcleo de gameplay',
        'Establecer mecanicas principales y secundarias',
        'Seleccionar plataforma de programación',
      ],
      herramientas: ['Miro'],
    },
    links: [
      { label: 'Tablero de lluvia de ideas', url: 'https://miro.com/app/board/uXjVHs7F_F4=/?share_link_id=404393638097', icon: 'ExternalLink' }
    ],
    media: [], // sin imágenes aún
  },
  {
    id: 'historyTelling',
    phase: 'Fase 02',
    title: 'Storytelling',
    status: 'completed',
    icon: 'NotebookPen',
    summary:
      'Definición de la historia, personajes y ambientación del juego.',
    details: {
      objetivos: [
        'Crear un lore básico para el juego',
        'Establecer la ambientación y estética visual',
      ],
    },
    herramientas: ['Google Docs'],
    links: [
      { label: 'Documento de historia', url: 'https://docs.google.com/document/d/1gvziY-4bjs9sXpljJzI7FGN54UeXLbk96L39Kt09NQ8', icon: 'ExternalLink' }
    ],
    media: [],
  },
  {
    id: 'historyBoard',
    phase: 'Fase 03',
    title: 'Storyboard',
    status: 'completed',
    icon: 'PencilRuler',
    summary:
      'Creación de un storyboard para visualizar las escenas y mecánicas del juego.',
    details: {
      objetivos: [
        'Visualizar la progresión de oleadas de enemigos',
        'Definir la interacción del jugador con el entorno',
        'Establecer la narrativa visual del juego',
      ],
    },
    links: [],
    media: [
      { type: 'image', src: '/img/proto-1.png', caption: 'Primera escena en Unity' },
      { type: 'image', src: '/img/proto-2.png', caption: 'Sistema de oleadas' },
    ],
  },
  {
    id: 'primerPrototipo',
    phase: 'Fase 04',
    title: 'Primer Prototipo',
    status: 'completed',
    icon: 'Box',
    summary:
      'Implementación de mecánicas básicas de combate y defensa, incluyendo el arco y la espada.',
    details: {
      objetivos: [
        'Implementar mecánicas de combate con arco y espada',
        'Crear un sistema de oleadas de enemigos',
        'Usar el hand-tracking para interacción con el entorno',
      ],
      herramientas: ['Unity', 'Oculus Integration', 'Blender'],
    },
    links: [
      { label: 'Video Prototipo', url: 'https://drive.google.com/file/d/1Vafj8JVyAcd5DlUaNHvuQLjHiZ1iJv6Y/view?usp=sharing', icon: 'ExternalLink' }
    ],
    media: [
      { type: 'video', src: '/videos/combat-demo.mp4', caption: 'Demo de combate' },
      { type: 'image', src: '/img/arc-physics.png', caption: 'Física del arco' },
    ],
  },
  {
    id: 'pruebasUsuario',
    phase: 'Fase 05',
    title: 'Pruebas de Usuario',
    status: 'in-progress',
    icon: 'Users',
    summary:
      'Realización de pruebas de usuario para evaluar la jugabilidad y la experiencia en VR.',
    details: {
      objetivos: [
        'Recoger feedback de jugadores sobre la jugabilidad',
        'Identificar problemas de confort y accesibilidad en VR',
        'Ajustar mecánicas y controles según el feedback recibido',
      ],
      resultados: [
        'Falta de emoción por parte de los jugadores',
        'Problemas con el hand-tracking en el uso del arco',
        'El uso del hacha con la mano derecha presenta errores a diferencia de la mano izquierda',
      ],
    },
    links: [
      { label: 'Usuario 1', url: 'https://drive.google.com/file/d/1ad2_ZQyGAgiz7AGkXsOzQ6I1RxuY3X4c/view?usp=sharing', icon: 'Youtube' },
      { label: 'Usuario 2', url: 'https://drive.google.com/file/d/1_q537R7HC63kxGU3D-uhZ89LSgg4mCb2/view?usp=sharing', icon: 'Youtube' },
      { label: 'Usuario 3', url: 'https://drive.google.com/file/d/13x6Ljjc4jJqTsGcS-GBISEaXY1OQzFOB/view?usp=sharing', icon: 'Youtube' },
    ],
    media: [
      { type: 'image', src: '/img/audio-mixer.png', caption: 'Mixer de FMOD' },
    ],
  },
  {
    id: 'entrega',
    phase: 'Fase 06',
    title: 'Entrega Final',
    date: 'Junio 2025',
    status: 'pending',
    icon: 'Trophy',
    summary:
      'Build final para Meta Quest, presentación en clase y publicación del portafolio.',
    details: {
      objetivos: [
        'Build APK optimizada',
        'Video trailer de 60s',
        'Publicación del portafolio',
      ],
    },
    links: [],
    media: [],
  },
]