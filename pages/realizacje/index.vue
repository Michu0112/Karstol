<template>
    <NavBar />

    <div class="realizations">
        <h2 class="text-5xl font-primary text-center font-medium mt-16">
            Realizacje
        </h2>

        <div class="realizations-section">
            <h3 class="sub-header text-3xl font-primary mt-24">
                Różnorodne i dopasowane do wizji klientów
            </h3>

            <div class="realizations-items gap-20 mt-20">
                <div v-for="index in 6">
                    <img :src="'/images/' + index + '.png'" />
                </div>
            </div>
        </div>

        <div class="realizations-estimation flex flex-col gap-20 items-center">
            <h3 class="text-3xl font-primary font-medium">
                Podobają Ci się realizacje ?
            </h3>
            <NuxtLink
                to="/wycen-projekt"
                class="btn"
                >poproś o wycenę</NuxtLink
            >
        </div>

        <div class="realizations-materials">
            <h3 class="headline font-primary font-semibold">
                Poznaj rodzaje drewna, jakich używam w mojej pracowni na codzień
            </h3>

            <div class="flex flex-col items-center mt-20 gap-16">
                <p class="text-3xl font-medium font-primary">Rodzaje drewna</p>
                <div class="flex flex-col items-center gap-5">
                    <p class="text-lg font-primary font-medium">
                        Pracuję na sprawdzonych gatunkach drewna
                    </p>
                    <p class="font-primary">
                        *poniższe zdjęcia pokazujące strukturę drzewa są
                        orientacyjne
                    </p>
                </div>

                <div class="flex items-center gap-20">
                    <div class="flex flex-col items-center gap-10">
                        <img src="/woods/jesion.png" width="70%" />
                        <p class="text-3xl font-primary font-medium">jesion</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img src="/woods/dab.png" width="70%" />
                        <p class="text-3xl font-primary font-medium">dąb</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img src="/woods/buk.png" width="70%" />
                        <p class="text-3xl font-primary font-medium">buk</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img src="/woods/sosna.png" width="70%" />
                        <p class="text-3xl font-primary font-medium">sosna</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterContact />
</template>
