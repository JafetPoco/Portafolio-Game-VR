<script setup>
import { onMounted, ref } from 'vue'

const stars = ref([])
const fireflies = ref([])

onMounted(() => {
  // Generar estrellas
  stars.value = Array.from({ length: 80 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 60,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }))

  // Generar luciérnagas
  fireflies.value = Array.from({ length: 15 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
    size: Math.random() * 4 + 2,
  }))
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Cielo degradado -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black"></div>
    
    <!-- Nebulosa púrpura -->
    <div class="absolute top-0 left-1/4 w-[800px] h-[800px] 
                bg-purple-900/10 rounded-full blur-[150px]"></div>
    <div class="absolute top-1/4 right-0 w-[600px] h-[600px] 
                bg-orange-900/10 rounded-full blur-[120px]"></div>

    <!-- Estrellas -->
    <div
      v-for="(star, i) in stars"
      :key="`star-${i}`"
      class="absolute rounded-full bg-white animate-pulse"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
        opacity: 0.6,
      }"
    />

    <!-- Luciérnagas -->
    <div
      v-for="(fly, i) in fireflies"
      :key="`fly-${i}`"
      class="absolute rounded-full bg-amber-400 float-slow"
      :style="{
        left: `${fly.x}%`,
        top: `${fly.y}%`,
        width: `${fly.size}px`,
        height: `${fly.size}px`,
        animationDelay: `${fly.delay}s`,
        animationDuration: `${fly.duration}s`,
        boxShadow: '0 0 12px 3px rgba(251, 191, 36, 0.6)',
      }"
    />

    <!-- Grid sutil -->
    <div class="absolute inset-0 grid-bg opacity-40"></div>

    <!-- Viñeta -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
  </div>
</template>