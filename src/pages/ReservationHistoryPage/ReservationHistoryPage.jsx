import React from 'react'
import Header from '@/components/Common/Header/Header'
import * as S from '@/pages/ReservationHistoryPage/ReservationHistoryPage.style'

const ReservationHistoryPage = () => {
  return (
    <>
      <Header></Header>
      <S.Container>
        <S.ContainerWrapper>
          <S.HeaderContainer>
            <S.HeaderWrapper>
              <S.HeaderLiWrapper>계정 </S.HeaderLiWrapper>
              <S.HeaderLiWrapper>결제 및 대금 수령</S.HeaderLiWrapper>
            </S.HeaderWrapper>
            <S.HeaderTitle>결제 및 대금 수령</S.HeaderTitle>
          </S.HeaderContainer>
          <S.menu>
            <button>결제</button>
            <button>대금수령</button>
          </S.menu>
          <div>
            <S.ContentContainer>
              <S.MainContainer>
                <S.ContentWrapper>
                  <S.ContentTitle>결제 내역</S.ContentTitle>
                  <div>모든 결제 및 환불 내역을 확인하세요.</div>
                  <div></div>
                </S.ContentWrapper>
                <S.ContentWrapper>
                  <S.ContentTitle>결제 수단</S.ContentTitle>
                  <div>
                    호텔비앤비의 안전한 결제 시스템을 이용해 결제 수단을 추가하고 다음 여행 계획을
                    세워 보세요.
                  </div>
                  <div>
                    <button>결제 수단 추가</button>
                  </div>
                </S.ContentWrapper>
              </S.MainContainer>
              <S.SubContainer>
                <section>
                  <h2>에어비앤비를 통해서만 결제하세요.</h2>
                  <span>
                    에어비앤비의 서비스 약관, 결제 서비스 약관, 환불 정책 및 기타 안전장치의 보호를
                    받으려면 항상 에어비앤비를 통해 결제와 커뮤니케이션을 진행하시기 바랍니다.자세히
                    알아보기.
                  </span>
                </section>
              </S.SubContainer>
            </S.ContentContainer>
            <div></div>
          </div>
        </S.ContainerWrapper>
      </S.Container>
    </>
  )
}

export default ReservationHistoryPage
