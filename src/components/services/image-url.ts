import noImage from '../../assets/no_image3.png';

//image url: 
//https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

    //url.slice(index): get everything that stay after index

}
export default getCroppedImageUrl;