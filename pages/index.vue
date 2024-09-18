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

    <div
        style="background-image: url('/homepage-bg.png')"
        class="h-svh bg-cover homepage_welcome flex flex-col"
    >
        <NavBar />
        <div
            class="banner animated-left mt-20 lg:mt-0 font-primary flex-col w-3/4 pl-10 relative"
        >
            <p class="banner_headline">karstol</p>
            <p class="banner_headline">twój stolarz</p>

            <div class="absolute squares">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>

        <div
            class="flex justify-end flex-grow mx-5 opacity-0 translate-y-10"
            ref="welcome"
        >
            <div class="w-full lg:w-1/2 flex justify-center items-end sm:mb-20">
                <div class="homepage_cta mb-12 sm:mb-0">
                    <p
                        class="font-primary hidden sm:block font-medium text-xl md:text-justify"
                    >
                        ______Zakład stolarski Karstol zrodził się z pasji do
                        tworzenia w naturalnym materiale, jakim jest drewno.
                    </p>
                    <span
                        class="font-primary font-medium mt-5 block text-justify leading-7"
                        >Jesteśmy małą rodzinną manufakturą działającą już ponad
                        , tworzącą głównie drewniane schody. Nasze realizacje
                        wykonujemy na terenie całej Polski. Zapraszam do
                        zapoznania się z naszymi realizacjami.
                    </span>

                    <NuxtLink
                        to="/kontakt"
                        class="font-primary mt-8 md:mt-16 btn block"
                        >kontakt</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>

    <div
        id="services"
        class="homepage_services py-20 sm:py-0 sm:h-screen flex items-center opacity-0 translate-y-10"
        ref="services"
    >
        <div
            class="flex flex-col gap-16 sm:gap-0 sm:justify-between homepage_services_wrapper h-full flex-1 py-5"
        >
            <div class="font-primary flex flex-col gap-10 sm:gap-16">
                <h2 class="text-3xl md:text-5xl font-medium underscore w-fit">
                    Zakres usług
                </h2>
                <p class="md:text-2xl leading-8 text-xl">
                    ______Projekty wykonywane są z dużą starannością oraz
                    dbałością o detale. Zadowolenie klientów jest dla mnie
                    motywatorem do pracy.
                    <span class="block text-nowrap mt-3"
                        >W czym się specjalizuję :</span
                    >
                </p>

                <ul class="services_list flex flex-col gap-7">
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img
                            src="/icon/ok-icon.png"
                            class="ok-icon"
                        />
                        schody drewniane
                    </li>
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img
                            src="/icon/ok-icon.png"
                            class="ok-icon"
                        />
                        schody na beton
                    </li>
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img
                            src="/icon/ok-icon.png"
                            class="ok-icon"
                        />
                        zabudowy
                    </li>
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img
                            src="/icon/ok-icon.png"
                            class="ok-icon"
                        />
                        schody kręte
                    </li>
                </ul>
            </div>
            <NuxtLink
                to="/realizacje"
                class="btn"
            >
                zobacz realizacje
            </NuxtLink>
        </div>
        <div
            class="decoration-section flex-1 flex items-center justify-center bg-contain h-full bg-right bg-no-repeat"
            style="background-image: url('/logs-bg.png')"
        >
            <img
                src="/stairs.png"
                class="image"
            />
        </div>
    </div>

    <div
        class="homepage_generations lg:h-screen bg-cover bg-no-repeat bg-center opacity-0 translate-y-10"
        style="background-image: url('/generations.png')"
        ref="generations"
    >
        <div class="banner flex-col">
            <p>Firma</p>
            <p>z tradycją</p>
            <p>od pokoleń</p>
        </div>
    </div>

    <div
        class="homepage_beginning lg:h-screen bg-no-repeat bg-center flex items-center px-10 gap-10 md:gap-16 opacity-0 translate-y-10"
        ref="beginning"
    >
        <div
            class="content-section flex flex-col flex-1 justify-between lg:h-full py-20 gap-10 lg:gap-0"
        >
            <div>
                <h2
                    class="text-3xl md:text-5xl font-medium font-primary underscore w-fit"
                >
                    Jak zaczynaliśmy
                </h2>
                <p class="text-xl md:text-2xl mt-10 leading-8 font-primary">
                    ______Firmę stolarską założył mój dziadek w latach 80- tych
                    na Kaszubach. Powoli wchodził w rynek, dzięki swojej
                    ogromnej pracowitości oraz zapałowi do pracy. Następnie
                    nauczył fachu mojego ojca, który z kolei zaraził mnie pasją
                    do pracy z drewnem jeszcze jako nastolatka. I tak, kończąc
                    Zawodową Szkołę Stolarską uzyskałem tytuł czeladnika i
                    przejąłem firmę, którą dalej prężnie rozwijam.
                </p>
            </div>
            <NuxtLink
                to="/kontakt"
                class="btn"
                >kontakt</NuxtLink
            >
        </div>
        <div
            class="decoration-section flex-1 h-full md:py-20 flex justify-center"
        >
            <img
                src="/filler-field.png"
                class="h-auto"
            />
        </div>
    </div>

    <div
        id="about"
        class="mx-5 md:mx-10 my-10 md:my-20 pt-5"
    >
        <h2
            class="font-primary text-3xl md:text-5xl font-medium underscore w-fit"
        >
            Co mnie wyróżnia?
        </h2>

        <div class="flex flex-col gap-10 md:gap-20 my-10 md:my-20">
            <div
                class="flex md:px-0 xl:px-32 gap-20 items-center flex-col-reverse md:flex-row opacity-0 translate-y-10"
                ref="professional"
            >
                <div class="text-box">
                    <h3 class="font-primary text-2xl font-medium mb-10">
                        Profesjonalizm
                    </h3>
                    <p class="font-primary text-xl leading-8">
                        Jako właściciel firmy Karstol dbam o najwyższą jakość i
                        precyzję w każdym detalu. Każde schody, które tworzę, są
                        w pełni spersonalizowane i wykonane na indywidualne
                        zamówienie, zgodnie z wymiarami i potrzebami klienta.
                        Dzięki mojemu doświadczeniu i pasji do rzemiosła,
                        oferuję produkty, które spełniają najwyższe standardy
                        techniczne i estetyczne. Na każdym etapie – od pomiarów,
                        przez projekt, aż po montaż – gwarantuję pełen
                        profesjonalizm i zaangażowanie.
                    </p>
                </div>
                <div class="hl-right highlight flex-1 w-4/5 sm:w-3/4 md:w-full">
                    <img src="/profesjonalizm.jpg" />
                </div>
            </div>

            <div
                class="flex md:px-0 xl:px-32 gap-20 items-center flex-col md:flex-row opacity-0 translate-y-10"
                ref="individual"
            >
                <div class="hl-left highlight flex-1 w-4/5 sm:w-3/4 md:w-full">
                    <img src="/indywidualne-podejście.jpg" />
                </div>
                <div class="text-box">
                    <h3 class="font-primary text-2xl font-medium mb-10">
                        Indywidualne podejście
                    </h3>
                    <p class="font-primary text-xl leading-8">
                        Każdy projekt schodów jest dla mnie unikalny. W firmie
                        Karstol przykładam dużą wagę do indywidualnych potrzeb
                        klienta, tworząc rozwiązania idealnie dopasowane do
                        specyfiki wnętrza oraz osobistych preferencji. Staram
                        się, aby każdy etap współpracy – od pierwszej rozmowy po
                        finalny montaż – odzwierciedlał Twoje oczekiwania,
                        tworząc schody, które są nie tylko funkcjonalne, ale
                        również wyjątkowe.
                    </p>
                </div>
            </div>

            <div
                class="flex md:px-0 xl:px-32 gap-20 items-center flex-col-reverse md:flex-row opacity-0 translate-y-10"
                ref="precision"
            >
                <div class="text-box">
                    <h3 class="font-primary text-2xl font-medium mb-10">
                        Precyzja wykonania
                    </h3>
                    <p class="font-primary text-xl leading-8">
                        W firmie Karstol każdy detal ma znaczenie. Dbam o to,
                        aby każdy element schodów był starannie wykonany,
                        zgodnie z najwyższymi standardami. Precyzja to nie tylko
                        kwestia estetyki, ale także trwałości i bezpieczeństwa.
                        Dzięki mojemu zaangażowaniu i doświadczeniu mogę
                        zagwarantować, że końcowy produkt spełni Twoje
                        oczekiwania i będzie służył przez wiele lat.
                    </p>
                </div>
                <div class="hl-right highlight flex-1 w-4/5 sm:w-3/4 md:w-full">
                    <img src="/precyzja.jpg" />
                </div>
            </div>
        </div>
    </div>

    <div
        id="process"
        class="homepage_process mx-5 md:mx-10 my-16 md:my-32 pt-5 opacity-0 translate-y-10"
        ref="process"
    >
        <h2
            class="font-primary text-3xl md:text-5xl font-medium underscore w-fit"
        >
            Proces współpracy
        </h2>
        <p class="font-primary text-xl mt-10 leading-8">
            Stawiam na jasną i przejrzystą komunikację na każdym etapie
            realizacji.
        </p>

        <div
            class="items-center steps md:mx-auto my-10 md:my-20 flex justify-center gap-10 xl:gap-20 flex-col lg:flex-row"
        >
            <div
                class="highlight hl-left md:flex-1 lg:flex-initial w-4/5 md:w-3/4 lg:w-full md:px-0"
            >
                <img src="/proces.jpg" />
            </div>
            <ul class="list text-lg md:flex-1 lg:flex-initial">
                <li>
                    <span class="font-semibold text-2xl leading-8">01.</span>
                    Rozpoczynamy od omówienia Twoich potrzeb i preferencji.
                    Wspólnie ustalimy, jak powinny wyglądać Twoje schody.
                </li>
                <li>
                    <span class="font-semibold text-2xl leading-8">02.</span>
                    Dokonuję dokładnych pomiarów i przygotowuję projekt, który
                    będzie dopasowany do Twojego wnętrza.
                </li>
                <li>
                    <span class="font-semibold text-2xl leading-8">03.</span> Po
                    zaakceptowaniu projektu przystępuję do produkcji schodów,
                    dbając o najwyższą jakość wykonania.
                </li>
                <li>
                    <span class="font-semibold text-2xl leading-8">04.</span>
                    Zajmuję się montażem schodów, zapewniając terminowość i
                    pełne zadowolenie z gotowego produktu.
                </li>
            </ul>
        </div>
    </div>

    <div
        id="news"
        class="w-full flex flex-col justify-center px-5 pt-5 md:px-10"
    >
        <h2
            class="font-primary text-3xl md:text-5xl font-medium underscore w-fit"
        >
            Aktualności
        </h2>

        <div
            class="fb-page justify-center my-10 md:my-20"
            data-href="https://www.facebook.com/p/Us%C5%82ugi-Stolarskie-Brodnica-G%C3%B3rna-100042681206354/?paipv=0&amp;eav=AfbISkT1FqcJkI_NK_vTQ2-K_h5jwlneZJEQAab7AM4-TtBkMnMJ5dELlHm9eMvc3fM&amp;_rdr"
            data-show-posts="true"
            data-width="1000"
            data-height="600"
            data-hide-cta="true"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
            style="display: flex !important"
        >
            <blockquote
                cite="https://www.facebook.com/p/Us%C5%82ugi-Stolarskie-Brodnica-G%C3%B3rna-100042681206354/?paipv=0&amp;eav=AfbISkT1FqcJkI_NK_vTQ2-K_h5jwlneZJEQAab7AM4-TtBkMnMJ5dELlHm9eMvc3fM&amp;_rdr"
                class="fb-xfbml-parse-ignore"
            >
                <a
                    href="https://www.facebook.com/p/Us%C5%82ugi-Stolarskie-Brodnica-G%C3%B3rna-100042681206354/?paipv=0&amp;eav=AfbISkT1FqcJkI_NK_vTQ2-K_h5jwlneZJEQAab7AM4-TtBkMnMJ5dELlHm9eMvc3fM&amp;_rdr"
                    >Usługi Stolarskie Brodnica Górna</a
                >
            </blockquote>
        </div>
    </div>

    <FooterContact />
</template>

<script setup>
const welcome = ref(null)
const services = ref(null)
const generations = ref(null)
const beginning = ref(null)
const professional = ref(null)
const individual = ref(null)
const precision = ref(null)
const process = ref(null)

onMounted(() => {
    useNuxtApp().$observeElement(welcome.value, 'in-view')
    useNuxtApp().$observeElement(services.value, 'in-view')
    useNuxtApp().$observeElement(generations.value, 'in-view')
    useNuxtApp().$observeElement(beginning.value, 'in-view')
    useNuxtApp().$observeElement(professional.value, 'in-view')
    useNuxtApp().$observeElement(individual.value, 'in-view')
    useNuxtApp().$observeElement(precision.value, 'in-view')
    useNuxtApp().$observeElement(process.value, 'in-view')
})
</script>
