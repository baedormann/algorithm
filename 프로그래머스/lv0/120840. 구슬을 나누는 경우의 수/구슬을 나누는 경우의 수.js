function solution(balls, share) {
  if (balls <= 0 || share <= 0 || share > balls) {
    return 0;
  }

  let numerator = 1;
  let denominator = 1;

  // 분자 계산
  for (let i = balls; i > balls - share; i--) {
    numerator *= i;
  }

  // 분모 계산
  for (let i = share; i > 0; i--) {
    denominator *= i;
  }

  return numerator / denominator;
}