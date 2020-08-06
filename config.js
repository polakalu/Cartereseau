
const config = {
    style: "mapbox://styles/paolati/ckcdrbphi08jd1jo47fh3b6n9",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "https://doc-08-50-sheets.googleusercontent.com/export/su155acdcmqg1eflnoevc1pasg/eec8mmhueas425fbf3ij7vcj3g/1596726420000/105270355854080959748/105270355854080959748/13-TL8i_FtEdsyyPcMNse2xcbUyH4Ja_rjCFYZtAIq6s?format=csv&id=13-TL8i_FtEdsyyPcMNse2xcbUyH4Ja_rjCFYZtAIq6s&gid=824275305&dat=AMvwolYwg9GnUdi050nabKX8Gr9XHQ3wYZadsbrRw6OPjVFiPYw9N0YandXOEWamCFr0ia3lgKmh-hRJANcrULcBR85QjNd7S_mnXL2JlDXEoWEr-0GLVhpjgAFvfPMXXda03rdSNldKo4xJvc52AFMcZ74v93F1livF7yZPaOB7jtWVQn0SwPSzfofQSJKgH2rhgkSCzFNMNh1Tyl_9Ra5iQbMg67HqeAnpntwBdhksk3YBek4IrtqdC-cl4y8Btz1ARNG0X5OE9DkvFYLMYM58OCpEAYX-wkKQqwmPFw-wSMSkGgJ2YD-ojcEnO4jFdvI0LCB6NyONF9Bqt6tLY43g8aD11zyvHjRi5SXv9auYUBB65RREAX-EySLxrW42pboLql1Ib6mYptqVZY2VGyxqPeTUQ97csQLlSBF-Eef4uS6EFWzhM7YLK8YuaGkAX5pCu1HxcXQDbkcDsQ6PMCYkWVuFlXwc95keWIe0Jh4_7bIawp7Z99jJKTn6OJG6ufgRDNFOR9lOX9CjT1wkFNeuIGm0Mxtqpm1OOazSyZYTRO1xnQoA8e-FlO4uLwIgKjRAsWEMAiV5JFcTQFnkFhzO-OB8ohcQc5xJE6cVcpqgXV029YCqZDNk9I6Yuc9hXaE4Us7S3O0gHiuuoPvhCt3lvuZ9UfqHndcxhrAO_1kD2GGdQ2Fc3MlyoY2rk03HAYbA5UC0gAWN_YpdBfW1YMlcRGOTfbI",
    center: [4.8406743, 45.7531474], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Réseau Traces",
    description: "Le réseau TRACES, Histoire, mémoires et actualités des migrations s’est créé à la fin des années 1990. Il regroupe une très grande diversité d’acteurs, qui tous ont en commun de travailler les questions qui entourent les migrations d’hier et d’aujourd’hui en région Auvergne-Rhône-Alpes : chercheurs, artistes, médias, associations socio-culturelles, lieux de diffusion, collectivités territoriales, institutions, collectifs d’habitants, etc.",
    sideBarInfo: ["Nom","Description","Contact","Site"],
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
