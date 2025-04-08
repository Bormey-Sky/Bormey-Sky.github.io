<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(false);
const activeFace = ref("images/face-1.png");
const aboutSection = ref<HTMLElement | null>(null);
const faceSwap = ["images/face-1.png", "images/face-2.png"];

function cycleFace() {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * faceSwap.length);
    activeFace.value = faceSwap[randomIndex];
  }, 700);
}

onMounted(() => {
  cycleFace();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elements = document.querySelectorAll(".about-text");
  elements.forEach((element) => observer.observe(element));
});
</script>

<template>
  <div id="about" ref="aboutSection" class="min-h-screen w-screen bg-slate-100">
    <div class="grid grid-cols-2 lg:grid-cols-3">
      <div class="col-span-3 h-[10rem] ml-10">
        <div class="about-text">About</div>
      </div>
      <div
        class="col-span-1 bg-blue-300 w-fit pr-12 lg:pr-36 about-text ml-10 md:mt-8"
      >
        me
      </div>
      <div class="cols-span-3 md:mt-36 -ml-4 mt-30 mr-12">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
      <div class="col-span-1 hidden lg:block md:scale-0.5">
        <NuxtImg src="images/portrait.jpeg" class="h-[30rem]" />
      </div>
    </div>

    <div
      class="relative -mt-24  bottom-[5rem] left-1/2 -translate-x-1/2 flex transition-all duration-1000 animate-float-in-bottom"
      :class="
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[5%] opacity-0'
      "
    >
      <!-- Face -->
      <NuxtImg :src="activeFace" class="h-[20rem]" />

      <!-- Blue div ledge -->
      <div
        class="absolute top-[170px] left-16 w-[12rem] h-[5rem] z-10 bg-blue-300"
      >
        <!-- Left hand -->
        <div
          class="absolute -top-[14px] left-[15%] w-[30px] h-[20px] bg-orange-200 z-20"
        ></div>

        <!-- Right hand -->
        <div
          class="absolute -top-[14px] right-[15%] w-[30px] h-[20px] bg-orange-200 z-20"
        ></div>
      </div>
    </div>
    <div class="w-full h-[19rem] -mt-57 bg-slate-100 relative z-20"></div>
  </div>

  
</template>
