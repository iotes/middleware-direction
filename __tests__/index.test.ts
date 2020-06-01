
import {
  createIotes,
  createDeviceDispatchable,
  Store,
  Iotes,
  Strategy,
} from '@iotes/core'

import {
  StrategyConfig,
  DeviceTypes,
  createTestStrategy,
  config,
  wait,
} from '@iotes/strategy-test'

import { direction } from '../src'

// MODULE
let remote: Store
let strategy: Strategy<StrategyConfig, DeviceTypes>
let iotes: Iotes

describe('Direction middleware', () => {
  // SET UP
  beforeEach(() => {
    [remote, strategy] = createTestStrategy()
    iotes = createIotes({
      topology: config.topology,
      strategy,
    })
  })

  afterEach(() => {
    iotes = null
  })

  test('Only receives in one direction', async () => {
    let resultOut: any = null
    let resultIn: any = null

    const fnIn = (_) => { resultIn = 'IN' }

    const fnOut = (_) => { resultOut = 'OUT' }

    iotes.deviceSubscribe(
      fnOut,
      undefined,
      [direction('O')],
    )

    iotes.deviceSubscribe(
      fnIn,
      undefined,
      [direction('I')],
    )

    await wait()

    iotes.deviceDispatch(
      createDeviceDispatchable('DEVICE_ONE', 'OUT', { source: 'APP' }),
    )

    expect(resultIn).toEqual(null)
    expect(resultOut).toEqual('OUT')

    remote.dispatch(
      createDeviceDispatchable('DEVICE_ONE', 'IN', { source: 'REMOTE' }),
    )

    expect(resultIn).toEqual('IN')
    expect(resultOut).toEqual('OUT')
  })
})
