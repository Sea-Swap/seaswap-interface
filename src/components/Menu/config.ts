// eslint-disable-next-line import/no-unresolved
import { MenuEntry } from 'uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: '/images/menu/home.png',
    href: 'http://seaswap.trade/',
  },
  {
    label: 'Trade',
    icon: '/images/menu/trade.png',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Salmon Farms',
    icon: '/images/menu/farm.png',
    href: 'http://seaswap.trade/farms',
  },
  {
    label: 'Shark Pools',
    icon: '/images/menu/pools.png',
    href: 'http://seaswap.trade/pools',
  },
  {
    label: 'Info',
    icon: '/images/menu/info.png',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Sea-Swap',
        target: "_blank"
      },
      {
        label: 'WhitePaper',
        href: 'https://seaswap.gitbook.io/sea-swap/',
        target: "_blank"
      },
    ],
  },
]

export default config
