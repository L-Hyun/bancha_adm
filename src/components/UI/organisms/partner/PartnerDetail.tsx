import React, { useState } from 'react'
import styled from 'styled-components'
import FieldNameWithColor from '../../atoms/field/FieldNameWithColor'
import TableTitle from '../../atoms/field/TableTitle'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRowWithColorLabel from '../../molecules/field/FieldRowWithColorLabel'
import FieldRowWithColorLabelAndBooleanButton from '../../molecules/field/FieldRowWithColorLabelAndBooleanButton'
import FieldTextWithBooleanButton from '../../molecules/field/FieldTextWithBooleanButton'

type Props = {
  partnerId: string
}

const PartnerDetail = (props: Props) => {
  const [push, setPush] = useState(true);
  const [after9, setAfter9] = useState(true)
  const [sendSms, setSendSms] = useState(true)
  const [sendEmail, setSendEmail] = useState(false)
  const [authPhone, setAuthPhone] = useState(true)
  const [authEmail, setAuthEmail] = useState(true)

  return (
    <>
      <TableTitle nickname={"파트너"} />
      <DetailWrapper>
        <FullWidthRow>
          <FieldRowWithColorLabel name='회원번호' text={props.partnerId} width={'33%'} />
          <FlexDoubleRow>
            <FieldNameWithColor name='알람동의' />
              <FlexCol>
                <FieldRow>
                  <FieldTextWithBooleanButton title={"앱 푸시 알림"} active={push} text={push ? "동의" : "미동의"} onClick={setPush} width={"100%"}/>
                  <FieldTextWithBooleanButton title={"9시 이후 푸시 알림"} active={after9} text={after9 ? "동의" : "미동의"} onClick={setAfter9} width={"100%"}/>
                </FieldRow>
                <FieldRow>
                  <FieldTextWithBooleanButton title={"SMS 발송"} active={sendSms} text={sendSms ? "동의" : "미동의"} onClick={setSendSms} width={"100%"}/>
                  <FieldTextWithBooleanButton title={"이메일 발송"} active={sendEmail} text={sendEmail ? "동의" : "미동의"} onClick={setSendEmail} width={"100%"}/>
                </FieldRow>
              </FlexCol>
          </FlexDoubleRow>
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"아이디"} text={"ididid"} width={"33%"} />
          <FieldRowWithColorLabel name={"닉네임"} text={"닉네임"} width={"33%"} />
          <FieldRowWithColorLabel name={"이름"} text={"홍길동"} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabelAndBooleanButton active={authPhone} name={"연락처"} button={authPhone ? "인증완료" : "미인증"} text={"010-1234-5678"} width={"33%"} onClick={setAuthPhone}/>
          <FieldRowWithColorLabelAndBooleanButton active={authEmail} name={"이메일"} button={authPhone ? "인증완료" : "미인증"} text={"admin@makerence.com"} width={"33%"} onClick={setAuthEmail}/>
          <FieldRowWithColorLabel name={"주소"} text={"세종 등"} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"사업자등록번호"} text={"2022123001"} width={"33%"} />
          <FieldRowWithColorLabel name={"계좌"} text={"하나은행 915-910007-51105"} width={"33%"} />
          <FieldRowWithColorLabel name={"수수료"} text={"10%"} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"상품"} text={"4"} width={"33%"} />
          <FieldRowWithColorLabel name={"판매"} text={"3"} width={"33%"} />
          <FieldRowWithColorLabel name={"리뷰"} text={"2"} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"가입일"} text={"2022-12-30"} width={"33%"} />
          <Dummy />
        </FullWidthRow>
      </DetailWrapper>
    </>
  )
}

const FullWidthRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const FlexDoubleRow = styled.div`
  display: flex;
  align-items: center;
  width: 66%;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
  width: 80%;
`

const FieldRow = styled.div`
  display: flex;
  gap: 10%;
  justify-content: space-between;
`

const Dummy = styled.div`
  width: 66%;
`

export default PartnerDetail