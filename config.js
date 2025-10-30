var config = {
    style: 'mapbox://styles/arzjavi/cmh7z4yg2006o01qw2hpu174i',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYXJ6amF2aSIsImEiOiJjbWg2aWcxZTgwZGI2MmtzZGM5MjRiaTB1In0.J9cT9fNiMQqiew5h0DYomA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Castilla y León arde',
    subtitle: 'Los grandes incendios forestales de 2025 han arrasado cerca de 150.000 hectáreas en Castilla y León durante el verano, la mayoría en León y Zamora',
    byline: 'DESAFÍO 2. Visualización de datos (6ª Edición) Proyecto HAZ - Instituto RTVE Fco. Javier Álvarez Núñez',
    footer: 'Fuente: Junta de Castilla y León. <br> Datos: <a href="https://analisis.datosabiertos.jcyl.es/explore/dataset/incendios-forestales/" target="_blank">Datos Abiertos de Castilla y León</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'LLAMAS DE CABRERA',
            image: 'https://static.eldiario.es/clip/73018c6d-1dcb-4956-8d3b-944e61c1b411_16-9-discover-aspect-ratio_default_0.webp',
            description: '<p>El incendio iniciado la noche del 8 de agosto en Llamas de Cabrera fue provocado por rayos y afectó significativamente al Monumento Natural y Espacio Cultural de Las Médulas, declarado Patrimonio de la Humanidad. Arrasó una gran superficie, con 3.700 hectáreas de arbolado, 16.300 de matorral, 2.100 de pasto y 25 agrícolas, convirtiéndose en uno de los fuegos más extensos del verano. </p> <p>La magnitud del operativo, con 25 medios aéreos y 91 terrestres, entre los que se encuentran helicópteros, brigadas, bulldozers, medios nocturnos y la UME, refleja la dureza de la emergencia. El incendio no se dio por extinguido hasta el 4 de octubre, tras semanas de lucha contra el fuego en una zona de alto valor medioambiental </p> <p> <em>Imagen: <a href="https://elbierzo.eldiario.es/comarca/extinguido-meses-incendio-llamas-cabrera-quemo-medulas-arraso-1-500-kilometros-perimetro_1_12659071.html" target="_blank" rel="noopener noreferrer">elDiario.es</a></em> </p>',
            location: {
                center: [-6.707616, 42.401711],
                zoom: 13.50,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'PORTO - LA BAÑA',
            image: 'https://s1.abcstatics.com/abc/www/multimedia/espana/2025/10/22/INCENDIO-PORTO-RD8dzjEwnNWh8pdwkPKV8xL-1200x840@diario_abc.jpg',
            description: '<p> El gran incendio iniciado el 14 de agosto en Porto y La Baña, aún en investigación, alcanzó nivel 2 y afectó al parque natural del Lago de Sanabria. Obligó a desplegar un dispositivo masivo compuesto por 41 aeronaves y helicópteros, y 99 medios terrestres, que contó con el apoyo de otras comunidades autónomas y países. </p> <p> El fuego arrasó, en la provincia leonesa, más de 3.500 hectáreas en total, con 640 de arbolado, 2.400 de matorral y 390 de pasto. En Zamora, aún se está perimetrando la zona afectada, aunque se estima que dañó a más de 12.600 hectáreas. El 4 de septiembre se pudo dar por extinguido. </p> <p> <em>Imagen: <a href="https://www.abc.es/espana/castilla-leon/extinguido-incendio-porto-afecto-parque-natural-sanabria-20251022083055-nt.html" target="_blank" rel="noopener noreferrer">ABC</a></em> </p>',
            location: {
                center: [-6.898934, 42.167951],
                zoom: 13.50,
                pitch: 50,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'FASGAR',
            image: 'https://imagenes.diariodecastillayleon.es/files/image_composite_desktop_xl/uploads/2025/08/16/68a0d2ac31954.jpeg',
            description: '<p> Un rayo originó la tarde del 8 de agosto un incendio en Fasgar, en el municipio de Murias de Paredes, lo que obligó a desplegar un operativo con más de 33 medios aéreos y 70 terrestres como autobombas, cuadrillas nocturnas y maquinaria pesada. </p> <p> El incendio, que quedó controlado tras una larga evolución, fue extinguido el 11 de septiembre.  Continúa en perimetración la zona afectada por este incendio, que ejemplifica la dificultad de una campaña de verano marcada por las tormentas, los rayos y su peligrosidad al coincidir con un periodo de sequía. </p> <p> <em>Imagen: <a href="https://www.diariodecastillayleon.es/castilla-y-leon/250912/101838/lucha-34-dias-fuego-leon-controlado-incendio-fasgar.html" target="_blank" rel="noopener noreferrer">Diario de Castilla y León</a></em> </p>',
            location: {
                center: [-6.191238, 42.850201],
                zoom: 12.00,
                pitch: 50.01,
                bearing: .00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'BARNIEDO DE LA REINA - CARDAÑO DE ARRIBA',
            image: 'https://ahoraleon.com/wp-content/uploads/2025/08/incendioBarniedo.jpg.webp',
            description: '<p> El incendio de Barniedo de la Reina fue declarado en la noche del 13 de agosto en los términos de esta pedanía, perteneciente al municipio leonés de Boca de Huérgano, y Cardaño de Arriba (Palencia). Fue originado por la caída de rayos y afectó de forma considerable al Parque Regional Montaña de Riaño, ante su rápida propagación en zona de alta montaña. </p> <p> El fuego movilizó un amplio dispositivo con numerosos medios aéreos (14) y terrestres (63), entre los que destacaron aeronaves, brigadas, cuadrillas, autobombas, bulldozers y unidades de la UME.  Tras semanas de trabajo y una compleja labor de extinción, el fuego fue dado por terminado el 22 de septiembre. Aún sigue en perimetración el total de hectáreas afectadas por este incendio. </p> <p> <em>Imagen: <a href="https://ahoraleon.com/incendio-en-barniedo-de-la-reina-obliga-a-desalojar-todo-el-valle-de-posada-en-leon/" target="_blank" rel="noopener noreferrer">Ahora León</a></em> </p>',
            location: {
                center: [-4.925394, 42.972363],
                zoom: 12,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
