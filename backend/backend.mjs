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

// permet d'ajouter ou modifier les informations d'un artiste ou d'une scène.
export async function addOrUpdateRecord(collectionName, recordData) {
    try {
        if (recordData.id) {
            
            const updated = await pb.collection(collectionName).update(recordData.id, recordData);
            return updated;
        } else {
        
            const created = await pb.collection(collectionName).create(recordData);
            return created;
        }
    } catch (e) {
        console.error('Erreur lors de l\'ajout/modification:', e);
        throw e;
    }
}