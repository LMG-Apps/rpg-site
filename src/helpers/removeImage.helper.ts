import fs from 'fs'
import path from 'path'

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp')

const removeImage = (image: string) => {
  if (image) {
    fs.unlink(path.resolve(tmpPath, `${image}`), (err) => {
      if (err) console.log(err)
    })
  }
}

export default removeImage
