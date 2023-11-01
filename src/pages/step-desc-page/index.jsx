import * as S from "./styles";
import lightLogo from "../../img/light-logo.png";
import stepDescImage from "../../img/stepDescImage.png";
import number1 from "../../img/numbers/number1.png";
import number2 from "../../img/numbers/number2.png";
import number3 from "../../img/numbers/number3.png";
import { FooterDesc } from '../../components/footer-desc-page';

export function StepDesc() {
  return (
    <S.BodyflexDesc>
      <S.Container>
        <S.imgBlock>
          <S.lightLogo src={lightLogo}></S.lightLogo>
          <S.BodyflexDescImage src={stepDescImage}></S.BodyflexDescImage>
        </S.imgBlock>

        <S.upperBlock>
          <S.bigText>Подойдет для вас, если: </S.bigText>
          <S.numbersBlock>
            <S.numberBox>
              <S.number src={number1}></S.number>
              <S.numberText>
              Хотите укрепить дыхательную и сердечно-сосудистой системы.
              </S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number2}></S.number>
              <S.numberText>Быстрый сбросить лишние килограммы.</S.numberText>
            </S.numberBox>

            <S.numberBox>
              <S.number src={number3}></S.number>
              <S.numberText>Улучшить настроение, повысить жизненный тонус.</S.numberText>
            </S.numberBox>
          </S.numbersBlock>
        </S.upperBlock>

        <S.middleTextBlock>
          <S.bigText>Направления: </S.bigText>

          <S.ColumnInfoText>
            <S.ColumnInfoItem>• Для начинающих</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Для похудения</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Для детей</S.ColumnInfoItem>
          </S.ColumnInfoText>
        </S.middleTextBlock>

        <S.nextMiddleTextBlock>
        Занятия степ-аэробикой состоят из комплексов в виде различного сочетания шагов, выполняемые под музыку с довольно высоким темпом. Каждое занятие длится от 30 до 50 минут в достаточно высоком темпе без остановок на отдых – для передышки используются переходы на простые шаги и наиболее простые упражнения. Такой режим тренировок приводит к эффективному сжиганию калорий, укреплению суставов и общему улучшению состояния здоровья, что и стало основой высокой популярности нового направления.
        </S.nextMiddleTextBlock>

        <FooterDesc/>

      </S.Container>
    </S.BodyflexDesc>
  );
}
