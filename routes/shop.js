const path = require("path");

const express = require("express");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  //__dirname: 절대 경로를 이 프로젝트 폴더(현재 파일이 속한 routes)로 변경해주는 전역 변수
  // path.join으로 경로를 이어붙임
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  const products = adminData.products;
  // res.render("shop", { prods: products, docTitle: "Shop" });
  //   next(); // 다음 미들웨어로 요청이 넘어갈 수 있게 해줌
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
