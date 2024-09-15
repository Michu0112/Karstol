<template>
    <div
        style="background-image: url('/homepage-bg.png')"
        class="h-screen bg-cover bg-center homepage_welcome flex flex-col"
    >
        <NavBar />
        <div class="banner font-primary flex-col w-3/4">
            <p class="banner_headline">karstol</p>
            <p class="banner_headline">twój stolarz</p>
        </div>

        <div class="flex justify-end flex-grow mx-5">
            <div class="md:w-1/2 flex justify-center items-end sm:items-center">
                <div class="homepage_cta mb-12 sm:mb-0">
                    <p class="font-primary font-medium text-xl md:text-justify">
                        ______Zakład stolarski Karstol zrodził się z pasji do
                        tworzenia w naturalnym materiale, jakim jest drewno.
                    </p>
                    <span
                        class="font-primary font-medium mt-5 block text-justify leading-7"
                        >Jesteśmy małą rodzinną manufakturą, tworzącą głównie
                        drewniane schody do domów jednorodzinnych. Nasze
                        realizacje wykonujemy na terenie całej Polski.Zapraszam
                        do zapoznania się z naszymi realizacjami.
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

    <div class="homepage_services py-20 sm:py-0 sm:h-screen flex items-center">
        <div
            class="flex flex-col gap-16 sm:gap-0 sm:justify-between homepage_services_wrapper h-full flex-1 py-5"
        >
            <div class="font-primary flex flex-col gap-10 sm:gap-16">
                <h2 class="text-3xl md:text-5xl font-medium">Zakres usług</h2>
                <p class="md:text-2xl leading-8 text-xl">
                    ______Projekty wykonywane są z dużą starannością oraz
                    dbałością o detale. Zadowolenie klientów jest dla mnie
                    motywatorem do pracy.
                    <span class="block text-nowrap mt-3">W czym się specjalizuję :</span>
                </p>

                <ul class="services_list flex flex-col gap-7">
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img src="/icon/ok-icon.png" class="ok-icon" />
                        zabudowy schodów w drewnie
                    </li>
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img src="/icon/ok-icon.png" class="ok-icon" /> zabudowy poręczy
                    </li>
                    <li class="flex items-center gap-2 sm:gap-5">
                        <img src="/icon/ok-icon.png" class="ok-icon" /> zabudowy mebli
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
        class="homepage_generations lg:h-screen bg-cover bg-no-repeat bg-center"
        style="background-image: url('/generations.png')"
    >
        <div class="banner flex-col">
            <p>Firma</p>
            <p>z tradycją</p>
            <p>od pokoleń</p>
        </div>
    </div>

    <div
        class="homepage_beginning lg:h-screen bg-no-repeat bg-center flex items-center px-10 gap-10 md:gap-16"
    >
        <div class="content-section flex flex-col flex-1 justify-between lg:h-full py-20 gap-10 lg:gap-0">
            <div>
                <h2 class="text-3xl md:text-5xl font-medium font-primary">
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
        <div class="decoration-section flex-1 h-full md:py-20 flex justify-center">
            <img
                src="/filler-field.png"
                class="h-auto"
            />
        </div>
    </div>

    <FooterContact />
</template>
