$("#btn1").click(() => {
  $("#div1").hide(2000).show(2000);
});

$("#btn2").click(() => {
  $("#div2").toggle(2000);
});

$("#btn3").click(() => {
  $("#div3").animate(
    {
      opacity: 0.5,
      height: "toggle",
      width: "toggle",
    },
    2000
  );
});
