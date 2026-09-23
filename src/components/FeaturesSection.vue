<script setup>
import { Sword, Target, Flame, Skull, Moon, Waves } from 'lucide-vue-next'

const features = [
  {
    icon: Sword,
    title: 'Combate con Espada',
    desc: 'Corte cuerpo a cuerpo a las calaveritas que se acerquen demasiado a tu fogata.',
    color: 'orange'
  },
  {
    icon: Target,
    title: 'Arco a Distancia',
    desc: 'Elimina enemigos desde lejos antes de que lleguen a tu campamento.',
    color: 'amber'
  },
  {
    icon: Flame,
    title: 'Fogata Vital',
    desc: 'Tu fogata es tu única fuente de luz y vida. ¡No dejes que se apague!',
    color: 'red'
  },
  {
    icon: Skull,
    title: 'Calaveritas',
    desc: 'Enemigos espectrales que aparecen en oleadas cada vez más difíciles.',
    color: 'red'
  },
  {
    icon: Moon,
    title: 'Ambiente Nocturno',
    desc: 'Sumérgete en un bosque oscuro con atmósfera inmersiva en VR.',
    color: 'slate'
  },
  {
    icon: Waves,
    title: 'Oleadas Infinitas',
    desc: 'Sobrevive el mayor tiempo posible y rompe tu propio récord.',
    color: 'orange'
  }
]
</script>

<template>
  <section id="features" class="py-24 bg-slate-950">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Características del <span class="text-orange-500">Juego</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Un survival en realidad virtual donde cada segundo cuenta.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(feature, i) in features" :key="i"
             class="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 
                    hover:border-orange-500/50 hover:bg-slate-900 
                    transition-all duration-300 hover:-translate-y-2">
          <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4
                      group-hover:bg-orange-500/20 transition">
            <component :is="feature.icon" class="w-6 h-6 text-orange-400" />
          </div>
          <h3 class="text-xl font-bold text-slate-100 mb-2">{{ feature.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>