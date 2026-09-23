<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Play, Skull, Flame, Sword, Target, ChevronDown, Sparkles, Volume2 } from 'lucide-vue-next'

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

    <!-- Silueta de árboles (montañas) - AHORA DETRÁS (z-0) -->
    <svg class="absolute bottom-0 left-0 w-full h-64 text-slate-950 z-0" 
         viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="currentColor" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>

    <!-- Imagen del bosque - ESQUINA INFERIOR IZQUIERDA, DIFUMINADA Y CON DEGRADADO -->
    <img 
      src="/hero-forest.png" 
      alt="Forest Background" 
      class="absolute bottom-0 left-0 w-[80%] md:w-[60%] max-w-5xl md:max-w-3xl h-auto z-6 pointer-events-none 
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