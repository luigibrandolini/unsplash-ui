'use client'

import { Provider } from 'react-redux'
import { Picture } from './model/Picture';
import { store } from '@/lib/state/store';
import Home from './home';

export default function Page() {

  return <Provider store={store}><Home  /></Provider>
}


