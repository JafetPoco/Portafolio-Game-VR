<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projectMeta, timeline } from '../data/timeline'
import TimelineItem from './TimelineItem.vue'
import { Flame, ScrollText } from 'lucide-vue-next'

const scrollProgress = ref(0)
const timelineRef = ref(null)

const updateProgress = () => {
  if (!timelineRef.value) return
  const rect = timelineRef.value.getBoundingClientRect()
  const windowH = window.innerHeight
  const total = rect.height
  const passed = Math.min(Math.max(windowH / 2 - rect.top, 0), total)
  scrollProgress.value = (passed / total) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<template>
  <section id="timeline" class="relative py-32 overflow-hidden">
    <!-- Glow de fondo -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Timeline -->
      <div ref="timelineRef" class="relative">
        
        <!-- Línea base gris -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 
                    bg-slate-800 md:-translate-x-1/2"></div>
        
        <!-- Línea de fuego que se llena con el scroll -->
        <div 
          class="absolute left-6 md:left-1/2 top-0 w-0.5 
                 bg-gradient-to-b from-amber-400 via-orange-500 to-red-600
                 md:-translate-x-1/2 transition-[height] duration-300
                 shadow-[0_0_20px_rgba(251,146,60,0.8)]"
          :style="{ height: scrollProgress + '%' }"
        ></div>

        <!-- Chispa viajera -->
        <div 
          class="absolute left-6 md:left-1/2 w-3 h-3 rounded-full 
                 bg-amber-300 blur-[2px] md:-translate-x-1/2
                 shadow-[0_0_20px_8px_rgba(251,191,36,0.8)] flicker"
          :style="{ top: `calc(${scrollProgress}% - 6px)` }"
        ></div>

        <!-- Items -->
        <div class="space-y-16 md:space-y-24">
          <TimelineItem 
            v-for="(item, i) in timeline" 
            :key="item.id"
            :item="item"
            :index="i"
            :side="i % 2 === 0 ? 'left' : 'right'"
          />
        </div>

        <!-- Fin de la línea: llama final -->
        <div class="relative flex justify-center mt-12">
          <div class="absolute -top-4 flex flex-col items-center">
            <Flame class="w-8 h-8 text-orange-500 flicker" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>