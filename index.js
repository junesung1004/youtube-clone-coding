const mypageBtn = document.querySelector("#mypageBtn");

//마이 페이지 이동 버튼 로직
const mypage = () => {
  // 클릭했을 때 mypage.html 링크 이동 하는 코드
  window.location.href = "mypage.html";
};

mypageBtn.addEventListener("click", mypage);

const searchIcon = document.querySelector(".bx.bx-search");
const searchInput = document.querySelector(".search-text-wrap input");

searchIcon.addEventListener("click", () => {
  searchInput.focus();
});
