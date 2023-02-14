import consolaDefault from 'consola'

export const consola = consolaDefault

export const identifierToObject  = (page) =>  {
  const { identifier } = isRef(page)?  page.value : page
  const returnObject = {}

  for (const { name, value } of identifier)
    returnObject[name]=value


  return returnObject
}

export const filterBase = (urlString) => {
  const { app } = useRuntimeConfig()

  if(!urlString) return '/'

  const { pathname } =  new URL(urlString)

  if(app.baseURL === pathname) return '/'

  return pathname.replace(app.baseURL, '') 
}

export function getMenuId(){
  const { app } = useRuntimeConfig()

  return app.baseURL.split('/').filter(x => x).join('-')//.replace('045', '-')
}

export function canEdit(){
  const { query } = useRoute()

  return !!query.edit
}