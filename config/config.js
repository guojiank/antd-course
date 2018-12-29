export default {
  plugins: [["umi-plugin-react", { antd: true, dva: true }]],
  routes: [
    {
      path: "/",
      component: "./layout",
      routes: [
        { path: "/helloworld", component: "./HelloWorld" },
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "./Dashboard/Analysis" },
            { path: "/dashboard/monitor", component: "./Dashboard/Monitor" },
            {
              path: "/dashboard/worksplace",
              component: "./Dashboard/Workplace"
            }
          ]
        },
        { path: "/puzzlecards", component: "./PuzzleCardsPage" }
      ]
    }
  ]
};
