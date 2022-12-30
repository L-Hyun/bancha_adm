import React, { useState } from 'react'
import styled from 'styled-components'
import FieldNameWithColor from '../../atoms/field/FieldNameWithColor'
import TableTitle from '../../atoms/field/TableTitle'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRowWithColorLabel from '../../molecules/field/FieldRowWithColorLabel'
import FieldRowWithColorLabelAndBooleanButton from '../../molecules/field/FieldRowWithColorLabelAndBooleanButton'
import FieldTextWithBooleanButton from '../../molecules/field/FieldTextWithBooleanButton'

type Props = {
  memberId: string
}

const MemberDetail = (props: Props) => {
  const [push, setPush] = useState(true);
  const [after9, setAfter9] = useState(true)
  const [sendSms, setSendSms] = useState(true)
  const [sendEmail, setSendEmail] = useState(false)
  const [authPhone, setAuthPhone] = useState(true)
  const [authEmail, setAuthEmail] = useState(true)

  return (
    <>
      <TableTitle nickname={"닉네임"} />
      <DetailWrapper>
        <FullWidthRow>
          <FieldRowWithColorLabel name='회원번호' text={props.memberId} width={'33%'} />
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
          <FieldRowWithColorLabel name={"가입일"} text={"닉네임"} width={"33%"} />
          <FieldRowWithColorLabelAndBooleanButton active={authPhone} name={"연락처"} button={authPhone ? "인증완료" : "미인증"} text={"010-1234-5678"} width={"33%"} onClick={setAuthPhone}/>
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

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
`

export default MemberDetail