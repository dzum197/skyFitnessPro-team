import * as S from './styles'
import lightLogo from '../../img/light-logo.png'
import stretchDescImage from '../../img/stretch-desc-image.png'
import number1 from '../../img/numbers/number1.png'
import number2 from '../../img/numbers/number2.png'
import number3 from '../../img/numbers/number3.png'
import { FooterDesc } from '../../components/footer-desc-page';

export function YogaDesc() {
    return (
        <S.StretchDesc>
            <S.Container>
                <S.imgBlock>
                    <S.lightLogo src={lightLogo}></S.lightLogo>
                    <S.StretchDescImage src={stretchDescImage}></S.StretchDescImage> 
                </S.imgBlock>
                
                <S.bigText>Подойдет для вас, если: </S.bigText>

                <S.upperBlock>
                    <S.numbersBlock>
                        <S.numberBox>
                            <S.number src={number1}></S.number>
                            <S.numberText>Хотите подтянуть тело, смоделировать мышечный корсет</S.numberText>
                        </S.numberBox>
                        
                        <S.numberBox>
                            <S.number src={number2}></S.number>
                            <S.numberText>Улучшить осанку и координацию</S.numberText>
                        </S.numberBox>
                        
                        <S.numberBox>
                            <S.number src={number3}></S.number>
                            <S.numberText>Улучшить кровообращение и обмен веществ</S.numberText>
                        </S.numberBox>
                    </S.numbersBlock>
                </S.upperBlock>
                
                <S.bigText>Направления: </S.bigText>

                <S.middleTextBlock>
                    <S.ColumnInfoText>
                        <S.ColumnInfoItem>• статический</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• динамический</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• активный</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• пассивный</S.ColumnInfoItem>
                    </S.ColumnInfoText>
                </S.middleTextBlock>
                    
                <S.nextMiddleTextBlock>
                    Стретчинг (или stretching) – это система упражнений, целью которых является разогрев и растяжка мышц и связок. 
                    При этом стретчинг – не просто комплекс упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса, 
                    которое может использоваться как в комплексе с другими направлениями, так и самостоятельно.
                </S.nextMiddleTextBlock>
                
                <FooterDesc/>

            </S.Container>
        </S.StretchDesc>
    )
} 