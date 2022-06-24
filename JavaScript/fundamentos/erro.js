function tratarErroELancar(e){
 // throw new Error('Error Bem !!! ')

  throw '...'
}


function imprimirNomeGritado(obj) {
  try{
    console.log(obj.name.toUpperCase() + '!!!')
  }catch (e){
    tratarErroELancar(e)
  } finally {
    console.log('Final')
  }
  
}

const obj = { nome: 'Gabys'}
imprimirNomeGritado(obj)