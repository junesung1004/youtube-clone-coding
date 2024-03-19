const homeBtn = document.querySelector("#homeBtn");

// 메인 홈페이지 이동 버튼 로직

const homepage = () => {
  window.location.href = "index.html";
};

homeBtn.addEventListener("click", homepage);
