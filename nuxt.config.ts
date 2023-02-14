// https://nuxt.com/docs/api/configuration/nuxt-config

const baseURL = '/portals/gbf'
const css  =   [ '@scbd/www-css/dist/style.min.css', '@/assets/css/style.css' ]
const head =   {
                    title: '',
                    meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        { hid: 'description', name: 'description', content: '' }
                    ],
                    link: [
                        { rel: 'icon', type: 'image/x-icon', href: '@/assets/images/favicon.ico' },
                        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900' },
                        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter:300,400,600,900' }
                    ]
                }

export default defineNuxtConfig({
    app : { head, baseURL }, css
})
