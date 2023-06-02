import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderComponent, LocationButton, RightHeaderContainer } from './styles'

import Logo from '../../../assets/logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={Logo} alt="Logotipo do Coffee Delivery" />

      <RightHeaderContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <button type="button">
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </button>
      </RightHeaderContainer>
    </HeaderComponent>
  )
}
