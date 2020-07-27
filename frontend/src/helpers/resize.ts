// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you think of Node.js? ", function(answer) {
//   console.log("Thank you for your valuable feedback:", answer);
//   rl.close();
// });
// const sharp = require('sharp');
import sharp from 'sharp'

const resize = (
  width: number,
  heigth: number,
  source: string,
  destination: string
) => {
  sharp(source)
    .resize(width, heigth)
    .toFile(destination, (error, info) => {
      console.log('compose', error, info)
    })
}

resize(
  2000,
  2000,
  'src/assets/images/campire1.jpeg',
  'src/assets/images/campfireresize.jpeg'
)

export default resize
