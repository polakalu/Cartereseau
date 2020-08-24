
const config = {
    style: "mapbox://styles/paolati/cke8bqy1448cg19ljsleo5877",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "./donnees.csv",
    center: [4.8406743, 45.7531474], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Biennale Traces",
    description: "La Biennale Traces qui aura lieu du 7 octobre au 7 décembre 2020, regroupe une centaine de propositions (conférences, tables rondes, expositions, journées d'études, projections de films, concerts, spectacles). Ces temps, sont portées par une grande diversité d’acteurs, qui tous ont en commun de travailler les questions qui entourent les migrations d’hier et d’aujourd’hui en région Auvergne-Rhône-Alpes : chercheur.euses, artistes, médias, collectifs et associations, lieux et institutions, collectivités territoriales, etc.. ",
    sideBarInfo: ["Soiree","Forme","Date","Horaire","Thematique","Description"],
    popupInfo: ["Soiree"],
    filters: [
        {
            type: "checkbox",
            title: "Thematique : ",
            columnHeader: "Thematique",
            listItems: ["Travail","Habitat", "Expression artistique des personnes migrantes","Autre"]
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
            title: "Type de soirée: ",
            columnHeader: "Forme",
            listItems: ["Film", "Conférence", "Théâtre","Table ronde","Concert","Exposition"]
        }
    ]

};
