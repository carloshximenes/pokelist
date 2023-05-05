export const getPokemonNameFromImage = (image) => {
    let pathname = image.match(/.*\/(.*)$/)[1]; 
    return pathname.substring(0, pathname.lastIndexOf('.'));
}