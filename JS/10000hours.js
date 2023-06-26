$(function () {
  const inputExpert = $("#input_expert");
  const inputTime = $("#input_time");
  const startButton = $(".start_btn");
  const closeButton = $(".close_btn");
  const goButton = $(".go_btn");
  const shareButton = $(".share_btn");
  const modal = $("#modal");
  const loading = $(".loading_wrap");
  const results = $(".results_wrap");
  const expertResult = $(".expert_result");
  const timeResult = $(".time_result");

  // 시작버튼 핸들러

  function calculator() {
    const expertValue = inputExpert.val();
    const timeValue = inputTime.val();
    const timeValue_int = Number(timeValue);

    expertResult.text(expertValue);
    timeResult.text(parseInt(10000 / timeValue_int, 10));
  }

  function handleDisplay() {
    loading.css("display", "block");
    results.css("display", "none");
    setTimeout(() => {
      loading.css("display", "none");
      results.css("display", "flex");
    }, 1200);
  }

  function handleStart() {
    handleDisplay();
    setTimeout(() => {
      calculator();
    }, 1200);
  }

  startButton.on("click", handleStart);

  // 계산하기 버튼 핸들러

  function handleGo() {
    modal.css("display", "flex");
  }

  // 훈련가기 버튼 핸들러

  goButton.on("click", handleGo);

  function handleClose() {
    modal.css("display", "none");
  }

  modal.on("click", (e) => {
    if (e.target == modal) {
      modal.css("display", "none");
    }
  });

  closeButton.on("click", handleClose);

  // 공유 버튼 핸들러

  function handleShare() {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL이 복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 실패: ", err);
      });
  }

  shareButton.on("click", handleShare);
});
