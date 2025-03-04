import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {   
    path: "/",
    alias: "/missionCommanderList",
    name: "missionCommanderList",
    component: ()=> import("./components/MissionList")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
