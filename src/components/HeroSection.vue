<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sparkles } from 'lucide-vue-next'

const mouseX = ref(0)
const mouseY = ref(0)
const scrollY = ref(0)

const handleMouseMove = (e) => {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 20
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 20
}
const handleScroll = () => { scrollY.value = window.scrollY }

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
    
    <!-- Sol/luna de fondo con glow -->
    <div class="absolute top-20 right-[15%] w-40 h-40 rounded-full
            bg-linear-to-br from-slate-100 via-gray-300 to-slate-500
            blur-[2px] opacity-90
            shadow-[0_0_40px_rgba(200,220,255,0.5)] z-0"
      :style="{ transform: `translate(${mouseX * -0.5}px, ${mouseY * -0.5}px)` }"
    >
      <div class="absolute inset-0 rounded-full bg-blue-100/20 blur-3xl scale-150"></div>
    </div>

    <div class="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
      <img 
        src="/img/mountains.webp" 
        alt="Bosque nocturno"
        class="w-full h-auto
               brightness-[0.6] contrast-110 saturate-50
               opacity-80"
      />
    </div>

    <!-- Degradado inferior para fundir el fondo con la sección -->
    <div class="absolute bottom-0 left-0 w-full h-64 
                bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent 
                z-0 pointer-events-none"></div>


    <img 
      src="/hero-forest.png" 
      alt="Forest Background" 
      class="absolute bottom-0 left-0 w-[80%] md:w-[60%] max-w-5xl md:max-w-3xl h-auto z-[6] pointer-events-none 
             mask-[linear-gradient(to_right,black_40%,transparent_100%),linear-gradient(to_top,black_40%,transparent_100%)]
             mask-intersect
             [-webkit-mask-image:linear-gradient(to_right,black_40%,transparent_100%),linear-gradient(to_top,black_40%,transparent_100%)]
             [-webkit-mask-composite:source-in]"
    />

    <!-- Contenido -->
    <div 
      class="relative z-10 max-w-5xl mx-auto px-6 text-center"
      :style="{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 600) }"
    >
      
      <!-- Badge pro -->
      <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full 
                  bg-slate-900/80 border border-orange-500/40 backdrop-blur-md
                  glow-fire">
        <Sparkles class="w-4 h-4 text-amber-400 animate-pulse" />
        <span class="text-sm text-orange-200 font-semibold tracking-wide">
          EXPERIENCIA VR · UNITY · META QUEST
        </span>
      </div>

      <!-- Título épico -->
      <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
        <span class="block text-slate-100 drop-shadow-2xl">CAMPFIRE<br>DEFENCE</span>
      </h1>

      <!-- Tagline -->
      <p class="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12">
        <span class="text-orange-400 font-semibold">Empuña tu espada, tensa tu arco y mantén viva la llama</span>.
      </p>
    </div>

  </section>
</template>