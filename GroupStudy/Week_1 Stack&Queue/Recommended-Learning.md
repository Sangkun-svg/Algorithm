섹션 1 : 빅오 표기법

<details>
<summary> 섹션 18 : 자료 구조 소개
</summary>
<div markdown="1">

- Summery

  - 최고의 자료구조란?
  - ES2015 class 구문 개요
  - 자료구조 : class 키워드
  - 자료구조 : intance 메서드 추가하기
  - 자료구조 : class 메서드 추가하기

- 목적
  - Big O 의 시점에서 `{}` 와 `[]` 이 어떻게 작동하는지에 대한 내용
    - 데이터를입력하는데 여러가지의 방법과 방법에 따른 속도차이
  - 왜 `[]` 앞에 데이터를 추가하는것이 안좋은지에 대한 내용
  - 더 나은 대안을 찾아보고 처리시간을 비교하는 내용

## `객체의 Big O`

- 객체를 이용할 때

  - 정렬이 필요하지 않을 때 잘 작동한다
  - 빠른접근 , 입력과 제거를 원할때

- 객체의 Big O

  - Insertion (정렬) : O(1)
  - Removal (삭제) : O(1)
  - Searching (검색) : O(N)
  - Access (접근) : O(1)

- 객체 내장 메서드의 Big O
  - Object.keys : O(N)
  - Object.values : O(N)
  - Object.entries : O(N)
  - hasOwnProperty : O(1)

## `배열의 Big O`

- 배열을 사용하는 경우
  - 정렬되어있는 데이터를 사용하기 위해 → 성능 최적화하고 싶다면 필수적
- 배열의 Big O

  - Insertion (정렬) : 어디에 입력하느냐에 따라 다르다
  - Removal (삭제) : 어디에 입력하느냐에 따라 다르다
  - Searching (검색) : O(N)
  - Access (접근) : O(1) → 배열이 길이의 영향을 받지 않아 O(1)
    내부 실행 과정을 살펴봐서 왜 O(1) 인지 알면 좋을거같다.

- 배열 내장 메서드의 Big O
  - push : O(1)
  - pop : O(1)
  - shift : O(N)
  - unshift : O(N)
  - concat : O(N)
  - slice : O(N)
  - splice : O(N)
  - sort : O(N \* $log_(N)$)
  - forEach & map & filter & reduce & etc.. : O(N)

</div>
</details>

<!-- <details>
<summary> 섹션 19 : 단일 연결 리스트
</summary>
<div markdown="1">
asd
</div>
</details>

<details>
<summary> 섹션20 : 이중 연결 리스트
</summary>
<div markdown="1">
asd
</div>
</details> -->
