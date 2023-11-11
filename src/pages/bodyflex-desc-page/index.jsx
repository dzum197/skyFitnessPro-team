import * as S from "./styles";
import lightLogo from "../../img/light-logo.png";
import bodyflexDescImage from "../../img/bodyflexDescImage.png";
import number1 from "../../img/numbers/number1.png";
import number2 from "../../img/numbers/number2.png";
import number3 from "../../img/numbers/number3.png";
import { FooterDesc } from '../../components/footer-desc-page';

export function BodyflexDesc() {
  return (
    <S.BodyflexDesc>
      <S.Container>
        <S.imgBlock>
          <S.lightLogo src={lightLogo}></S.lightLogo>
          <S.BodyflexDescImage src={bodyflexDescImage}></S.BodyflexDescImage>
        </S.imgBlock>

        <S.upperBlock>
          <S.bigText>Подойдет для вас, если: </S.bigText>
          <S.numbersBlock>
            <S.numberBox>
              <S.number src={number1}></S.number>
              <S.numberText>
                Хотите укрепить легкие и снизить вероятность заболеваний
                дыхательной системы.
              </S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number2}></S.number>
              <S.numberText>Улучшить пищеварение.</S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number3}></S.number>
              <S.numberText>Ускорить метаболизм.</S.numberText>
            </S.numberBox>
          </S.numbersBlock>
        </S.upperBlock>

        <S.middleTextBlock>
          <S.bigText>Направления: </S.bigText>

          <S.ColumnInfoText>
            <S.ColumnInfoItem>• базовый</S.ColumnInfoItem>
            <S.ColumnInfoItem>• продвинутый</S.ColumnInfoItem>
          </S.ColumnInfoText>
        </S.middleTextBlock>

        <S.nextMiddleTextBlock>
        Весь смысл бодифлекса сводится к правильному дыханию, благодаря которому упражнения на растяжку и укрепление мышц приобретают свою эффективность. При выдыхании воздуха и задержке дыхания организм на короткое время испытывает кислородное голодание, в крови накапливается углекислый газ, что приводит к запуску некоторых физиологических процессов, типичных для ситуации «бей или беги». То есть, организм приходит в состояние повышенной готовности и способен выполнять быстрые и энергичные действия.
        </S.nextMiddleTextBlock>

        <FooterDesc/>

      </S.Container>
    </S.BodyflexDesc>
  );
}
