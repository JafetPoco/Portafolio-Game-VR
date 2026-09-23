<script setup>
import { ref, computed } from 'vue'
import { 
  Lightbulb, Pencil, Box, Sword, Sparkles, Trophy, NotebookPen, PencilRuler, Users,
  ChevronDown, ExternalLink, FileText, Github, Youtube,
  PenSquare, CheckCircle2, Loader2, Circle, Calendar, Image as ImageIcon
} from 'lucide-vue-next'
import TimelineGallery from './TimelineGallery.vue'

const props = defineProps({
  item: { type: Object, required: true },
  index: { type: Number, required: true },
  side: { type: String, default: 'right' },
})

const isOpen = ref(false)

const iconMap = { Lightbulb, Pencil, Box, Sword, Sparkles, Trophy, NotebookPen, PencilRuler, Users }
const linkIconMap = { ExternalLink, FileText, Github, Youtube, PenSquare }

const Icon = computed(() => iconMap[props.item.icon] || Circle)

const statusConfig = computed(() => {
  const map = {
    completed:   { label: 'Completado',  color: 'emerald', icon: CheckCircle2 },
    'in-progress': { label: 'En Progreso', color: 'amber',   icon: Loader2 },
    pending:     { label: 'Pendiente',   color: 'slate',   icon: Circle },
  }
  return map[props.item.status] || map.pending
})

const StatusIcon = computed(() => statusConfig.value.icon)
const statusColor = computed(() => statusConfig.value.color)

const hasDetails = computed(() => {
  const d = props.item.details || {}
  return d.objetivos?.length || d.decisiones?.length || d.aprendizajes?.length 
      || d.retos?.length || d.herramientas?.length
})

// Clases de color dinámicas (Tailwind necesita strings literales)
const colorClasses = {
  emerald: {
    dot: 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    ring: 'group-hover:border-emerald-500/50',
  },
  amber: {
    dot: 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    ring: 'group-hover:border-amber-500/50',
  },
  slate: {
    dot: 'bg-slate-600 border-2 border-slate-700',
    badge: 'bg-slate-800/60 text-slate-400 border-slate-700',
    ring: 'group-hover:border-slate-600',
  },
}
const cc = computed(() => colorClasses[statusColor.value])
</script>

