import { create } from 'mobx-persist'

import { UserStore } from './user.store'
import { createContext } from 'react'
import { observable } from 'mobx'

const hydrate: any = create({
  storage: localStorage,
  jsonify: true,
})

export class RootStore {
  userStore: UserStore = new UserStore(this)

  constructor() {
    this.userStore.setHydrating(true)
    Promise.all([hydrate('user', this.userStore)]).then(() => {
      this.userStore.setHydrating(false)
    })
  }
}

export const RootStoreContext: React.Context<RootStore> = createContext(
  new RootStore()
)
