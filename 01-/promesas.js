

const promesa = new Promise((resolve,reject)=> {

    setTimeout(() => {
        //console.log('2 segundos despues');
        
        const hero = 'Batman';
        console.log(hero)
        
        resolve(hero);
    },2000)
});

promesa.then((hero)=>{
    console.log('then',hero);
})
