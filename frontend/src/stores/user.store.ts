import { observable, computed } from 'mobx'
import { persist } from 'mobx-persist'
import { RootStore } from './root.store'

interface LoginStatus {
  loggedIn: boolean
}

export class UserStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @persist('object') @observable loginStatus: LoginStatus = { loggedIn: false }
  @observable hydrating: boolean = false

  setHydrating(value: boolean) {
    this.hydrating = value
  }

  setLoggedIn(value: boolean) {
    this.loginStatus.loggedIn = value
  }
}
