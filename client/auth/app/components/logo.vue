<template>
  <NuxtLink to="/" class="flex items-center gap-[4px] text-[28px] font-bold text-black">
		<div class="w-[32px] h-[32px] bg-[black] rounded-[4px] flex items-center justify-center"><img src="/star.svg" alt="Logo" class="w-full h-full" /></div>
		 <!-- 💥 -->
		{{ text }}
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		text: String
	});
</script>