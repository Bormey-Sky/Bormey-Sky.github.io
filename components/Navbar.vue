<script setup lang="ts"></script>
<template>
  <div class="fixed top-0 left-0 w-full bg-slate-100 z-50">
    <div class="flex justify-center items-center p-4">
      <nav class="space-x-8 navbar-text font-mono">
        <NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-300">About</NuxtLink>
        <NuxtLink to="#projects" class="hover:text-blue-300">Projects</NuxtLink>
        <NuxtLink to="/Notebook" class="hover:text-blue-300">Notebook</NuxtLink>
      </nav>
    </div>
  </div>
</template>
<style scoped></style>
