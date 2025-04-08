<script setup lang="ts"></script>

<template>
  <div
    id="projects"
    class="pt-16 pb-10 bg-slate-100 min-h-screen scroll-smooth"
  >
    <div class="page-title text-center p-10">
      <span class="page-title-i">Previous</span> Projects
      
    </div>
    <div class="w-full flex justify-center">
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
      >

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        
      </div>
    </div>
   
    <div class="mt-12 -mb-18">
        <Typewriter phrase="Passion Project" :typo="true" :restart="true"  class="min-h-[10rem] page-title !text-[220%] text-center" />
    </div>
    <div class="w-screen overflow-hidden relative">
      <div class="animate-scroll-left-infinite flex gap-4 w-max">
        <PassionProjectCard />
        <PassionProjectCard />
        <PassionProjectCard />

        <PassionProjectCard />
        <PassionProjectCard />
        <PassionProjectCard />

        <PassionProjectCard />
        <PassionProjectCard />
        <PassionProjectCard />

        <PassionProjectCard />
        <PassionProjectCard />
        <PassionProjectCard />
      </div>
    </div>
  </div>
</template>
