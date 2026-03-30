<template>
	<div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
		<Header />

		<main class="flex-1 overflow-auto">
			<slot />
		</main>
	</div>
</template>
