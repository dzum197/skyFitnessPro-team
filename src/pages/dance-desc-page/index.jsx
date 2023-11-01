import * as S from "./styles";
import lightLogo from "../../img/light-logo.png";
import dancefitnesDescImage from "../../img/dancefitnesDescImage.png";
import number1 from "../../img/numbers/number1.png";
import number2 from "../../img/numbers/number2.png";
import number3 from "../../img/numbers/number3.png";
import { FooterDesc } from '../../components/footer-desc-page';

export function DanceDesc() {
  return (
    <S.BodyflexDesc>
      <S.Container>
        <S.imgBlock>
          <S.lightLogo src={lightLogo}></S.lightLogo>
          <S.BodyflexDescImage src={dancefitnesDescImage}></S.BodyflexDescImage>
        </S.imgBlock>
        <S.upperBlock>
          <S.bigText>Подойдет для вас, если: </S.bigText>
          <S.numbersBlock>
            <S.numberBox>
              <S.number src={number1}></S.number>
              <S.numberText>
              Хотите укрепить мышцы, но тренировки в тренажерном зале для вас скучные и однообразные.
              </S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number2}></S.number>
              <S.numberText>Хотите сбросить лишний вес, но нет желания мучать себя диетами.</S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number3}></S.number>
              <S.numberText>Любите танцы и хотите совместить приятное с полезным.</S.numberText>
            </S.numberBox>
          </S.numbersBlock>
        </S.upperBlock>

        <S.middleTextBlock>
          <S.bigText>Направления: </S.bigText>

          <S.ColumnInfoText>
            <S.ColumnInfoItem>• Зумба</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Dance-mix</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Caribbean-mix</S.ColumnInfoItem>
          </S.ColumnInfoText>
        </S.middleTextBlock>

        <S.nextMiddleTextBlock>
        Фитнес и танцы – что между ними общего? А то, что они могут великолепно сочетаться и оказывать просто восхитительный эффект на ваше тело! Объединение хореографии и аэробики – это необычно и интересно, именно так родился танцевальный фитнес, которым вы теперь можете заниматься дома. Достичь отличной формы и при этом получить удовольствие вам поможет видео для похудения, которое мы представляем на этой странице – делайте упражнения, танцуйте и чувствуйте, как ваше тело меняется в лучшую сторону!
        </S.nextMiddleTextBlock>

        <FooterDesc/>

      </S.Container>
    </S.BodyflexDesc>
  );
}
