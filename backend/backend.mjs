import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');


//liste de tous les artistes triés par date de représentation.
export async function getArtistsByDate() {
    const artists = await pb.collection('Artistes').getFullList({ sort: '+date', });
    return artists;
}

// liste de toutes les scènes triées par nom
export async function getAllScenes() {
    const scenes = await pb.collection('Scenes').getFullList({ sort: '+nom_scene', });
    return scenes;
}

//liste de tous les artistes triés par ordre alphabétique.
export async function getArtistsByName() {
    const artists = await pb.collection('Artistes').getFullList({ sort: '+nom', });
    return artists;
}

//infos d'un artiste en donnant son id en paramètre
export async function ArtisteId(id) {
    const records = await pb.collection('Artistes').getOne(id);
    return records;
}

//infos d'une scène en donnant son id en paramètre.
export async function SceneId(id) {
    const records = await pb.collection('Scenes').getOne(id);
    return records;
}

// tous les artistes se produisant sur une scène donnée par son id, triés par date.
export async function getArtistsBySceneId(id) {
    const artists = await pb.collection('Artistes').getFullList({
        filter: `id_scene = "${id}"`,
        sort: '+date',
    });
    return artists;
}

//tous les artistes se produisant sur une scène donnée par son nom, triés par date.
export async function getArtistsBySceneName(nom_scene) {
    const artists = await pb.collection('Artistes').getFullList({
        filter: `scene = "${nom_scene}"`,
        sort: 'date',
    });
    return artists;
}

// permet d'ajouter les information d'un artiste 
export async function addNewArtiste(newartiste) {
    await pb.collection('Artistes').create(newartiste);
}


// permet d'ajouter les information d'une scene
export async function addNewScene(newscene) {
    await pb.collection('Scenes').create(newscene);
}

//permet de modifier les informations d'un artiste

export async function updateArtiste(id, data) {
    await pb.collection('Artistes').update(id, data);
}

//permet de modifier les informations d'une scene
export async function updateScene(id, data) {
    await pb.collection('Scenes').update(id, data);
}








export async function getFilteredArtists(genre = "", scene = "", ordre = "asc") {
    let filters = [];


    if (genre && genre !== "all") {
        filters.push(`genre_musicale = "${genre}"`);
    }
    if (scene && scene !== "all") {
        filters.push(`scene = "${scene}"`);
    }


    const filterString = filters.join(' && ');
    const sort = ordre === 'desc' ? '-horraire' : '+horraire';

    const artists = await pb.collection('Artistes').getFullList({
        filter: filterString,
        sort: sort,
    });

    return artists;
}

export async function getToutesLesScenes() {
    const scenes = await pb.collection('Scenes').getFullList({
        sort: '+nom_scene',
    });
    return scenes;
}

export async function getImageUrl(record, recordImage) {
    if (!record || !recordImage) return '';
    return pb.files.getURL(record, recordImage);
}