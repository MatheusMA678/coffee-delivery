import {
  Advantage,
  AdvantagesContainer,
  IntroContainer,
  LeftContent,
  TextContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import CoffeeMain from '@/assets/coffee-main.png'

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
          <Advantage iconColor="orange">
            <div>
              <ShoppingCart weight="fill" color="white" />
            </div>
            <p>Compra simples e segura</p>
          </Advantage>

          <Advantage iconColor="black">
            <div>
              <Package weight="fill" color="white" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </Advantage>

          <Advantage iconColor="yellow">
            <div>
              <Timer weight="fill" color="white" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </Advantage>

          <Advantage iconColor="purple">
            <div>
              <Coffee weight="fill" color="white" />
            </div>
            <p>O café chega fresquinho até você</p>
          </Advantage>
        </AdvantagesContainer>
      </LeftContent>

      <img src={CoffeeMain} alt="Café" />
    </IntroContainer>
  )
}
