<template>
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C55TJRJH2B"
    ></script>
    <script>
        window.dataLayer = window.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'G-C55TJRJH2B')
    </script>

    <div class="h-screen">
        <div class="flex items-center h-dvh gap-14 lg:gap-28 relative">
            <img
                src="/contact-bg.png"
                class="w-full md:w-2/5 fixed md:relative h-full object-cover -z-10 md:z-0 opacity-30 md:opacity-100"
            />

            <div class="h-full w-full">
                <NavBar />

                <div
                    class="banner mt-5 w-3/4 md:w-full translate-y-10 opacity-0"
                    ref="banner"
                >
                    <p
                        class="headline p-5 text-3xl md:text-6xl font-primary font-semibold"
                    >
                        kontakt
                    </p>
                </div>

                <p
                    class="font-primary text-xl leading-7 font-semibold mt-10 mb-10 md:mb-20 px-5 whitespace-break-spaces translate-y-10 opacity-0"
                    ref="cta_text"
                >
                    ______Potrzebujesz schodów dopasowanych do Twojego wnętrza ?
                    <span class="block leading-7 mt-5">
                        Zapraszam do kontaktu telefonicznego. Oferuję darmowy
                        pomiar i wycenę.
                    </span>
                </p>

                <div
                    class="leading-8 font-primary mb-10 px-5 translate-y-10 opacity-0"
                    ref="contact_location"
                >
                    <p>Karol Recław</p>
                    <a
                        href="https://g.co/kgs/pFrFovr"
                        class="block highlight w-fit"
                    >
                        Brodnica Górna 83-324
                    </a>
                    <a
                        href="https://g.co/kgs/pFrFovr"
                        class="block highlight w-fit"
                        >ul.Kamienna 3</a
                    >
                </div>

                <div
                    class="flex flex-col leading-8 gap-3 font-primary px-5 pb-16 sm:pb-0 translate-y-10 opacity-0"
                    ref="contact_content"
                >
                    <a
                        href="tel:+48 506 581 245"
                        class="flex items-center gap-3 highlight w-fit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                            />
                        </svg>
                        +48 506 581 245
                    </a>
                    <a
                        href="mailto:karstol.schody@gmail.com"
                        class="flex items-center gap-3 highlight w-fit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
                            />
                        </svg>
                        karstol.schody@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const banner = ref(null)
const cta_text = ref(null)
const contact_content = ref(null)
const contact_location = ref(null)

onMounted(() => {
    useNuxtApp().$observeElement(banner.value, 'in-view')
    useNuxtApp().$observeElement(cta_text.value, 'in-view')
    useNuxtApp().$observeElement(contact_content.value, 'in-view')
    useNuxtApp().$observeElement(contact_location.value, 'in-view')
})

useHead({
    title: 'Kontakt',
    meta: [
        {
            name: 'description',
            content:
                'Skontaktuj się z Karstol, specjalistą od schodów na zamówienie. Oferuję darmowy pomiar i wycenę, a także precyzyjne wykonanie schodów dostosowanych do Twojego wnętrza. Znajdziesz tutaj dane kontaktowe, adres oraz informacje, jak się ze mną skontaktować.',
        },
        {
            name: 'keywords',
            content:
                'schody na zamówienie Brodnica Górna, kontakt Karstol, schody drewniane pomiar i wycena, darmowa wycena schodów Pomorze, schody na beton Brodnica Górna, stolarz Brodnica Górna kontakt, precyzyjne schody Pomorze, kontakt stolarz schody na wymiar, Karstol kontakt telefon email, schody brodnica górna, schody kartuzy, schody pomorskie, schody kartuski',
        },
    ],
})
</script>
