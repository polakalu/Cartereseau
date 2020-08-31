
const config = {
    style: "mapbox://styles/paolati/cke8bqy1448cg19ljsleo5877",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "./TEST2.csv",
    center: [4.825780, 45.477416], //Lng, Lat
    title: "Réseau Traces",
    description: "Le réseau TRACES, Histoire, mémoires et actualités des migrations s’est créé à la fin des années 1990. Il regroupe une très grande diversité d’acteurs, qui tous ont en commun de travailler les questions qui entourent les migrations d’hier et d’aujourd’hui en région Auvergne-Rhône-Alpes : chercheurs, artistes, médias, associations socio-culturelles, lieux de diffusion, collectivités territoriales, institutions, collectifs d’habitants, etc.",
    sideBarInfo: ["Nom de la Structure","Thématique de travail"],
    popupNom: ["Nom de la Structure"],
    popupDescrip:["Thématique de travail"],
    popupWeb:["Siteweb"],
    filters: [
        {
            type: "checkbox",
            title: "Thematique : ",
            columnHeader: "Thématique de travail",
            listItems: ["Solidarités","Education et Education populaire", "Champ Culturel Arts","Patrimoine & Mémoire","Recherche","Médias et Information"]
        },
        {
            type: "dropdown",
            title: "Département: ",
            columnHeader: "Département",
            listItems: [
              'Ain',
                'Ardèche',
                'Auvergne',
                'Drôme',
                'Isère',
                'Haute-Savoie',
                'Loire',
                'Rhône',
                'Savoie'
            ]
        },
        {
            type: "checkbox",
            title: "Type de structure: ",
            columnHeader: "Forme",
            listItems: ["Association", "etc"]
        }
    ]

};
