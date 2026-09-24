<script setup>
import { onMounted, ref } from "vue";
import { apiCleant } from "../../composables/onAxios";

const data = ref(null);
onMounted(async () => {
  try {
    const res = await apiCleant.get("/data/data.json");
    data.value = res.data.Books;
  } catch (error) {
    console.log(error.message);
  }
});
</script>

<template>
  <div
    class="bg-[#f4f8ff] p-[148px] flex flex-col justify-between items-center"
  >
    <div class="flex justify-center flex-col flex items-center gap-[10px]">
      <p
        class="font-[innes] sm:text-[30px] w-[200px] sm:w-auto flex text-[20px] font-bold text-[#1B3764]"
      >
        The Chapter Includes
      </p>
      <div class="h-[2px] bg-[#FFCA42] w-[100px]"></div>
    </div>
    <div class="contenr">cdscsdcs</div>
  </div>
</template>
