// aca exporto un objeto literal , que contiene los metodos que vamos a usar en el controlador
// esto este array de objetos literales nos legaria de la base de datos
const platos=[
    {
        id:1,
nombre:'Carpaccio fresco',
detalle:'Entrada Carpaccio de salmón con cítricos',
precio:65.50,
imagen:"Carpaccio-de-salmon.jpg",
    },
    {
        id:2,
        nombre:'Risotto de berenjena',
        detalle:' Risotto de berenjena y queso de cabra',
        precio: 47.00,
        imagen:"/images/Rissotto-berenjena",
            },
    
    
            {     
                id:3,
                nombre:'Mousse de arroz',
                detalle:' Mousse de arroz con leche y aroma de azahar',
                precio:27.50,
                imagen:"Mousse-de-arroz-con-leche.jpg",
                    },
               
               
               
               
                    {
                        id:4,
                        nombre:'Espárragos blancos',
                        detalle:'  Espárragos blancos con vinagreta de verduras y jamón ibérico',
                        precio:   37.50,
                        imagen:"esparragos.png",
                            },
                        ]
                        
               
                
            
    
    
    
        
        


module.exports={
    index:(req,res) =>{
return res.render('index', {menu: platos})
    },

    detalle: (req,res) => {
        const platoEncontrado = platos.find(row =>row.id == req.params.id)
if (platoEncontrado) return res.render('detalleMenu',{plato:platoEncontrado })

 else return res.send ('ERROR 404 NOT FOUND')
    },
    

}