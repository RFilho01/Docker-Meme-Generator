import memeMaker from '@erickwendel/meme-maker'

const options = {
  image: './img/julius.jpg',
  outfile: './img/meme-final.png',
  topText: 'Se você não comprar nada',
  bottomText: 'O desconto é maior',
}

memeMaker(options).then(_ => {
  console.log('Imagem salva em: ' + options.outfile)
}).catch(error => console.log(error));








