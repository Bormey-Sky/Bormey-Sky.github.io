<script setup lang="ts">
import { ref, onMounted } from "vue";
import Projects from "./projects.vue";
import About from "./about.vue";


const mainSection = ref<HTMLElement | null>(null);
const animationKey = ref(0);

onMounted(() => {
  if (!mainSection.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        animationKey.value++;
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(mainSection.value);
});
</script>


<template>
  <div class="relative w-screen h-screen overflow-hidden bg-slate-100 scroll-smooth">
    <!-- overlay on top -->
    <div class="absolute top-0 left-0 w-full h-[30vh] bg-slate-100 z-20"></div>
    <div class="absolute bottom-0 left-0 w-full h-[30vh] bg-slate-100 z-20">
      <div class="pt-12 pl-8 pr-8">
        <Typewriter 
      phrase="This site is where works in progress are accepted"
      :typo="false"
      :typeSpeed="80"
      :restart="true"
      class="text-center page-description"
      />
      </div>
    </div>

    <!-- Centered text animating behind curtains -->
    <div ref="mainSection" class="h-full flex justify-center items-center z-10 relative">
      <div
      :key="animationKey"
        class="grid grid-rows-2 text-center name-popup font-mono
          text-[80px] sm:text-[100px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[200px]
          leading-none"
      >
        <div class="animate-float-in-top">Bormey</div>
        <div class="animate-float-in-bottom">Chanchem</div>
      </div>
    </div>
  </div>
  <About />
  <Projects />
</template>


<style scoped></style>
