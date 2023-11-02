import * as S from './styles'
import lightLogo from '../../img/light-logo.png'
import yogaDescImage from '../../img/yoga-desc-image.png'
import number1 from '../../img/numbers/number1.png'
import number2 from '../../img/numbers/number2.png'
import number3 from '../../img/numbers/number3.png'
import phoneHand from '../../img/phone-hand.png'

export function YogaDesc() {
    return (
        <S.YogaDesc>
            <S.Container>
                <S.imgBlock>
                    <S.lightLogo src={lightLogo}></S.lightLogo>
                    <S.YogaDescImage src={yogaDescImage}></S.YogaDescImage>
                </S.imgBlock>
                
                <S.bigText>Подойдет для вас, если: </S.bigText>

                <S.upperBlock>
                    <S.numbersBlock>
                        <S.numberBox>
                            <S.number src={number1}></S.number>
                            <S.numberText>Давно хотели попробовать йогу, но не решались начать.</S.numberText>
                        </S.numberBox>
                        
                        <S.numberBox>
                            <S.number src={number2}></S.number>
                            <S.numberText>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</S.numberText>
                        </S.numberBox>
                        
                        <S.numberBox>
                            <S.number src={number3}></S.number>
                            <S.numberText>Ищете активность, полезную для тела и души.</S.numberText>
                        </S.numberBox>
                    </S.numbersBlock>
                </S.upperBlock>
                
                <S.bigText>Направления: </S.bigText>

                <S.middleTextBlock>
                    <S.ColumnInfoText>
                        <S.ColumnInfoItem>• Йога для новичков</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• Классическая йога</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• Йогатерапия</S.ColumnInfoItem>
                    </S.ColumnInfoText>

                    <S.secondColumnInfoText>
                        <S.ColumnInfoItem>• Кундалини-йога</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• Хатха-йога</S.ColumnInfoItem>
                        <S.ColumnInfoItem>• Аштанга-йога</S.ColumnInfoItem>
                    </S.secondColumnInfoText>
                </S.middleTextBlock>
                    
                <S.nextMiddleTextBlock>
                    Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, 
                    тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, 
                    заряжают бодростью и помогают противостоять стрессам.
                </S.nextMiddleTextBlock>

                <S.lastTextBlock>
                    <S.lastText>
                        Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!
                    </S.lastText>

                    <S.lastTextButton>Записаться на тренировку</S.lastTextButton>

                
                    <S.phoneHand src={phoneHand}></S.phoneHand>
                </S.lastTextBlock>
                
            </S.Container>
        </S.YogaDesc>
    )
} 
