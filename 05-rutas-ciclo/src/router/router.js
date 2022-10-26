import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path:'/',
    redirect: '/'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/*webpackChunkName:"PokemonLayout"*/ '../modules/pokemon/layouts/PokemonLayout'),
    children: [
      { 
        path: 'home', 
        name: 'pokemon-home',
        component: () => import(/*webpackChunkName:"ListPage"*/ '../modules/pokemon/pages/ListPage')
      },
      { 
        path: 'about', 
        name: 'pokemon-about',
        component: () => import(/*webpackChunkName:"AboutPage"*/ '../modules/pokemon/pages/AboutPage')
      },
      { 
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () => import(/*webpackChunkName:"PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number( route.params.id )
          return isNaN( id ) ? { id: 1 } : { id: id }
        }
      },
      {
        path:'',
        name: 'redirectpokemon',
        redirect: { name: 'pokemon-about' }
      },
    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import(/*webpackChunkName:"DragonBallLayout"*/ '../modules/dbz/layouts/DragonBallLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/*webpackChunkName:"DbzCharacters"*/ '../modules/dbz/pages/Characters'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/*webpackChunkName:"DbzAbout"*/ '../modules/dbz/pages/About'),
      },
      {
        path:'',
        name: 'redirectdbz',
        redirect: { name: 'dbz-characters'}
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import(/*webpackChunkName:"NotFound"*/ '../modules/shared/pages/NoPageFound')
  } //cualquier url que no haga match en las routes 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// guard global - Sincrono
// router.beforeEach( ( to, from, next ) => {
//   // console.log( { next, to, from } );

//   const random = Math.random() * 100;

//   if(random > 50 ) {
  
//     console.log('autenticado')
//     next()

//   } else {
    
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({name: 'pokemon-home'})

//   }
// })

const canAccess = () => {
  return new Promise( resolve => {
    const random = Math.random() * 100;
      if(random > 50 ) {
        console.log('Autenticado - canAccess')
        resolve(true)
      } else {
        console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
        resolve(false)
      }
  })
}

router.beforeEach( async (to, from, next) => {
  const authorized = await canAccess()

  authorized
    ? next()
    : next({name: 'pokemon-home'})
} )

export default router