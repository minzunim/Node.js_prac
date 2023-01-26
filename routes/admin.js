const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// 상품을 저장할 배열 만들기
const products = [];

// admin으로 사용해야만 하는 페이지이므로 admin.js 라우터로 분리함
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
