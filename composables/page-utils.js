export const useGetCenterColumSize = (page) => () => {

    if(hasRightValue(page) && hasLeftValue(page)) return 4

    if(hasRightValue(page) || hasLeftValue(page)) return 9

    return 12
}

export const useGetLeftColumSize = (page) => () => {

    if(hasRightValue(page) && hasLeftValue(page)) return 4

    return 3
}

export const  useGetRightColumSize = (page) => () => {

    if(hasRightValue(page) && hasLeftValue(page)) return 4

    return 3
}

export function hasRightValue(page){
    const { hasPart } = page.value

    if(!hasPart || !hasPart.length) return false

    const [ partOne, partTwo ] = hasPart
    if(partOne && partOne['@id'].includes('#rightBody')) return partOne.text
    if(partTwo && partTwo['@id'].includes('#rightBody')) return partTwo.text

    return false
}

export function hasLeftValue(page){
    const { hasPart } = page.value

    if(!hasPart || !hasPart.length) return false

    const [ partOne, partTwo ] = hasPart
    if(partOne && partOne['@id'].includes('#leftBody')) return partOne.text
    if(partTwo && partTwo['@id'].includes('#leftBody')) return partTwo.text

    return false
}