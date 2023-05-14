import React from 'react'
import Header from '@/components/Common/Header/Header'
import * as S from '@/pages/ReservationHistoryPage/ReservationHistoryPage.style'
import { ChevronRight, PaymentIcon } from '../../assets/images'

const ReservationHistoryPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.PageTitle>
          <div>
            <a href="#"> 계정 </a>
            <ChevronRight />
            <span> 결제 및 결제 수단 </span>
          </div>
          <S.PageTitleTitle>결제 및 결제 수단</S.PageTitleTitle>
        </S.PageTitle>

        {/* <S.menu>
          <button>결제</button>
          <button>대금수령</button>
        </S.menu> */}

        <S.MainContainer>
          <S.Main>
            <S.DivisionLineRow />
            <S.ListItem>
              <h3>결제내역</h3>
              <p>모든 결제 및 환불 내역을 확인하세요.</p>
              <S.Button>결제 관리하기</S.Button>
            </S.ListItem>
            <S.ListItem>
              <h3>결제 수단</h3>
              <p>
                호텔비앤비의 안전한 결제 시스템을 이용해 결제 수단을 추가하고 다음 여행 계획을 세워
                보세요.
              </p>
              <S.Lists>
                <S.DivisionLineRow />
                <S.List>
                  <div className="list--content">
                    <div></div>
                    <div>
                      <div>마스터카드 ..... 2261</div>
                      <span>만료일: 12 / 2027 </span>
                    </div>
                    <div></div>
                  </div>
                </S.List>
                <S.DivisionLineRow />
                <S.List>
                  <div className="list--content">
                    <div></div>
                    <div>
                      <div>마스터카드 ..... 2261</div>
                      <span>만료일: 12 / 2027 </span>
                    </div>
                    <div></div>
                  </div>
                </S.List>
                <S.DivisionLineRow />
              </S.Lists>
              <S.Button>결제 수단 추가</S.Button>
            </S.ListItem>
            <S.ListItem>
              <h3>쿠폰</h3>
              <p>쿠폰을 추가하고 다음번 여행에서 할인을 받으세요.</p>
              <S.Lists>
                <S.DivisionLineRow />
                <S.List>
                  <div>
                    <span>쿠폰</span>
                    <div></div>
                  </div>
                  <div></div>
                </S.List>
                <S.DivisionLineRow />
              </S.Lists>
              <S.Button>쿠폰 추가</S.Button>
            </S.ListItem>
          </S.Main>
          <S.Aside>
            <S.AsideItem>
              <PaymentIcon />
              <h3>에어비앤비를 통해서만 결제하세요.</h3>
              <p>
                에어비앤비의 서비스 약관, 결제 서비스 약관, 환불 정책 및 기타 안전장치의 보호를
                받으려면 항상 에어비앤비를 통해 결제와 커뮤니케이션을 진행하시기 바랍니다.자세히
                알아보기.
              </p>
            </S.AsideItem>
          </S.Aside>
        </S.MainContainer>
      </S.Container>
    </>
  )
}

export default ReservationHistoryPage
