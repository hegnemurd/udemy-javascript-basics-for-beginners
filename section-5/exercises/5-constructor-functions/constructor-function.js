// ----- MY SOLUTION -----
// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };

// half-written blog post what would it contain

// let draft = new DraftPost("Title", "Body", "Author", 15, [
//   "Comment Author",
//   "Comment Body"],
//   true,
// );

// function DraftPost(title, body, author, views, comments, isLive) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = views;
//   this.comments = comments;
//   this.isLive = isLive;
// }

// console.log(draft);

// Better version of my code which makes more sense

let draft = new DraftPost("Title", "Body", "Author");

function DraftPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

console.log(draft);

// ----- THEIR SOLUTION -----

// let post = new Post("a", "b", "c");

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// console.log(post);
