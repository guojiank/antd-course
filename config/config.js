export default {
  singular: true,
  plugins: [["umi-plugin-react", { antd: true, dva: true }]],
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        { path: "/index", component: "./index" },
        { path: "/helloworld", component: "./helloworld" },
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "./dashboard/analysis" },
            { path: "/dashboard/monitor", component: "./dashboard/monitor" },
            {
              path: "/dashboard/worksplace",
              component: "./dashboard/workplace"
            }
          ]
        },
        { path: "/puzzlecards", component: "./puzzlecards" }
      ]
    }
  ]
};
