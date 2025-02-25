import styled from 'styled-components'

import { Props } from './index'

//condições para valores como color e font-size de acordo com o o pedido
export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
