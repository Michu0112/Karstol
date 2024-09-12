<template>
    <div class="flex justify-between items-center" :class="{
        'justify-end': isHomePage
    }">
        <NuxtLink
            v-if="!isHomePage"
            to="/"
            class="px-5 py-6 color-primary font-primary nav-bar-item"
            >powrót</NuxtLink
        >
        <div class="flex justify-end items-center nav-bar gap-3 w-full">
            <NuxtLink
                to="/realizacje"
                class="px-5 py-6 color-primary font-primary nav-bar-item"
                >realizacje</NuxtLink
            >
            <NuxtLink
                to="/wycen-projekt"
                class="px-5 py-6 color-primary font-primary nav-bar-item"
                >wyceń projekt</NuxtLink
            >
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const isHomePage = computed(() => route.name === 'index')
</script>
