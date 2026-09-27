<script setup>
import { onMounted, ref } from "vue";
import { apiCleant } from "../../composables/onAxios";

const data = ref(null);
onMounted(async () => {
  try {
    const res = await apiCleant.get("/data/data.json");
    data.value = res.data.dis;
  } catch (error) {
    console.log(error.message);
  }
});
</script>

<template>
  <div
    class="bg-[#f4f8ff] p-[148px] flex flex-col justify-between items-center gap-[90px]"
  >
    <div class="flex justify-center flex-col flex items-center gap-[10px]">
      <p
        class="font-[innes] sm:text-[30px] w-[200px] sm:w-auto flex text-[20px] font-bold text-[#1B3764]"
      >
        The Chapter Includes
      </p>
      <div class="h-[2px] bg-[#FFCA42] w-[100px]"></div>
    </div>
    <div class="contenr grid grid-cols-2 gap-[20px]">
      <div v-for="item in data" :key="item.id" class="flex w-full group">
        <div class="p-[50px] bg-white grow flex flex-col gap-[20px] transition-all duration-200 group-hover:shadow-2xl group-hover:bg-[#FFCA42]">
          <p
            class="text-[#1B3764] transition-all duration-200 text-[24px] font-[inner] font-bold group-hover:bg-[#FFCA42]"
          >
            {{ item.title }}
          </p>
          <p class="text-[#969AA0] text-[19px] group-hover:text-[#434446]">
            {{ item.discription }}
          </p>
          <div class="flex gap-[20px]">
            <div class="pages flex gap-[10px] items-center">
              <div
                class="h-[15px] w-[15px] rounded-[50%] bg-[#FFCA42] group-hover:bg-[#1B3764]"
              ></div>
              <p
                class="text-[#1B3764] text-[22px] font-[innes] font-[600] group-hover:text-[#1B3764]"
              >
                Pages:
              </p>
              {{ item.pages }}
            </div>
            <div class="pages flex gap-[10px] items-center">
              <div
                class="h-[15px] w-[15px] rounded-[50%] bg-[#FFCA42] group-hover:bg-[#1B3764]"
              ></div>
              <p
                class="text-[#1B3764] text-[22px] font-[innes] font-[600] group-hover:text-[#1B3764]"
              >
                Length:
              </p>
              {{ item.length }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
