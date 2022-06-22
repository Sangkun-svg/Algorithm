## `Algorithm과 관련된 코드 및 정보를 저장합니다.`

본 내용은 유데미의 강의를 토대로 하고있습니다

[강의 주소](https://www.udemy.com/course/best-javascript-data-structures/)

<details>
<summary> About Big O Notation
</summary>
<div markdown="1">

# Big O Notation

- Summery
  - Big O 표기법의 필요성
  - Big O 표기법이란 ?
  - Big O 표기법 예시
  - 시간복잡도 와 공간복잡도
  - Big O 표기법을 사용하여 다른 알고리즘의 시간복잡도 와 공간복잡도를 평가해보기
  - Log(Logarithm) 이란?

## `Big O 표기법의 필요성`

- About Big O Notation

  - 하나의 문제에는 많은 해결방법이 존재한다.
    해결법마다 매개변수나 함수명 같은 작은 부분부터 접근하는 방식 자체가 달라지기도 하는데 이때 코드만 보고서 어떤코드가 가장 좋은 방법인지 알수 있는가?
    Big O 표기법을 이용해 알 수 있다 !
  - 코드 시간 재기

    1. built-in method 사용하기

       - 예시

         ```tsx
         function addUpTo(n) {
           let total = 0;
           for (let i = 1; i <= n; i++) {
             total += i;
           }
           return total;
         }

         let t1 = performance.now();
         addUpTo(1000000000);
         let t2 = performance.now();
         console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
         ```

       - 문제점
         - 결과의 신뢰성이 낮다.
         - 기기 사양에 따라 결과가 달라진다.
         - 같은 기계에서 다른 결과가 나올수 있다.
         - 빠른 알고리즘의 속도를 측정할 때 정확하지 않은 결과가 나올수 있다.

    1. Big O 표기법 사용

       - 예시

         ```tsx
         function addUpTo(n) {
           let total = 0;
           for (let i = 1; i <= n; i++) {
             total += i;
           }
           return total;
         }
         // 5n + 2

         function addUpTo2(n) {
           return (n * (n + 1)) / 2;
         }
         // 3n
         ```

       - 코드의 실행 시간을 측정하는것 보단 컴퓨터가 처리해야 할 연산갯수에 따라 시간을 예상한다.

  ## `Big O 표기법이란 ?`

  - Input 값에 따라 알고리즘 실행시간이 어떻게 변하는지 설명하는 방식이다.

  - Big O 표기법 정리하기
    - 연산의 갯수는 중요하지 않고 전체적인 추세가 중요하다.
      - n 이 ♾️ 로 수렴할 때 1n , 3n , 5n … 등등 결국 값은 ♾️ 라는걸 기억하라
    - 상수는 중요하지 않다.
      - 위와 같은 개념으로 n + 1 , n + 100 , n+ 10000 … 결국 n 이 ♾️ 로 수렴하면 값이 ♾️ 이라 상수는 중요하지 않다.
    - 차수가 가장 높은 $n^x$ 을 기준으로 나뉜다.
      - 위와 같은 개념으로 n 이 ♾️ 로 수렴할 때 …생략 , $n^2$ + n +1 의 결과는 O($n^2$)
    - 산수(+ , - , \* , / , …)는 상수로 취급된다.
      - 시간 복잡도에 영향을 주지 못한다.
    - 변수 배정(변수 선언 - 초기화 - 할당) 은 상수로 취급된다.
      - 시간 복잡도에 영향을 주지 못한다.
    - index 를 사용해 배열 element 에 접근하는 것은 상수로 취급된다.
    - 루프 안에 있으면 복잡도는 loop의 길이 \* loop 안에 있는 연산 갯수 이다.
  - 시간 연산자
    - 입력에 따라 알고리즘의 실행시간이 얼마나 걸리는지 계산하는 방법
  - 공간 연산자

    - 입력에 따라 알고리즘이 얼마만큼의 공간을 차지하는지 계산하는 방법
    - 메모리에 집중한다
    - 보조공간 복잡도( = 공간 복잡도)란 ?
      - 입력되는 것을 제외하고 알고리즘 자체가 필요로 하는 공간을 의미한다
    - 기본 지식
      - boolean , number , undefined , null 은 JS 에서 모두 불변공간이다
      - 문자열은 O(n) 의 공간을 필요로 한다
      - 참조타입(Reference Type) 도 대부분 O(n) 이다. (n 은 배열의 길이 || 객체의 key 갯수 )
    - 예시

      ```tsx
      function sum(array) {
        let total = 0;
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          total += arr[i];
        }
        return total;
      }

      /* 공간을 차지하는 것들
      1. total 변수
      2. index 변수
      O(1)
      */
      ```

      ```tsx
      function double(array) {
        let newArray = [];
        for (let idx = 0; idx < array.length; idx++) {
          newArray.push(arr[i] * 2);
        }
        return newArray;
      }
      // 처음에 만든 배열은 loop에서 입력값과 비례해서 길어지는것과 비교하면 중요하지 않다.
      // 차지하는 공간은 입력된 배열의 크기와 비례해서 커지게 된다.
      ```

  - 로그 , logarithms

    - 로그란?

      - 로그는 지수를 다른 방법으로 표현한 것이다.
        - 로그의 정의
          a > 0 , a ≠ 1 , N > 0 일 때
          $a^x$ = N ←→ $\log_{a} { (N) }$= x
          Ex. $\log_{2}{(8)} = 3$ 의 뜻은 **_2를 밑으로 하는 8의 로그방정식은 3 이다._** 라고 의미를 가지고 있으며
          **_2를 8로 만들어주는 차수는 3이다._** 라는 해석이 가능하다

    - 이진로그
      - $\log_{2}$ 로 표현하며 대부분 `밑 2($\_{2}$)` 를 생략하고 $log$ 라고만 사용하는 경우가 있다.
      - $\log_{2}$ === $log$
        - Ex.
          $\log_{2}{(8)} = 3$ === $\log(8)$ $= 3$
      - 어떠한 이진 로그를 대략 계산하기 위해선 그 숫자가 1보다 작이지기 전에 2로 나눠지는 횟수이다.
      - 실제 계산보단 그래프에 어떻게 보이는지가 더 중요하다

  - 섹션 요약
    - 알고리즘의 성능을 분석하기 위해서는 Big O 표기법을 사용한다.
      - 입력의 크기가 늘어날수록 전체적인 추세와 관련되어 있다.
      - Big O 표기법을 사용하여 시간복잡도 와 공간복잡도 에 대한 이해를 높일 수 있다.
      - Big O 표기법은 정확한 계산이 아닌 전체적인 틀을 중요하게 생각한다.
      - Big O 표기법으로 측정되는 알고리즘의 시간복잡도 와 공간복잡도 는 하드웨어의 영향을 받지 않는다.

</div>
</details>
