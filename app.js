const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// pug를 뷰 엔진으로 등록, views 폴더 경로 설정
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body 분석
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// 여기에 위치해야 함
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// 404 에러 처리하기
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// 요청을 계속 들음(listen)
app.listen(3000);
