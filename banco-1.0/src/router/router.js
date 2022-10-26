import { createRouter, createWebHashHistory } from "vue-router"
import marvelApi from "@/api/marvelAPI"

const routes = [
  {
    path:'/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import(/*webpackChunkName:"Login"*/ '@/modules/login/layouts/Login')
  },
  {
    path: '/RecursosHumanos',
    name: 'RecursosHumanos',
    component: () => import(/*webpackChunkName:"PokemonLayout"*/ '@/modules/recursosHumanos/layouts/RecursosHumanosLayout'),
    // children: [
    //   { 
    //     path: 'home', 
    //     name: 'pokemon-home',
    //     component: () => import(/*webpackChunkName:"ListPage"*/ '../modules/pokemon/pages/ListPage')
    //   },
    //   { 
    //     path: 'about', 
    //     name: 'pokemon-about',
    //     component: () => import(/*webpackChunkName:"AboutPage"*/ '../modules/pokemon/pages/AboutPage')
    //   },
    //   { 
    //     path: 'pokemonid/:id',
    //     name: 'pokemon-id',
    //     component: () => import(/*webpackChunkName:"PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'),
    //     props: (route) => {
    //       const id = Number( route.params.id )
    //       return isNaN( id ) ? { id: 1 } : { id: id }
    //     }
    //   },
    //   {
    //     path:'',
    //     name: 'redirectpokemon',
    //     redirect: { name: 'pokemon-about' }
    //   },
    // ]
  },
  {
    path: '/Entrevistador',
    name: 'Entrevistador',
    component: () => import(/*webpackChunkName:"PokemonLayout"*/ '@/modules/entrevistador/layouts/EntrevistadorLayout'),
  },
  {
    path: '/SuperUsuario',
    name: 'SuperUsuario',
    component: () => import(/*webpackChunkName:"PokemonLayout"*/ '@/modules/superUsuario/layouts/SuperUsuarioLayout'),
  },
  // {
  //   path: '/dbz',
  //   name: 'dbz',
  //   component: () => import(/*webpackChunkName:"DragonBallLayout"*/ '../modules/dbz/layouts/DragonBallLayout'),
  //   children: [
  //     {
  //       path: 'characters',
  //       name: 'dbz-characters',
  //       component: () => import(/*webpackChunkName:"DbzCharacters"*/ '../modules/dbz/pages/Characters'),
  //     },
  //     {
  //       path: 'about',
  //       name: 'dbz-about',
  //       component: () => import(/*webpackChunkName:"DbzAbout"*/ '../modules/dbz/pages/About'),
  //     },
  //     {
  //       path:'',
  //       name: 'redirectdbz',
  //       redirect: { name: 'dbz-characters'}
  //     },
  //   ]
  // },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import(/*webpackChunkName:"NotFound"*/ '../modules/shared/pages/NoPageFound')
  } //cualquier url que no haga match en las routes 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const options = {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    "Content-type": "application/json; charset=utf-8"
  },
  data: {
    apikey: 'b47f633adb06841bbe43ff56453ae605',
    ts: 1,
    hash: 'c860118b7dc3c1d048af7e3369ff8685'
  }
}



const canAccess = () => {
  return new Promise( resolve => {
    console.log(marvelApi.get('/1'))
  })
}



router.beforeEach( async (to, from, next) => {
  console.log({to,from,next})
  const authorized = await canAccess()
  console.log(authorized)
  // authorized
  //   ? next()
  //   : next({name: 'pokemon-home'})
} )

export default router