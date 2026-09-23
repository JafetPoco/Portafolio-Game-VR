<template>
  <div class="relative min-h-screen bg-slate-950 overflow-x-hidden">
    <ForestBackground />
    <NavBar />
    <main class="relative z-10">
      <GameplaySection />
    </main>
  </div>
</template>
<script setup>
import NavBar from '../components/NavBar.vue'
import ForestBackground from '../components/ForestBackground.vue'
import GameplaySection from '../components/GameplaySection.vue'
</script>