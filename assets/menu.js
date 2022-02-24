function menu() {
  var config = {
    control: false, //css class 開關
    transition: "0", //css過場變數
    itemsRaw: document.querySelectorAll("[data-menu]"),
    items: [],
    controller: document.querySelector("[data-menu-control]")
  };
  config.controller.addEventListener("click", (e) => {
    // console.log(config.control);
    run();
  });
  window.addEventListener("load", () => {
    start();
    config.items.forEach((e) => {
      // Then Run
      e.Raw.setAttribute("style", `${e.Style};`);
    });
  });
  console.log(config);

  function start() {
    document.querySelectorAll(".menu-background a").forEach((e) => {
      e.addEventListener("click", () => {
        run();
      });
    });
    document.querySelectorAll(".menu a").forEach((e) => {
      e.addEventListener("click", () => {
        if (config.control == true) {
          run();
        }
      });
    });
    config.itemsRaw.forEach((e) => {
      // 功能：新增紀錄 config.control 上一個變更前的客戶端位置紀錄
      var m = {
        Time: {
          In: "",
          Out: ""
        },
        CubicBezier: {
          In: "",
          Out: ""
        },
        Style: ``,
        Delay: {
          In: "",
          Out: ""
        },
        Raw: e
      };

      // Time
      if (e.dataset.menuTime) {
        m.Time.In = e.dataset.menuTime;
        m.Time.Out = e.dataset.menuTime;
      } else if (e.dataset.menuTimeIn || e.dataset.menuTimeOut) {
        m.Time.In = e.dataset.menuTimeIn;
        m.Time.Out = e.dataset.menuTimeOut;
      }
      // cubic-bezier
      if (e.dataset.menuCubicBezier) {
        m.CubicBezier.In = e.dataset.menuCubicBezier;
        m.CubicBezier.Out = e.dataset.menuCubicBezier;
      } else if (e.dataset.menuCubicBezierIn || e.dataset.menuCubicBezierOut) {
        m.CubicBezier.In = e.dataset.menuCubicBezierIn;
        m.CubicBezier.Out = e.dataset.menuCubicBezierOut;
      }
      // Delay
      if (e.dataset.menuDelay) {
        m.Delay.In = e.dataset.menuDelay;
        m.Delay.Out = e.dataset.menuDelay;
      } else if (e.dataset.menuDelayIn || e.dataset.menuDelayOut) {
        m.Delay.In = e.dataset.menuDelayIn;
        m.Delay.Out = e.dataset.menuDelayOut;
      }
      // style
      if (e.dataset.menuStyle) {
        m.Style = e.dataset.menuStyle;
      }
      // Output Preview
      // console.log("Output Preview")
      // console.log(m)

      config.items.push(m);
    });
  }

  function run() {
    config.control = !config.control;
    setTimeout(() => {
      config.items.forEach((e) => {
        // Then Run
        if (config.control == false) {
          e.Raw.setAttribute(
            "style",
            `transition: all ${e.Time.Out} ${e.CubicBezier.Out} ${e.Delay.Out};-webkit-transition: all ${e.Time.Out} ${e.CubicBezier.Out} ${e.Delay.Out};${e.Style}`
          );
        }
        if (config.control == true) {
          e.Raw.setAttribute(
            "style",
            `transition: all ${e.Time.In} ${e.CubicBezier.In} ${e.Delay.In};-webkit-transition: all ${e.Time.In} ${e.CubicBezier.In} ${e.Delay.In};`
          );
        }
      });
    }, 0);
  }
  // run();
}
menu();
