// eslint-disable-next-line import/no-unresolved
import { MenuEntry } from 'uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://seaswap.trade/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
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
    icon: 'FarmIcon',
    href: 'http://seaswap.trade/farms',
  },
  {
    label: 'Shark Pools',
    icon: 'PoolIcon',
    href: 'http://seaswap.trade/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
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
