![배너](https://i.postimg.cc/XJ9tJbBT/Carrier.png)

# AI 기반 일정 및 업무 관리 서비스 (Carrier)

AI가 일정, 메일, 회고, 회의를 간편화해 **업무를 간편하게 만드는 서비스**입니다.  
**사회초년생의 성장**을 돕고, **통합 플랫폼에서 모든 업무를 해결**하도록 설계되었습니다.

프로젝트 기간 - 2025.01. ~ 2025.04.
[운영중인 서비스 바로가기](https://www.jing5s.kro.kr)

## 세부 성과
2025.04 | Carrier 서비스 배포  
2025.04 | 교내 AI 경진 대회 우수상  
2025.05 | 국제인공지능 대전 부스 운영

## 기능

**캘린더 및 투두**
- 일정 및 할 일 생성, 조회, 수정, 삭제 기능 제공

**이메일**
- 이메일 조회하기, 본문 요약 처리, 일정 자동 추가 기능

**사용자**
- 일정 요약 제공 시간 설정 및 유저 정보 업데이트 기능 지원

**녹음 요약**
- 음성 파일을 텍스트로 변환하고 본문 핵심 요약

**일기**
- 일기 작성 및 키워드 기반 주제 추천 기능 지원

## 기술 도입

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-28.1.1-47848F?style=flat-square\&logo=electron\&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-TanStack-FF4154?style=flat-square\&logo=reactquery\&logoColor=white)
![Jotai](https://img.shields.io/badge/Jotai-State_Management-1E90FF?style=flat-square)
![Vanilla Extract](https://img.shields.io/badge/Vanilla_Extract-CSS_in_TS-DD80AA?style=flat-square)

### FSD 아키텍처 사용
FSD (Feature-Sliced Design) 아키텍처를 도입하여 도메인 중심으로 기능을 분리하고,
UI, 상태, API를 하나의 폴더 내에서 응집력 있게 관리했습니다.
→ 각 기능의 책임이 명확해져 협업 효율성, 코드 유지보수성, 기능 확장성이 대폭 향상되었습니다.

```text
src/
├── app/                               # 글로벌 설정 및 앱 진입 셋업
│   ├── providers/                     # React Query 등 글로벌 Provider
│   ├── App.tsx                        # 앱 루트 컴포넌트
│   ├── Layout.tsx                     # 페이지 레이아웃 템플릿
│   └── routes.tsx                     # 라우터 정의
│
├── pages/                             # 라우팅 대상 페이지
│   └── [FeatureName]/                 # 예: Mail, Home, Diary, Proceed 등
│       └── index.tsx                  # 페이지 진입 컴포넌트
│
├── features/                          # 각 기능의 UI + 서비스 + 상태
│   └── [FeatureName]/                 # 도메인 단위로 분리 (Mail, Home 등)
│       ├── [ComponentGroup]/          # 기능 하위 UI 모듈 (Modal, Sidebar 등)
│       ├── services/                  # API 호출 및 캐싱 (TanStack Query)
│       ├── hooks/                     # 해당 기능 전용 커스텀 훅
│       ├── contexts/                  # 필요한 경우 local context
│       ├── ui/                        # 아이콘, UI 요소 모음
│       └── utils/                     # 도메인 전용 유틸
│
├── entities/                          # 전역 도메인 모델 및 상태
│   └── [Domain]/                      # 예: calendar, mail, user
│       ├── model.ts                   # jotai atom 등 상태 모델
│       ├── remote.ts                  # 외부 fetch wrapper (선택)
│       ├── type.ts                    # 타입 정의
│       └── contexts/                  # 전역 context (필요 시)
│
├── shared/                            # 전역 공용 요소
│   ├── components/                    # 범용 컴포넌트 (DatePicker 등)
│   ├── hooks/                         # 재사용 커스텀 훅
│   ├── icons/                         # 아이콘 또는 이미지
│   ├── lib/                           # 전역 유틸 함수 또는 래퍼 (예: isElectron)
│   ├── styles/                        # 글로벌 스타일, 테마
│   └── constants/                     # 전역 상수
│
├── widgets/                           # 페이지 공통 레벨의 UI 조각
│   └── NavigationBar/                 # 페이지 간 네비게이션 컴포넌트
│
├── renderer/                          # Electron 렌더링 HTML
│   └── index.html
│
├── main.tsx                           # Vite 진입 파일
└── vite-env.d.ts                      # 타입 확장
```

## 트러블 슈팅
### Electron과 웹 브라우저 환경에서의 라우팅 방식 차이

#### As-Is : Electron에서 흰 화면만 출력됨

* Electron은 기본적으로 `file://` 프로토콜을 사용하는데, 이로 인해 `BrowserRouter`가 라우팅을 제대로 처리하지 못함
* `URL 기반 히스토리 라우팅`이 동작하지 않아 빈 화면만 렌더링됨

#### To-Be : HashRouter 분기 적용 및 환경 구분 처리

* Electron 환경 여부를 판별하기 위해 `contextBridge`로 `isElectron = true` 값을 expose
* `isElectron()` 유틸 함수로 웹/앱 환경을 런타임에 판단
* Electron 환경에서는 `HashRouter`, 웹 환경에서는 `BrowserRouter`를 동적으로 적용
  → 라우팅 오류 없이 모든 환경에서 동일한 UX 제공
[![image.png](https://i.postimg.cc/yN4Gpf3W/image.png)](https://postimg.cc/hXsMf1rq)

#### 회고 : 브라우저와 Electron의 라우팅 차이를 고려한 설계 필요성 인식

* 환경에 따라 라우팅 방식이 달라짐을 깨달음
* 플랫폼 특성을 고려한 **라우팅 방식 분리**가 필수
* React Router와 Electron의 렌더링 메커니즘을 함께 이해하고 설계해야 함

## 페이지 구성

|                              메인 페이지                              |                              메일 페이지                              |
|:----------------------------------------------------------------:|:----------------------------------------------------------------:|
|   <img width="329" src="https://i.postimg.cc/0j6C2N10/1.png"/>   | <img width="329" src="https://i.postimg.cc/h4wrZVVy/image.png"/> |  
|                             하루 일정 요약                             |                            녹음 요약 페이지                             |  
| <img width="329" src="https://i.postimg.cc/P5bQqc99/image.png"/> | <img width="329" src="https://i.postimg.cc/s2V9GmRX/image.png"/> |

## 팀원
|                             Backend                             |                               Frontend                               |                               Frontend                               |                            Frontend                             |                            Designer                             |
|:---------------------------------------------------------------:|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|:---------------------------------------------------------------:|:---------------------------------------------------------------:|
| ![image](https://avatars.githubusercontent.com/u/127452485?v=4) | ![image](https://avatars.githubusercontent.com/u/127070837?v=4) | ![image](https://avatars.githubusercontent.com/u/126847458?v=4) | ![image](https://avatars.githubusercontent.com/u/82251632?v=4) | ![image](https://avatars.githubusercontent.com/u/119480957?v=4) |
|                [안예성](https://github.com/anys34)                 |                 [이민준](https://github.com/MinjuN07)                  |                  [추성우](https://github.com/chooseongwoo)                  |               [이승현](https://github.com/Jamkris)               |                [최성훈](https://github.com/seonghoon07)                |
