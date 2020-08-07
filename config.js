
const config = {
    style: "mapbox://styles/paolati/ckcdrbphi08jd1jo47fh3b6n9",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgHPqy6fzypzpojIVHw70Wyrl3XgPIiqQLy0MQksVmjSgOsSFRABplgRBfmdKHPiKL6DHJMC0HHkq7/pub?output=csv",
    center: [4.8406743, 45.7531474], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Réseau Traces",
    description: "Le réseau TRACES, Histoire, mémoires et actualités des migrations s’est créé à la fin des années 1990. Il regroupe une très grande diversité d’acteurs, qui tous ont en commun de travailler les questions qui entourent les migrations d’hier et d’aujourd’hui en région Auvergne-Rhône-Alpes : chercheurs, artistes, médias, associations socio-culturelles, lieux de diffusion, collectivités territoriales, institutions, collectifs d’habitants, etc.",
    SideBarInfo: ["Nom","Description","Contact","Site"],
    popupInfo: ["Nom"],
    filters: [
        {
            type: "checkbox",
            title: "Thématique de travail: ",
              columnHeader: "Cat1",
            listItems: ["Solidarités", "Education", "Artistes", "Equipements culturels","Patrimoine & Mémoire", "Médias", "Recherche"]
        },
        {
            type: "Organisation_structurelle",
            title: "Type de Structure : ",
            columnHeader: "Forme",
            listItems: [
                'Association',
                'Collectif',
                'Centre Social/MJC/Regie',
                'Compagnie',
                'Collectivité Territoriale',
                'Projection',
            ]
        },
        {
            type: "dropdown",
            title: "Departement: ",
            columnHeader: "Departement",
            listItems: [
                'Ain',
                'Ardeche',
                'Auvergne',
                'Drome',
                'Isere',
                'Haute Savoie',
                'Loire',
                'Rhone',
                'Savoie'
            ]
        }
    ]

};
