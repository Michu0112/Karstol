<template>
    <div class="flex justify-between items-center" :class="{
        'justify-end': isCurrentPage('index')
    }">
        <NuxtLink
            v-if="!isCurrentPage('index')"
            to="/"
            class="px-5 py-6 color-primary font-primary nav-bar-item"
            >powrót</NuxtLink
        >
        <div class="flex justify-end items-center nav-bar gap-3 w-full">
            <NuxtLink
                v-if="!isCurrentPage('realizacje')"
                to="/realizacje"
                class="px-5 py-6 color-primary font-primary nav-bar-item"
                >realizacje</NuxtLink
            >
            <NuxtLink
                v-if="!isCurrentPage('kontakt')"
                to="/kontakt"
                class="px-5 py-6 color-primary font-primary nav-bar-item"
                >wyceń projekt</NuxtLink
            >
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const isCurrentPage = (routeName) => route.name === routeName
</script>
