"use strict";
const { Author, Book } = require("./Ex1"); // ถ้ามี 2 class ใส่ { } ด้วย เราใช้ , {Author,Book}
// npm install @types/node --save-dev / คำสั่งนี้ เรียกใช้ nodemodule ขึ้นมา มันไม่รู้จัก require เลยต้องใช้คำสั่งนี้ 
console.log("############# Ex1 #############");
const author1 = new Author("Phitharawat Ketmanee", "664259024@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Patcharee", "Patcharee@webmail.npru.ac.th");
console.log(author2.toString());
const book1 = new Book("Basic Programming", [author1, author2], 180, 300);
console.log(book1.toString());
console.log(book1.getAuthorsName());
console.log("##################################");
