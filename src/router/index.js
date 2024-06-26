import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/folder/home'
  },
  { path: '/folder/home', component: () => import ('../views/HomePage.vue') },
  { path: '/folder/listOfUser', component: () => import ('../views/UsersPage.vue') },
  { path: '/folder/listOfAlbums', component: () => import ('../views/AlbumsPage.vue') },
  { path: '/folder/listOfArtists', component: () => import ('../views/ArtistsPage.vue') },
  { path: '/folder/albumsWithSongs/:idAlbum', name:'albumsWithSongs', component: () => import ('../views/AlbumWithSongsPage.vue') },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
