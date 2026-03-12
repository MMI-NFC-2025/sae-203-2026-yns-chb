import { updateScene} from './backend.mjs';
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
}
    

// permet d'ajouter les informations d'un artiste.
try {
    const newArtist =  {
        nom: 'Jean Dupont',
        genre_musicale: 'Jazz',
        scene: 'Grande Scène',
        date: '08 Juin 2026',
        horraire: '19:00'
    };
    await addNewArtiste(newArtist);
} catch (e) {
    console.error(e);
}
    

//permet d'ajouter les informations d'une scene
try {
    const newScene =  {
        nom_scene: 'Scène VIP',
        localisation: 'Sous la Seine'
    };
    await addNewScene(newScene);
} catch (e) {
    console.error(e);
}


try {
    const data = {
        nom: 'Clara "Silver Shoes" Delmare Modify',
        genre_musicale: 'ComédieTap',
        scene: 'Grande Scène',
        date: '06 Juin 2026',
        horraire: '20:00'
        description: 'Clara Delmare, alias "Silver Shoes", est une artiste de comédie musicale et de tap dance. Avec son énergie débordante et son charisme sur scène, elle captive le public à chaque performance. Son style unique mélange la comédie musicale traditionnelle avec des éléments modernes, créant ainsi une expérience inoubliable pour les spectateurs. Clara est connue pour ses performances dynamiques et sa capacité à faire rire et émouvoir son audience en même temps.'
       
    };
    await updateArtiste('cdwsk7nnz519b5d', data);
} catch (e) {
    console.error(e);
}

*/

try {
    const data = {
        nom_scene: 'Grande Scène Modify',
        localisation: 'Au bord de la Seine'
    };
    await updateScene('m8tfb4hu5lh98pp', data);
} catch (e) {
    console.error(e);
}
