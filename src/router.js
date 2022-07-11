import { createRouter, createWebHistory } from "vue-router";
import FormSuccess from "./components/FormSuccess.vue";
import RegisterForm from "./components/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/register" },
    { path: "/register", component: RegisterForm },
    { path: "/success", component: FormSuccess },
  ],
});

export default router;
