import {
  Advantage,
  AdvantagesContainer,
  IntroContainer,
  LeftContent,
  TextContainer,
} from './styles'

import CoffeeMain from '../../../../assets/coffee-main.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

const benefits = [
  {
    content: 'Compra simples e segura',
    icon: <ShoppingCart weight="fill" color="white" />,
  },
  {
    content: 'Embalagem mantém o café intacto',
    icon: <Package weight="fill" color="white" />,
  },
  {
    content: 'Entrega rápida e rastreada',
    icon: <Timer weight="fill" color="white" />,
  },
  {
    content: 'O café chega fresquinho até você',
    icon: <Coffee weight="fill" color="white" />,
  },
]

export function Intro() {
  return (
    <IntroContainer>
      <LeftContent>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextContainer>

        <AdvantagesContainer>
          {benefits.map((benefit) => {
            return (
              <Advantage key={benefit.content}>
                <div>{benefit.icon}</div>
                <p>{benefit.content}</p>
              </Advantage>
            )
          })}
        </AdvantagesContainer>
      </LeftContent>

      <img src={CoffeeMain} alt="Café" />
    </IntroContainer>
  )
}
