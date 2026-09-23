<script setup>
import { BookOpen, TreePine, Skull, Flame } from 'lucide-vue-next'

const chapters = [
  {
    icon: TreePine,
    number: '01',
    title: 'El Campamento',
    text: 'Te encuentras solo en un bosque olvidado. Solo tú, tu equipo de supervivencia y una fogata que arde como única barrera contra la oscuridad.',
    color: 'from-emerald-500/20 to-emerald-900/10',
    border: 'border-emerald-500/30'
  },
  {
    icon: Skull,
    number: '02',
    title: 'La Amenaza',
    text: 'Al caer la noche, emergen de las sombras. Calaveritas flotantes con ojos rojos que buscan apagar tu fuego y consumir tu alma.',
    color: 'from-red-500/20 to-red-900/10',
    border: 'border-red-500/30'
  },
  {
    icon: Flame,
    number: '03',
    title: 'La Resistencia',
    text: 'Solo los más hábiles sobreviven. Cada oleada es más fuerte. Solo hay una forma de ganar: nunca dejar que la fogata se apague.',
    color: 'from-orange-500/20 to-orange-900/10',
    border: 'border-orange-500/30'
  }
]
</script>

<template>
  <section id="story" class="relative py-32 bg-slate-950/50">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full 
                    bg-slate-900/80 border border-slate-800">
          <BookOpen class="w-3.5 h-3.5 text-orange-400" />
          <span class="text-xs text-slate-400 uppercase tracking-widest font-semibold">La Leyenda</span>
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-slate-100 mb-4 tracking-tight">
          Una Noche <span class="text-orange-500">Interminable</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Tres capítulos que definen tu supervivencia.
        </p>
      </div>

      <!-- Capítulos -->
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="(chapter, i) in chapters" 
          :key="i"
          class="group relative p-8 rounded-3xl overflow-hidden
                 bg-slate-900/60 backdrop-blur-md
                 border hover:scale-[1.02] transition-all duration-500"
          :class="chapter.border"
        >
          <!-- Gradiente decorativo -->
          <div class="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition"
               :class="chapter.color"></div>
          
          <!-- Número gigante de fondo -->
          <span class="absolute -top-4 right-4 text-8xl font-black text-slate-800/50 
                       group-hover:text-slate-700/50 transition select-none">
            {{ chapter.number }}
          </span>

          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 
                        flex items-center justify-center mb-6
                        group-hover:scale-110 transition">
              <component :is="chapter.icon" class="w-7 h-7 text-orange-400" />
            </div>
            
            <h3 class="text-2xl font-bold text-slate-100 mb-3">{{ chapter.title }}</h3>
            <p class="text-slate-400 leading-relaxed text-sm">{{ chapter.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>