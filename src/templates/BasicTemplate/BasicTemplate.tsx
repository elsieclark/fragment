import { h } from 'preact';
import style from './BasicTemplate.less';
import './global.css';

import Header from '../../components/Header/Header.tsx';

export interface Props {
  children?: JSX.Element[]
}

export default function BasicTemplate({ children }: Props) {
  console.log(JSON.stringify(style))
  return (
    <div class={style.BasicTemplate}>
      <Header page='/'/>
      <div class={style.content}>
        {children}
      </div>
    </div>
  )
}