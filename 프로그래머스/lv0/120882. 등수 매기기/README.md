# [level 0] 등수 매기기 - 120882 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120882) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.18 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 <code>score</code>가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 ≤ <code>score</code>[0], <code>score</code>[1] ≤ 100</li>
<li>1 ≤ <code>score</code>의 길이 ≤ 10</li>
<li><code>score</code>의 원소 길이는 2입니다.</li>
<li><code>score</code>는 중복된 원소를 갖지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>score</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[80, 70], [90, 50], [40, 70], [50, 80]]</td>
<td>[1, 2, 4, 3]</td>
</tr>
<tr>
<td>[[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]</td>
<td>[4, 4, 6, 2, 2, 1, 7]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.</li>
<li>공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.</li>
</ul>

### 풀이

```js
function solution(score) {
    //0. 각 요소에 2번째 요소에 index값을 추가한다.
    for(let i in score){
        score[i].push(i);
    }
    
    //1. 각 요소배열의 0번째 값, 1번째 값의 합으로 내림차순 정렬
    score.sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]))
    
    //2. 2번째 값으로 3번째 index에 등수 값을 추가한다(합이 같으면 같은 등수로 취급).
    let dupCnt = 0;
    for(let i in score){
        if(score[i][0] + score[i][1] === score[i-1]?.[0] + score[i-1]?.[1])
            dupCnt++;
        else 
            dupCnt = 0;
        
        score[i].push(i - dupCnt + 1);
    }
    
    //3. 2번째 값을 사용하여 원래 순서대로 되돌린다.
    score.sort((a, b) => a[2] - b[2])
    
    let rankArr = [];
    
    //4. 원래 순서대로 돌아온 배열의 순위를 새로운 배열에 저장한다.
    for(let i of score) rankArr.push(i[3])
    
    //5. 순위 배열을 반환한다.
    return rankArr;
}
```

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