<template>
  <div 
    class="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
    :class="side === 'right' ? 'md:flex-row-reverse' : ''"
  >
    <!-- ============ CARD ============ -->
    <div 
      class="w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0"
      :class="side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'"
    >
      <div 
        class="group relative rounded-2xl bg-slate-900/70 backdrop-blur-md
               border border-slate-800 transition-all duration-500
               hover:bg-slate-900 hover:-translate-y-1 overflow-hidden"
        :class="cc.ring"
      >
        <!-- Barra superior con gradiente -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r 
                    from-transparent via-orange-500/50 to-transparent opacity-0 
                    group-hover:opacity-100 transition"></div>

        <div class="p-6">
          <!-- Header -->
          <div 
            class="flex items-start gap-4 mb-4"
            :class="side === 'left' ? 'md:flex-row-reverse' : ''"
          >
            <!-- Icono -->
            <div class="shrink-0 w-12 h-12 rounded-xl bg-slate-950 border border-slate-800
                        flex items-center justify-center
                        group-hover:scale-110 transition">
              <component :is="Icon" class="w-6 h-6 text-orange-400" />
            </div>

            <div class="flex-1 min-w-0">
              <!-- Fase + Status -->
              <div 
                class="flex items-center gap-2 mb-1 flex-wrap"
                :class="side === 'left' ? 'md:justify-end' : ''"
              >
                <span class="text-[10px] font-mono text-orange-400/80 uppercase tracking-widest">
                  {{ item.phase }}
                </span>
                <span 
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full 
                         text-[10px] font-bold border"
                  :class="cc.badge"
                >
                  <StatusIcon 
                    class="w-3 h-3" 
                    :class="item.status === 'in-progress' ? 'animate-spin' : ''" 
                  />
                  {{ statusConfig.label }}
                </span>
              </div>

              <!-- Título -->
              <h3 class="text-xl font-bold text-slate-100 leading-tight">
                {{ item.title }}
              </h3>
            </div>
          </div>

          <!-- Resumen -->
          <p class="text-sm text-slate-400 leading-relaxed mb-4">
            {{ item.summary }}
          </p>

          <!-- Botón expandir -->
          <button 
            v-if="hasDetails || item.links?.length || item.media?.length"
            @click="isOpen = !isOpen"
            class="inline-flex items-center gap-2 text-xs font-semibold 
                   text-orange-400 hover:text-orange-300 transition
                   px-3 py-1.5 rounded-lg hover:bg-orange-500/10"
          >
            {{ isOpen ? 'Ocultar detalles' : 'Ver detalles' }}
            <ChevronDown 
              class="w-3.5 h-3.5 transition-transform duration-300"
              :class="isOpen ? 'rotate-180' : ''"
            />
          </button>
        </div>

        <!-- ============ EXPANSIÓN ============ -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[2000px] opacity-100"
          leave-from-class="max-h-[2000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-if="isOpen" class="overflow-hidden border-t border-slate-800">
            <div class="p-6 space-y-5 bg-slate-950/50">
              
              <!-- Objetivos -->
              <div v-if="item.details?.objetivos?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                  Objetivos
                </h4>
                <ul 
                  class="space-y-1.5 text-sm text-slate-300"
                  :class="side === 'left' ? 'md:text-right' : ''"
                >
                  <li v-for="(o, i) in item.details.objetivos" :key="i"
                      class="flex items-start gap-2"
                      :class="side === 'left' ? 'md:flex-row-reverse' : ''">
                    <span class="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>{{ o }}</span>
                  </li>
                </ul>
              </div>

              <!-- Decisiones -->
              <div v-if="item.details?.decisiones?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                  Decisiones clave
                </h4>
                <ul class="space-y-1.5 text-sm text-slate-300"
                    :class="side === 'left' ? 'md:text-right' : ''">
                  <li v-for="(d, i) in item.details.decisiones" :key="i"
                      class="flex items-start gap-2"
                      :class="side === 'left' ? 'md:flex-row-reverse' : ''">
                    <span class="text-purple-500 mt-1 shrink-0">◆</span>
                    <span>{{ d }}</span>
                  </li>
                </ul>
              </div>

              <!-- Resultados -->
              <div v-if="item.details?.resultados?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                  Resultados Obtenidos
                </h4>
                <ul class="space-y-1.5 text-sm text-slate-300"
                    :class="side === 'left' ? 'md:text-right' : ''">
                  <li v-for="(d, i) in item.details.resultados" :key="i"
                      class="flex items-start gap-2"
                      :class="side === 'left' ? 'md:flex-row-reverse' : ''">
                    <span class="text-purple-500 mt-1 shrink-0">◆</span>
                    <span>{{ d }}</span>
                  </li>
                </ul>
              </div>

              <!-- Aprendizajes -->
              <div v-if="item.details?.aprendizajes?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  Aprendizajes
                </h4>
                <ul class="space-y-1.5 text-sm text-slate-300"
                    :class="side === 'left' ? 'md:text-right' : ''">
                  <li v-for="(a, i) in item.details.aprendizajes" :key="i"
                      class="flex items-start gap-2"
                      :class="side === 'left' ? 'md:flex-row-reverse' : ''">
                    <span class="text-emerald-500 mt-1 shrink-0">✓</span>
                    <span>{{ a }}</span>
                  </li>
                </ul>
              </div>

              <!-- Retos -->
              <div v-if="item.details?.retos?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">
                  Retos
                </h4>
                <ul class="space-y-1.5 text-sm text-slate-300"
                    :class="side === 'left' ? 'md:text-right' : ''">
                  <li v-for="(r, i) in item.details.retos" :key="i"
                      class="flex items-start gap-2"
                      :class="side === 'left' ? 'md:flex-row-reverse' : ''">
                    <span class="text-red-500 mt-1 shrink-0">!</span>
                    <span>{{ r }}</span>
                  </li>
                </ul>
              </div>

              <!-- Herramientas -->
              <div v-if="item.details?.herramientas?.length" :class="side === 'left' ? 'md:text-right' : ''">
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Herramientas
                </h4>
                <div 
                  class="flex flex-wrap gap-2"
                  :class="side === 'left' ? 'md:justify-end' : ''"
                >
                  <span 
                    v-for="t in item.details.herramientas" :key="t"
                    class="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 
                           text-xs text-slate-300"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>

              <!-- Enlaces -->
              <div v-if="item.links?.length">
                <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                  Enlaces
                </h4>
                <div class="flex flex-wrap gap-2"
                     :class="side === 'left' ? 'md:justify-end' : ''">
                  <a 
                    v-for="(link, i) in item.links" :key="i"
                    :href="link.url" target="_blank" rel="noopener"
                    class="group/link inline-flex items-center gap-2 px-3 py-2 rounded-lg
                           bg-slate-900 border border-slate-800
                           hover:border-orange-500/60 hover:bg-slate-800
                           text-xs font-semibold text-slate-200 transition"
                  >
                    <component 
                      :is="linkIconMap[link.icon] || ExternalLink" 
                      class="w-3.5 h-3.5 text-orange-400 group-hover/link:scale-110 transition" 
                    />
                    {{ link.label }}
                  </a>
                </div>
              </div>

              <!-- Galería -->
              <TimelineGallery 
                v-if="item.media?.length" 
                :media="item.media" 
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- ============ NODO CENTRAL ============ -->
    <div 
      class="absolute left-6 md:left-1/2 top-6 md:-translate-x-1/2 z-10"
    >
      <div class="relative">
        <!-- Aro pulsante -->
        <div 
          class="absolute inset-0 rounded-full animate-ping opacity-40"
          :class="cc.dot"
        ></div>
        <!-- Punto -->
        <div 
          class="relative w-5 h-5 rounded-full border-4 border-slate-950"
          :class="cc.dot"
        ></div>
      </div>
    </div>

    <!-- Espacio simétrico (desktop) -->
    <div class="hidden md:block md:w-[calc(50%-3rem)]"></div>
  </div>
</template>