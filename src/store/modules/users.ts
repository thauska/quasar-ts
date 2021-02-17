import {
  getModule,
  Module,
  MutationAction,
  VuexModule
} from 'vuex-module-decorators'
import store from '../index'
import { User, UserRegister, UserSubmit } from '../models'
import { loginUser, registerUser, setJWT } from '../api'

  @Module({
    dynamic: true,
    namespaced: true,
    name: 'users',
    store
  })
class UsersModule extends VuexModule {
    user: User | null = null;

    get email () {
      return (this.user && this.user.email) || null
    }

    @MutationAction
    async login (userSubmit: UserSubmit) {
      const user = await loginUser(userSubmit)
      setJWT(user.token)
      return { user }
    }

    @MutationAction
    async register (userRegister: UserRegister) {
      const user = await registerUser(userRegister)
      return { user }
    }
  }

export default getModule(UsersModule)
