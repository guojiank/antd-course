export default {
  plugins: [["umi-plugin-react", { antd: true }]],
  routes: [
    {
      path: "/",
      component: "./layout",
      routes: [
        { path: "helloworld", component: "./HelloWorld" },
        {
          path: "dashboard",
          routes: [
            { path: "analysis", component: "./Dashboard/Analysis" },
            { path: "monitor", component: "./Dashboard/Monitor" },
            { path: "worksplace", component: "./Dashboard/Workplace" }
          ]
        }
      ]
    }
  ]
};
