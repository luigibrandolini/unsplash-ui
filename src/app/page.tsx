'use client'

import { Provider } from 'react-redux'
import { Picture } from './model/Picture';
import { store } from '@/lib/store';
import Home from './home';

export default function Page({
  pics,
  children
}: {
  pics: Picture[];
  children: React.ReactNode;
}) {

  return <Provider store={store}><Home  /></Provider>
}


