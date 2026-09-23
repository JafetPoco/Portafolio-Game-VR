<script setup>
import { ref } from 'vue'
import { X, ZoomIn, PlayCircle } from 'lucide-vue-next'

const props = defineProps({
  media: { type: Array, required: true },
})

const active = ref(null)

const open = (m) => { active.value = m }
const close = () => { active.value = null }
</script>

<template>
  <div>
    <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
      Galería ({{ media.length }})
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <button
        v-for="(m, i) in media" :key="i"
        @click="open(m)"
        class="group relative aspect-video rounded-xl overflow-hidden
               bg-slate-900 border border-slate-800
               hover:border-orange-500/60 transition"
      >
        <img 
          v-if="m.type === 'image'"
          :src="m.src" 
          :alt="m.caption"
          class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div 
          v-else
          class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950"
        >
          <PlayCircle class="w-10 h-10 text-orange-400" />
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent
                    opacity-0 group-hover:opacity-100 transition flex items-end p-3">
          <div class="flex items-center gap-2">
            <ZoomIn class="w-3.5 h-3.5 text-orange-400" />
            <span class="text-[10px] text-slate-200 font-semibold truncate">
              {{ m.caption }}
            </span>
          </div>
        </div>
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-150"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="active"
          @click="close"
          class="fixed inset-0 z-[999] bg-slate-950/90 backdrop-blur-md 
                 flex items-center justify-center p-6"
        >
          <button 
            @click="close"
            class="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 
                   border border-slate-800 hover:border-orange-500/60 transition"
          >
            <X class="w-5 h-5 text-slate-300" />
          </button>

          <div @click.stop class="max-w-4xl w-full">
            <img 
              v-if="active.type === 'image'"
              :src="active.src" 
              :alt="active.caption"
              class="w-full rounded-2xl border border-slate-800 
                     shadow-[0_0_80px_rgba(251,146,60,0.2)]"
            />
            <video 
              v-else
              :src="active.src" 
              controls autoplay
              class="w-full rounded-2xl border border-slate-800"
            ></video>
            <p class="text-center text-slate-400 text-sm mt-4">{{ active.caption }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>