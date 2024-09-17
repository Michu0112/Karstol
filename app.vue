<template>
    <div id="top">
        <NuxtPage />
        <a
            :href="currentPath + '#top'"
            class="fixed bottom-10 right-10 p-5 bg-yellow border border-black border-solid"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20px"
                height="20px"
            >
                <path
                    d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192l72 0 0 288c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-288 72 0c9.6 0 18.2-5.7 22-14.5z"
                />
            </svg>
        </a>
    </div>
</template>

<script setup>
const route = useRoute()
const currentPath = computed(() => route.path)
</script>
