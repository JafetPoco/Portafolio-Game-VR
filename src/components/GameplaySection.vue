<script setup>
import { 
  Sword, Flame, Skull, Gem, Hand, Footprints, 
  Moon, Sparkles, ArrowRight
} from 'lucide-vue-next'

const pillars = [
  {
    id: 'objective',
    icon: Gem,
    title: 'Protege tu tesoro',
    desc: 'El último bastión frente a las oleadas.',
    color: 'text-amber-400',
    border: 'hover:border-amber-500/60',
    imgAlt: 'Tesoro brillando en el centro del campamento rodeado de tiendas y una fogata'
  },
  {
    id: 'campfire',
    icon: Flame,
    title: 'Mantén la fogata',
    desc: 'Sin luz, la oscuridad te consume.',
    color: 'text-orange-400',
    border: 'hover:border-orange-500/60',
    imgAlt: 'Fogata central ardiente con leña apilada alrededor y partículas de fuego elevándose'
  },
  {
    id: 'threat',
    icon: Skull,
    title: 'Sobrevive al amanecer',
    desc: 'Cada noche trae más esqueletos.',
    color: 'text-red-400',
    border: 'hover:border-red-500/60',
    imgAlt: 'Siluetas de esqueletos emergiendo de la oscuridad del bosque con ojos rojos brillantes'
  },
]

const vrFeatures = [
  { icon: Hand, label: 'Hand Tracking',  desc: 'Recoge y manipula objetos con tus manos.' },
  { icon: Sword, label: 'Combate físico', desc: 'Movimientos reales con espada, hacha y arco.' },
  { icon: Footprints, label: 'Movimiento libre', desc: 'Explora tu campamento a tu ritmo.' },
  { icon: Flame, label: 'Aviva la fogata', desc: 'Recoge leña y mantén la luz.' },
  { icon: Skull, label: 'Detecta enemigos', desc: 'Identifica de dónde vienen.' },
  { icon: Gem, label: 'Defiende el tesoro', desc: 'Actúa antes de que lleguen.' },
]
</script>

<template>
  <section id="gameplay" class="relative py-32 overflow-hidden">
    
    <!-- Glow de fondo -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
                bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      
      <!-- ==================== HEADER ==================== -->
      <div class="text-center mb-20">
        <span class="inline-flex items-center gap-2 text-xs text-orange-400 uppercase tracking-widest font-semibold">
          <Sword class="w-4 h-4" />
          Gameplay
        </span>
        <h2 class="text-5xl md:text-7xl font-black text-slate-100 mt-4 mb-6 tracking-tighter leading-none">
          Defiende.<br>
          <span class="text-orange-500">Protege.</span><br>
          Sobrevive.
        </h2>
        <p class="text-slate-400 max-w-xl mx-auto">
          Tu campamento es el último bastión frente a las oleadas de esqueletos.
        </p>
      </div>

      <!-- ==================== 3 PILARES VISUALES ==================== -->
      <div class="grid md:grid-cols-3 gap-6 mb-24">
        <div 
          v-for="pillar in pillars" 
          :key="pillar.id"
          class="group relative rounded-3xl overflow-hidden
                 bg-slate-900/60 border border-slate-800
                 transition-all duration-500 hover:-translate-y-2
                 cursor-pointer"
          :class="pillar.border"
        >
          <!-- Imagen de fondo de la card (REEMPLAZAR src) -->
          <div class="relative aspect-[4/5] overflow-hidden">
            <!-- Overlay degradado -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/10 
                        opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <!-- Contenido sobre la imagen -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-700
                          group-hover:border-orange-500/60 transition">
                <component :is="pillar.icon" class="w-5 h-5" :class="pillar.color" />
              </div>
            </div>
            <h3 class="text-2xl font-black text-slate-100 tracking-tight mb-1">
              {{ pillar.title }}
            </h3>
            <p class="text-sm text-slate-400">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ==================== SECCIÓN VR INTERACTIVA ==================== -->
      <div class="mb-24">
        <!-- Sub-header con imagen sugerida a un lado -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
          
          <!-- Texto -->
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6">
              <Sparkles class="w-4 h-4 text-cyan-400 animate-pulse" />
              <span class="text-xs text-cyan-200 font-semibold tracking-wide uppercase">
                Experiencia VR
              </span>
            </div>
            <h3 class="text-4xl md:text-5xl font-black text-slate-100 tracking-tighter mb-4 leading-none">
              Una experiencia<br>
              <span class="text-cyan-400">creada para VR</span>
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Hand Tracking, combate físico y movimiento libre. Cada acción se siente real.
            </p>
          </div>

          <!-- IMAGEN SUGERIDA: Persona con headset VR en un entorno oscuro con fogata -->
          <div class="relative aspect-video rounded-3xl overflow-hidden
                      bg-slate-900 border border-slate-800
                      shadow-[0_0_60px_rgba(6,182,212,0.15)]">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            <!-- Glow decorativo -->
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 
                        bg-cyan-500/30 blur-[60px] rounded-full"></div>
          </div>
        </div>

        <!-- Grid de features VR (más compactas) -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div 
            v-for="(feature, i) in vrFeatures" 
            :key="i"
            class="group relative p-5 rounded-2xl 
                   bg-slate-900/50 border border-slate-800
                   hover:border-orange-500/50 hover:bg-slate-900/80 
                   hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800 
                          group-hover:border-orange-500/50 transition">
                <component :is="feature.icon" class="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-slate-100 mb-1">{{ feature.label }}</h4>
                <p class="text-xs text-slate-500 leading-relaxed">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== CTA CINEMATOGRÁFICO ==================== -->
      <div class="relative rounded-3xl overflow-hidden
                  border border-slate-800">
        

        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 
                    bg-orange-500/30 blur-[100px] rounded-full"></div>

        <div class="relative text-center p-16">
          <Moon class="w-10 h-10 text-slate-400 mx-auto mb-6" />
          
          <p class="text-3xl md:text-5xl font-black text-slate-100 tracking-tighter mb-3">
            La noche avanza.
          </p>
          <p class="text-3xl md:text-5xl font-black text-orange-500 tracking-tighter mb-8">
            ¿Sobrevivirás al amanecer?
          </p>
        </div>
      </div>

    </div>
  </section>
</template>