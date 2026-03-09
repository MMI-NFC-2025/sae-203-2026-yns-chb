import {addOrUpdateRecord} from './backend.mjs';
/*
// liste de tous les artistes triés par date de représentation.
try {
    const records = await getArtistsByDate();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
 

// liste de toutes les scènes triées par nom
try {
    const records = await getAllScenes();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
    

// liste de tous les artistes triés par ordre alphabétique.
try {
    const records = await getArtistsByName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

//infos d'un artiste en donnant son id en paramètre
try {
    const record = await ArtisteId('cdwsk7nnz519b5d');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

  
//infos d'une scène en donnant son id en paramètre.
try {
    const record = await SceneId('m8tfb4hu5lh98pp');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
   


// tous les artistes se produisant sur une scène donnée par son id, triés par date.
try {
    const records = await getArtistsBySceneId('m8tfb4hu5lh98pp');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

//tous les artistes se produisant sur une scène donnée par son nom, triés par date.
try {
    const records = await getArtistsBySceneName('Grande Scène');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/
    
// permet d'ajouter ou modifier les informations d'un artiste ou d'une scène.
try {
    const newArtist = await addOrUpdateRecord('Artistes', {
        nom: 'Jean Dupont',
        genre_musicale: 'Jazz',
        scene: 'Grande Scène',
        date: '08 Juin 2026',
        horraire: '19:00'
    });
    console.log('Artiste ajouté:', newArtist);
} catch (e) {
    console.error(e);
}

// Test: Ajouter une nouvelle scène
try {
    const newScene = await addOrUpdateRecord('Scenes', {
        nom_scene: 'Scène VIP',
        capacite: 500
    });
    console.log('Scène ajoutée:', newScene);
} catch (e) {
    console.error(e);
}

// Test: Modifier un artiste existant
try {
    const updated = await addOrUpdateRecord('Artistes', {
        id: 'wb02c75sykfqcgm',
        nom: 'Tessa Marlowe (Modifié)',
        genre_musicale: 'Tap Jazz'
    });
    console.log('Artiste modifié:', updated);
} catch (e) {
    console.error(e);
}

// Test: Modifier une scène existante
try {
    const updatedScene = await addOrUpdateRecord('Scenes', {
        id: 'm8tfb4hu5lh98pp',
        nom_scene: 'Grande Scène (Modifiée)',
        capacite: 1000
    });
    console.log('Scène modifiée:', updatedScene);
} catch (e) {
    console.error(e);
}
