const imageCategory=[
    {
        id:0,
        image_link: require('./assets/companies_image/imageCategory1.png'),
       
        categories: {
            "skincare": [
                { name: "foundation", image_product: require('./assets/companies_image/beauty1.png')},
                {name:"body-cream",image_product:require('./assets/companies_image/beauty2.png') }
                        ],
            "Make-up": [{name: "hair-dy", image_product: require('./assets/companies_image/Makeup2.png')}],
            "Hair product": [{name: "lipstic", image_product: require('./assets/companies_image/Makeup1.png')},
                            {name: "foundat", image_product: require('./assets/companies_image/beauty1.png')}
                                
                            ]
        }
    },
    {
        id:1,
        image_link: require('./assets/companies_image/imageCategory2.png'),
        categories: {
            "Medicament": [
              { name: "Medicament1", image_product: require('./assets/companies_image/Medicament1.png') },
              { name: "body-cream-medicament", image_product: require('./assets/companies_image/beauty2.png') }
            ],
            "Medical_equipment": [ // Corrected typo and removed duplicate entry
              { name: "hair-dy-Medi", image_product: require('./assets/companies_image/Makeup2.png') },
              { name: "lipstic_Medi", image_product: require('./assets/companies_image/Makeup1.png') }
            ]
        }},
    {
        id:2,
        image_link: require('./assets/companies_image/imageCategory3.png'),
        categories: {}
    },
    {
        id:3,
        image_link: require('./assets/companies_image/imageCategory4.png'),
        categories: {}
    },
    {
        id:4,
        image_link: require('./assets/companies_image/imageCategory5.png'),
        categories: {}
    },
    
    
       
    ];
    export default imageCategory;