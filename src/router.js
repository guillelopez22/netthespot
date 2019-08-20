import Vue from "vue";
import Router from "vue-router";
// import App from "./App.vue";
import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import Login from "./views/Login.vue";
import Ordenes from "./views/Ordenes.vue";
import Register from "./views/Register.vue";
import Admin from "./views/Admin.vue";

import Bebida from "./views/Bebida.vue";
import Combo from "./views/Combo.vue";
import Insumo from "./views/Insumo.vue";
import Mesa from "./views/Mesa.vue";
import Personal from "./views/Personal.vue";
import Producto from "./views/Producto.vue";
import Promocion from "./views/Promocion.vue";
import Proveedor from "./views/Proveedor.vue";
//import ProductoElaboradoDetallado from './components/ProductoElaboradoDetallado.vue'
//import ProductoElaborado from './components/ProductoElaborado.vue'
import Usuario from "./views/Usuario.vue";
import MesaMesero from "./views/MesaMesero.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Menu",
      path: "/menu",
      component: Menu
    },
    {
      name: "Register",
      path: "/registrar",
      component: Register
    },
    {
      name: "Login",
      path: "/login",
      component: Login
    },
    {
      name: "Admin",
      path: "/admin",
      component: Admin,
      children: [
        {
          name: "Bebida",
          path: "/bebida",
          component: Bebida
        },
        {
          name: "Combo",
          path: "/combo",
          component: Combo
        },
        {
          name: "Insumo",
          path: "/insumo",
          component: Insumo
        },
        {
          name: "Personal",
          path: "/personal",
          component: Personal
        },
        {
          name: "Mesas",
          path: "/mesa",
          component: Mesa
        },
        {
          name: "Producto",
          path: "/producto",
          component: Producto
        },
        {
          name: "Promocion",
          path: "/promocion",
          component: Promocion
        },
        {
          name: "Proveedor",
          path: "/proveedor",
          component: Proveedor
        },
        /*{
          name: 'ProductoElaboradoDetallado',
          path: "/productoelaboradodetallado",
          component: ProductoElaboradoDetallado
        },
        {
          name: 'ProductoElaborado',
          path: "/productoelaborado",
          component: ProductoElaborado
        },*/
        {
          name: "Usuario",
          path: "/usuario",
          component: Usuario
        },
        {
          name: "MesaMesero",
          path: "/mesamesero",
          component: MesaMesero
        },
        {
          name: "Ordenes",
          path: "/ordenes",
          component: Ordenes
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
