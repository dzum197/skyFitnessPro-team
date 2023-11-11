import * as S from "./styles";
import phoneHand from "../../img/phone-hand.png";

export function FooterDesc() {
  return (
    <S.lastTextBlock>
      <S.TextAndButtonBlock>
        <S.lastText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.lastText>
        <S.lastTextButton>Записаться на тренировку</S.lastTextButton>
      </S.TextAndButtonBlock>
      <S.phoneHand src={phoneHand}></S.phoneHand>
    </S.lastTextBlock>
  );
}
