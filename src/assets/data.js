const products = [

    // LATAS
  
    { id: "1", type: "Lata", name: "Summer Ale", price: 2000, mesure: "500ml", img:"../latas.png" },
  
    { id: "2", type: "Lata", name: "Florida Honey", price: 2000, mesure: "500ml", img:"../latas.png" },
  
    { id: "3", type: "Lata", name: "English Porter", price: 2000, mesure: "500ml", img:"../latas.png" },
  
    { id: "4", type: "Lata", name: "Session Ipa", price: 2500, mesure: "500ml", img:"../latas.png" },
  
    { id: "5", type: "Lata", name: "American Ipa", price: 2500, mesure: "500ml", img:"../latas.png" },
  
    // CHOPERAS 20L
  
    { id: "6", type: "Chopera 20LT", name: "Summer Ale", price: 10000, mesure: "20lt", img: "../chopera.png" },
  
    { id: "7", type: "Chopera 20LT", name: "Florida Honey", price: 10000, mesure: "20lt", img: "../chopera.png" },
  
    { id: "8", type: "Chopera 20LT", name: "American Ipa", price: 12000, mesure: "20lt", img: "../chopera.png" },
  
    { id: "9", type: "Chopera 20LT", name: "Session Ipa", price: 12000, mesure: "20lt", img: "../chopera.png" },

    // CHOPERAS 50L
  
    { id: "10", type: "Chopera 50LT", name: "Summer Ale", price: 22500, mesure: "50lt", img: "../chopera.png" },
  
    { id: "11", type: "Chopera 50LT", name: "Florida Honey", price: 22500, mesure: "50lt", img: "../chopera.png" },
  
    { id: "12", type: "Chopera 50LT", name: "American Ipa", price: 25000, mesure: "50lt", img: "../chopera.png" },
  
    { id: "13", type: "Chopera 50LT", name: "Session Ipa", price: 25000, mesure: "50lt", img: "../chopera.png" },
  
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          resolve(products)
        }, 1500)
 
    })
}

export {getProducts}