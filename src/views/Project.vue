<script setup>
import NavBar from '../components/NavBar.vue'
import ForestBackground from '../components/ForestBackground.vue'
import ProjectTimeline from '../components/ProjectTimeline.vue'
import { ArrowLeft, Download, Github, ExternalLink, Flame } from 'lucide-vue-next'
import { projectMeta } from '../data/timeline'
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 overflow-x-hidden">
    <ForestBackground />
    <NavBar />

    <main class="relative z-10 pt-32">
      <!-- Hero del proyecto -->
      <section class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h1 class="text-5xl md:text-7xl font-black text-slate-100 tracking-tight mb-4">
              {{ projectMeta.title }}
            </h1>
            <p class="text-lg text-slate-400 max-w-2xl">
              {{ projectMeta.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <ProjectTimeline />
    </main>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Curso</p>
        <p class="text-sm font-bold text-slate-100">{{ projectMeta.course }}</p>
      </div>
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Autor</p>
        <p class="text-sm font-bold text-slate-100">{{ projectMeta.author }}</p>
      </div>
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Año</p>
        <p class="text-sm font-bold text-slate-100">{{ projectMeta.date }}</p>
      </div>
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Fases</p>
        <p class="text-sm font-bold text-slate-100">6 hitos</p>
      </div>
    </div>
    <!-- Info rápida -->
  </div>
</template>