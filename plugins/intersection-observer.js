export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('observeElement', (element, className) => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className)
                        // Optional: Unobserve the element after class is added
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15, 
            }
        )

        observer.observe(element)
    })
})
