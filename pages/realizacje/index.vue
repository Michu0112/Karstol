<template>
    <NavBar />

    <div class="realizations">
        <h2
            class="text-3xl md:text-5xl font-primary text-center font-medium mt-16"
        >
            Realizacje
        </h2>

        <div class="realizations-section">
            <h3
                class="sub-header text-xl md:text-3xl font-primary mt-12 md:mt-24 text-center"
            >
                Różnorodne i dopasowane do wizji klientów
            </h3>

            <div
                id="gallery"
                class="realizations-items gap-10 md:gap-20 mt-10 md:mt-20"
            >
                <a
                    :href="'/images/showOffImages/' + image"
                    v-for="(image, idx) in showOffImages"
                    :ref="(el) => (imageRefs[idx] = el)"
                    class="opacity-0 translate-y-10 gallery-item"
                    :data-pswp-width="imageDimensions[idx]?.width"
                    :data-pswp-height="imageDimensions[idx]?.height"
                >
                    <img
                        :src="'/images/showOffImages/minimized/' + image"
                        lazy="true"
                        alt="Image of stairs"
                    />
                </a>
            </div>
        </div>

        <div class="realizations-estimation flex flex-col gap-20 items-center">
            <h3 class="text-3xl font-primary font-medium text-center">
                Podobają Ci się realizacje ?
            </h3>
            <NuxtLink
                to="/kontakt"
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
                    <p
                        class="text-base sm:text-lg font-primary font-medium text-center sm:text-left"
                    >
                        Pracuję na sprawdzonych gatunkach drewna
                    </p>
                    <p class="text-sm sm:text-base font-primary leading-7">
                        *poniższe zdjęcia pokazujące strukturę drzewa są
                        orientacyjne
                    </p>
                </div>

                <div
                    class="flex items-center gap-10 md:gap-20 flex-col md:flex-row opacity-0 translate-y-10"
                    ref="materials"
                >
                    <div class="flex flex-col items-center gap-10">
                        <img
                            src="/woods/jesion.png"
                            width="70%"
                        />
                        <p class="text-3xl font-primary font-medium">jesion</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img
                            src="/woods/dab.png"
                            width="70%"
                        />
                        <p class="text-3xl font-primary font-medium">dąb</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img
                            src="/woods/buk.png"
                            width="70%"
                        />
                        <p class="text-3xl font-primary font-medium">buk</p>
                    </div>
                    <div class="flex flex-col items-center gap-10">
                        <img
                            src="/woods/sosna.png"
                            width="70%"
                        />
                        <p class="text-3xl font-primary font-medium">sosna</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterContact />
</template>

<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageRefs = ref([])
const materials = ref(null)
const lightbox = ref(null)
const imageDimensions = ref([])
const showOffImages = computed(() => [
    '20220614_192500.jpg',
    '20220615_153345.jpg',
    '20220714_203149.jpg',
    '20230223_190506.jpg',
    '20230223_190510.jpg',
    '20230223_190520.jpg',
    '20230223_190544.jpg',
    '20230523_180519.jpg',
    '20230619_180531.jpg',
    '20231130_192408.jpg',
    '20231130_192413.jpg',
    '20231130_194153.jpg',
    '20231204_200245.jpg',
    '20240701_153355.jpg',
    '20240701_153406.jpg',
    '20240701_153432.jpg',
    '20240712_202623.jpg',
    '20240712_202653.jpg',
])

const loadImageDimensions = async (imageUrl) => {
    return new Promise((resolve) => {
        const img = new Image()

        img.src = imageUrl

        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
            })
        }
    })
}

const loadDimensionsForAllImages = async () => {
    imageDimensions.value = await Promise.all(
        showOffImages.value.map((image) =>
            loadImageDimensions('/images/showOffImages/' + image)
        )
    )
}

onMounted(async () => {
    await loadDimensionsForAllImages()

    imageRefs.value.forEach((imageRef) => {
        if (imageRef) {
            useNuxtApp().$observeElement(imageRef, 'in-view')
        }
    })

    useNuxtApp().$observeElement(materials.value, 'in-view')

    lightbox.value = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a.gallery-item',
        preload: [2, 3],
        bgClickAction: 'close',
        pswpModule: () => import('photoswipe'),
    })
    lightbox.value.init()
})

useHead({
    title: 'Realizacje',
    meta: [
        {
            name: 'description',
            content:
                'Zobacz nasze realizacje schodów na zamówienie w galerii Karstol. Oferujemy różnorodne projekty dopasowane do wizji klientów oraz szczegółowe informacje o rodzajach drewna używanych w naszej pracowni. Skontaktuj się z nami, aby uzyskać wycenę lub więcej informacji.',
        },
    ],
})
</script>
