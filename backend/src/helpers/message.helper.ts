import * as messages from '../config/messages.config.json'

interface Message {
    [key: string]: string;
}

const message: Message = messages

const getMessage = (key: string) => {
  return message[key] || null
}

export default getMessage
