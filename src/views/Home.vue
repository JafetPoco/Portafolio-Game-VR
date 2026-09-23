<script setup>
import NavBar from '../components/NavBar.vue'
import ForestBackground from '../components/ForestBackground.vue'
import HeroSection from '../components/HeroSection.vue'
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 overflow-x-hidden">
    <ForestBackground />
    <NavBar />
    <main class="relative z-10">
      <HeroSection />
    </main>
  </div>
</template>