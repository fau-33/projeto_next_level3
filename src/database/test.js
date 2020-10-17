const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{


  //Inserir dados da tabela
  await saveOrphanage(db, {
      lat:"-27.2058128",
      lng:"-49.6555874",
      name: "Lar das meninos",
      about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "98999999999",
      images:[
        "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
        "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ].toString(),
      instructions:"Venha como se sentir a vontade e trage muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até as 8h",
      open_on_weekends:"1"
    
  })

  //Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar um orfanato, pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage)

  // //Deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));




})