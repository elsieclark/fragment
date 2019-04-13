import { h } from 'preact';
import style from './styles.scss';

export interface Props {
  page: string,
}

export default function Header({ page }: Props) {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Other', path: '/other' },
  ];
  return (
    <div className={style.Header}>
      Alpha Beta Gamma
    </div>
  );
}