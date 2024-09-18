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
            v-if="showScrollButton"
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
const showScrollButton = ref(false)

const handleScroll = () => {
    showScrollButton.value = window.scrollY > 200
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

useHead({
    title: 'Profesjonalne schody na zamówienie',
    titleTemplate: '%s | Karstol',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' }],
    meta: [
        {
            name: 'description',
            content:
                'Karstol to jednoosobowa firma stolarska w Brodnicy Górnej specjalizująca się w produkcji schodów na zamówienie. Oferuję w pełni spersonalizowane rozwiązania, dostosowane do indywidualnych wymagań klientów.',
        },
        {
            name: 'keywords',
            content:
                'schody drewniane, schody na beton, schody wiszące, schody na zamówienie, schody na wymiar, schody Pomorze, producent schodów, montaż schodów, schody drewniane na wymiar, schody do domu, schody nowoczesne, stolarz schody, schody na beton na zamówienie, schody drewniane Pomorze, schody na wymiar Pomorze, schody drewniane do wnętrz, schody dębowe, schody jesionowe, schody wiszące Pomorze, schody spersonalizowane',
        },
        { name: 'author', content: 'Karstol' },
        {
            property: 'og:title',
            content: 'Karstol',
        },
        {
            property: 'og:site_name',
            content: 'Karstol',
        },
        {
            property: 'og:description',
            content:
                'Specjalizuję się w tworzeniu schodów na wymiar, oferując spersonalizowane i precyzyjnie wykonane rozwiązania. Pomiar i dojazd do klienta za darmo.',
        },
        { property: 'og:image:secure', content: 'https://profound-cajeta-1f68cf.netlify.app/images/KARSTOL.png' },
        { property: 'og:url', content: 'https://karstol.com' },
        { name: 'twitter:card', content: '/images/KARSTOL.png' },
    ],
})
</script>
