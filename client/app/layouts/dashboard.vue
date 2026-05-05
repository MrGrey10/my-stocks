<template>
	<div class="shell">
		<AppSidebar />
		<div class="shell-body">
			<Header />
			<main class="shell-content">
				<div class="anim-in" :key="$route.path">
					<slot />
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
.shell {
	min-height: 100vh;
	background: var(--bg);
	display: flex;
}

.shell-body {
	flex: 1;
	margin-left: 232px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	min-width: 0;
}

.shell-content {
	padding: 28px 32px 64px;
	flex: 1;
}
</style>
