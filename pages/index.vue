<template>
    <div
        style="background-image: url('/homepage-bg.png')"
        class="h-screen bg-cover bg-center homepage_welcome flex flex-col"
    >
        <NavBar />
        <div class="homepage_banner font-primary">
            <p class="homepage_headline">karstol</p>
            <p class="homepage_headline">twój stolarz</p>
        </div>

        <div class="flex justify-end flex-grow mx-5">
            <div class="w-1/2 flex justify-center items-center">
                <div class="homepage_cta">
                    <p class="font-primary font-medium text-xl text-justify">
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
                        class="font-primary mt-16 btn block"
                        >kontakt</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="homepage_services h-screen flex items-center ml-10">
        <div
            class="flex flex-col justify-between homepage_services_wrapper h-full flex-1 py-5"
        >
            <div class="font-primary flex flex-col gap-16">
                <h2 class="text-5xl font-medium">Zakres usług</h2>
                <p class="text-2xl leading-8">
                    ______Projekty wykonywane są z dużą starannością oraz
                    dbałością o detale. Zadowolenie klientów jest dla mnie
                    motywatorem do pracy. W czym się specjalizuję :
                </p>
                <ul class="services_list flex flex-col gap-7">
                    <li class="flex items-center gap-5">
                        <img src="/icon/ok-icon.png" />
                        zabudowy schodów w drewnie
                    </li>
                    <li class="flex items-center gap-5">
                        <img src="/icon/ok-icon.png" /> zabudowy poręczy
                    </li>
                    <li class="flex items-center gap-5">
                        <img src="/icon/ok-icon.png" /> zabudowy mebli
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
            class="flex-1 flex items-center justify-center bg-contain h-full bg-right bg-no-repeat"
            style="background-image: url('/logs-bg.png')"
        >
            <img src="/stairs.png" />
        </div>
    </div>

    <div
        class="homepage_generations h-screen bg-cover bg-no-repeat bg-center"
        style="background-image: url('/generations.png')"
    >
        <div class="banner">
            <p>Firma</p>
            <p>z tradycją</p>
            <p>od pokoleń</p>
        </div>
    </div>

    <div
        class="homepage_beginning h-screen bg-no-repeat bg-center flex items-center mx-10 gap-16"
    >
        <div class="flex flex-col flex-1 justify-between h-full py-20">
            <div>
                <h2 class="text-5xl font-medium font-primary">
                    Jak zaczynaliśmy
                </h2>
                <p class="text-2xl mt-10 leading-8 font-primary">
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
        <div class="flex-1 h-full py-20">
            <img
                src="/filler-field.png"
                class="object-cover h-full w-full"
            />
        </div>
    </div>

    <div class="homepage_contact m-10 mt-20 text-base font-primary flex flex-col items-center">
        <h2 class="text-center text-4xl font-semibold">Kontakt:</h2>
        <div
            class="contact_box flex items-center justify-between py-5 px-10 font-medium"
        >
            <div class="flex flex-col leading-8 gap-3">
                <a
                    href="tel:+48 506 581 245"
                    class="flex items-center gap-3"
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
                    class="flex items-center gap-3"
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
            <div class="leading-8">
                <p>Karol Recław</p>
                <p>Brodnica Górna 83-324</p>
                <p>ul.Kamienna 3</p>
            </div>
        </div>
    </div>
</template>
