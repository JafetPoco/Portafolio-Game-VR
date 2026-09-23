<script setup>
import { Box, Cpu, Headset, Code2, Zap, Boxes } from 'lucide-vue-next'

const tech = [
  { icon: Box, name: 'Unity', desc: 'Motor principal', color: 'text-slate-100' },
  { icon: Cpu, name: 'C#', desc: 'Lógica y gameplay', color: 'text-purple-400' },
  { icon: Headset, name: 'Meta Quest', desc: 'Plataforma VR', color: 'text-blue-400' },
  { icon: Boxes, name: 'XR Toolkit', desc: 'Interacciones', color: 'text-emerald-400' },
  { icon: Zap, name: 'Shader Graph', desc: 'Efectos visuales', color: 'text-amber-400' },
  { icon: Code2, name: 'FMOD', desc: 'Audio espacial', color: 'text-orange-400' },
]
</script>

<template>
  <section id="tech" class="relative py-32 bg-slate-950/50">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="text-center mb-16">
        <span class="text-xs text-orange-400 uppercase tracking-widest font-semibold">Stack Tecnológico</span>
        <h2 class="text-5xl md:text-6xl font-black text-slate-100 mt-4 mb-4 tracking-tight">
          Construido con <span class="text-orange-500">Herramientas Pro</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div 
          v-for="(t, i) in tech" 
          :key="i"
          class="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800
                 hover:border-orange-500/50 hover:bg-slate-900
                 transition-all hover:-translate-y-2 text-center"
        >
          <component :is="t.icon" class="w-8 h-8 mx-auto mb-3 transition group-hover:scale-110" :class="t.color" />
          <p class="font-bold text-slate-100 text-sm">{{ t.name }}</p>
          <p class="text-[10px] text-slate-500 mt-1">{{ t.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>