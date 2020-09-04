import { create } from 'mobx-persist'

import { UserStore } from './user.store'
import { createContext } from 'react'

const hydrate: any = create({
  storage: localStorage,
  jsonify: true,
})

const finishedLoading = () => {
  return 'yes'
}

export class RootStore {
  userStore: UserStore = new UserStore(this)

  constructor() {
    Promise.all([hydrate('user', this.userStore)])
    // .then(() => finishedLoading())
  }
}

export const RootStoreContext: React.Context<RootStore> = createContext(
  new RootStore()
)
