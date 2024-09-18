<template>
    <div
        class="desktop-nav flex justify-between items-center"
        :class="{
            'justify-end': isCurrentPage('index'),
            'flex-wrap': isCurrentPage('kontakt'),
        }"
    >
        <NuxtLink
            v-if="!isCurrentPage('index')"
            to="/"
            class="px-5 py-6 color-primary font-primary nav-bar-item"
            >powrót</NuxtLink
        >
        <div
            class="flex items-center nav-bar gap-3"
            :class="{
                'w-full': !isCurrentPage('kontakt'),
                'flex-wrap': isCurrentPage('kontakt'),
                'justify-end': !isCurrentPage('kontakt'),
                'justify-between': isCurrentPage('kontakt')
            }"
        >
            <NuxtLink
                v-for="item in links"
                :key="item.name"
                :to="item.to"
                v-show="item.condition ? !isCurrentPage(item.name) : true"
                class="px-5 py-6 color-primary font-primary nav-bar-item"
            >
                {{ item.name }}
            </NuxtLink>
        </div>
    </div>

    <button
        class="mobile-nav"
        @click="toggleNavMenu(true)"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
        </svg>
    </button>

    <div
        class="mobile-nav-content inactive p-10 flex flex-col gap-10"
        ref="mobileMenu"
    >
        <button
            class="block self-end font-primary"
            @click="toggleNavMenu(false)"
        >
            Zamknij
        </button>
        <div class="flex flex-col gap-10">
            <NuxtLink
                v-if="!isCurrentPage('index')"
                to="/"
                class="color-primary font-primary nav-bar-item"
                >powrót</NuxtLink
            >
            <NuxtLink
                @click="toggleNavMenu(false)"
                v-for="item in links"
                :key="item.name"
                :to="item.to"
                v-show="item.condition ? !isCurrentPage(item.name) : true"
                class="color-primary font-primary nav-bar-item"
            >
                {{ item.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const mobileMenu = ref(null)
const links = ref([
    { name: 'usługi', to: '/#services' },
    { name: 'o mnie', to: '/#about' },
    { name: 'proces', to: '/#process' },
    { name: 'aktualności', to: '/#news' },
    { name: 'realizacje', to: '/realizacje', condition: true },
    { name: 'wyceń projekt', to: '/kontakt', condition: true },
])

const toggleNavMenu = (toggle) => {
    if (toggle) {
        mobileMenu.value.classList.remove('inactive')
        mobileMenu.value.classList.add('active')
        return
    }
    mobileMenu.value.classList.add('inactive')
    mobileMenu.value.classList.remove('active')
}

const isCurrentPage = (routeName) => route.name === routeName
</script>
