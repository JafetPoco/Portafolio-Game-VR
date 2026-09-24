<script setup>
import { Flame, Menu, X, Github, Gamepad2 } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Gameplay', href: '/gameplay' },
  { name: 'Proyecto', href: '/project' },
  { name: 'Tecnologías', href: '#tech' },
]
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-orange-500/20">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2 group">
        <Flame class="w-7 h-7 text-orange-500 group-hover:text-amber-400 transition" />
        <span class="text-xl font-bold text-slate-100 tracking-tight">
          Campfire<span class="text-orange-500">Defense</span>
        </span>
      </a>

      <!-- Links desktop -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" 
             class="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="https://github.com/BerlyCS/QuestGame.git" class="p-2 rounded-lg hover:bg-slate-800 transition">
          <Github class="w-5 h-5 text-slate-300" />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-slate-100">
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4">
      <ul class="flex flex-col gap-4">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" @click="isOpen = false" class="text-slate-300 hover:text-orange-400">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>