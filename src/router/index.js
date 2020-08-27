// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/home/index.vue";

// Vue.use(VueRouter);

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: Home
//     },
//     {
//         path: "/directMessage",
//         name: "directMessage",
//         component: () =>
//             import(/* webpackChunkName: "profile" */ "../views/directMessage"),
//     },
//     {
//         path: "/explore",
//         name: "Explore",
//         component: () =>
//             import(/* webpackChunkName: "profile" */ "../views/explore"),
//     },

//     {
//         path: "/liked",
//         name: "Liked",
//         component: () =>
//             import(/* webpackChunkName: "profile" */ "../views/liked"),
//     },
//     // {
//     {
//         path: "/profile",
//         name: "Profile",
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//             import(/* webpackChunkName: "profile" */ "../views/profile"),

//         children: [
//             {
//                 path: "",
//                 name: "ProfilePosts",
//                 component: () =>
//                     import(/* webpackChunkName: "profile" */ "../views/profile/posts"),
//             },
//             {
//                 path: "saved",
//                 name: "SavedPosts",
//                 component: () =>
//                     import(/* webpackChunkName: "profile" */ "../views/profile/saved"),
//             },
//             {
//                 path: "tagged",
//                 name: "TaggedPosts",
//                 component: () =>
//                     import(/* webpackChunkName: "profile" */ "../views/profile/tagged"),
//             },
//         ]
//     }
// ];

// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes
// });

// export default router;
