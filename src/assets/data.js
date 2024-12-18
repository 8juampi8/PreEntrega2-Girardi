const products = [

    // LATAS
  
    { id: "1lt", type: "Lata", name: "Summer Ale", price: 2000, mesure: "500ml", image:"../latas.jpg" },
  
    { id: "2lt", type: "Lata", name: "Florida Honey", price: 2000, mesure: "500ml", image:"../latas.jpg" },
  
    { id: "3lt", type: "Lata", name: "English Porter", price: 2000, mesure: "500ml", image:"../latas.jpg" },
  
    { id: "4lt", type: "Lata", name: "Session Ipa", price: 2500, mesure: "500ml", image:"../latas.jpg" },
  
    { id: "5lt", type: "Lata", name: "American Ipa", price: 2500, mesure: "500ml", image:"../latas.jpg" },
  
    // CHOPERAS 20L
  
    { id: "6ch", type: "Chopera 20LT", name: "Summer Ale", price: 10000, mesure: "20lt", image: "../chopera.jpg" },
  
    { id: "7ch", type: "Chopera 20LT", name: "Florida Honey", price: 10000, mesure: "20lt", image: "../chopera.jpg" },
  
    { id: "8ch", type: "Chopera 20LT", name: "American Ipa", price: 12000, mesure: "20lt", image: "../chopera.jpg" },
  
    { id: "9ch", type: "Chopera 20LT", name: "Session Ipa", price: 12000, mesure: "20lt", image: "../chopera.jpg" },

    // CHOPERAS 50L
  
    { id: "10chc", type: "Chopera 50LT", name: "Summer Ale", price: 22500, mesure: "50lt", image: "../chopera.jpg" },
  
    { id: "11chc", type: "Chopera 50LT", name: "Florida Honey", price: 22500, mesure: "50lt", image: "../chopera.jpg" },
  
    { id: "12chc", type: "Chopera 50LT", name: "American Ipa", price: 25000, mesure: "50lt", image: "../chopera.jpg" },
  
    { id: "13chc", type: "Chopera 50LT", name: "Session Ipa", price: 25000, mesure: "50lt", image: "../chopera.jpg" },
  
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          resolve(products)
        }, 1500)
 
    })
}

export {getProducts}