export const getGifs = async (category) => {
    const api = 'https://api.giphy.com/v1/gifs/search';
    const apikey = '0X8G9jl3P0oxiSEJG8WWFGV4xjfmtVQH';
    const url = `${api}?api_key=${apikey}&limit=10&q=${ encodeURI(category) }`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(
        img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        }
    );

    return gifs;
}