import fs from 'fs'
import path from 'path'

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp')

const removeImage = async (image: string) => {
  await fs.promises.unlink(path.resolve(tmpPath, `${image}`))
}

export default removeImage
