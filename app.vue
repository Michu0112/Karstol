<template>
    <div id="top">
        <div id="fb-root"></div>
        <component
            is="script"
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v20.0"
            nonce="PldHuKOQ"
        ></component>
        <NuxtPage />
        <a
            :href="currentPath + '#top'"
            class="fixed bottom-5 right-5 p-2 bg-yellow"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="30px"
                height="30px"
            >
                <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                />
            </svg>
        </a>
    </div>
</template>

<script setup>
const route = useRoute()
const currentPath = computed(() => route.path)
</script>
