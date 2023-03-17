import React from 'react'
import Header from '@/components/Common/Header/Header'

const AccountPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div>
          <section>
            <div>
              <nav>
                <ul>
                  <li>계정</li>
                  <li>결제 및 대금 수령</li>
                </ul>
              </nav>
              <div>결제 및 대금 수령</div>
            </div>
            <div>
              <button>결제</button>
              <button>대금수령</button>
            </div>
            <div>
              <div>
                <div>
                  <section>결제 내역</section>
                  <div>모든 결제 및 환불 내역을 확인하세요.</div>
                  <div>
                    <button>결제 관리하기</button>
                  </div>
                </div>
                <div>
                  <section>결제 수단</section>
                  <div>호텔비앤비의 안전한 결제 시스템을 이용해 결제 수단을 추가하고 다음 여행 계획을 세워 보세요.</div>
                  <div>
                    <button>결제 수단 추가</button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default AccountPage
