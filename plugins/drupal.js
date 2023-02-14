export default defineNuxtPlugin(async () => {

    const mainEntitiesData = await getMainEntities()
    const menusData        = await getMenus()
    const mainEntities     = useState('mainEntities', () => mainEntitiesData)
    const page             = useState('page'        , () => undefined)
    
    useState('menus', () => menusData) // set menus store initially

    //middleware before every route change
    addRouteMiddleware('global-test',  async (to) => {

        const pageId = getPageIdByPath({ route: to,  mainEntities })
        
        page.value   = await getPage(pageId)
    }, { global: true })
})

function getPageIdByPath({ route, mainEntities }){
    const path = getPath(route)

    for (const { url, drupalUUID } of mainEntities.value) {
        const { pathname } = new URL(url)

        if(pathname === path) return drupalUUID
    }
}

// main entities are what the links in the menus describe or point too.
async function getMainEntities(){
    const menuId = getMenuId()
    const resp   = await $fetch(`https://dapi.cbd.int/menus/${menuId}/main-entities`)

    return resp.map(identifierToObject)
}

function getPage(pageId){
    return $fetch(`https://dapi.cbd.int/portal-web-pages/${pageId}`)
}

function getMenus(){
    const menuId = getMenuId()

    return $fetch(`https://dapi.cbd.int/menus/${menuId}`)
}

function getPath(route){
    const { app           } = useRuntimeConfig()
    const { path          } = route
    const   endsWithSLash   = path.endsWith('/') // nuxt adds an / at the end of defined baseUrl
    const   fullPath        = app.baseURL + path

    return endsWithSLash? fullPath.slice(0, -1) : fullPath
}