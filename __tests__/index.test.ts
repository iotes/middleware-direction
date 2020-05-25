// Dual dependency on @iotes-strategy-test
// uncomment when strategy test is up and running

/*
import {
  createIotes,
  createDeviceDispatchable,
  TopologyMap,
  Store,
  Iotes,
} from '@iotes/core'

// import { createLocalStoreAndStrategy } from '@iotes/strategy-test'
import { direction } from '../src'

// Test data

type DeviceTypes = 'RFID_READER' | 'ROTARY_ENCODER'

const testTopologoy: TopologyMap<{}, DeviceTypes> = {
  client: { name: 'test' },
  hosts: [{ name: 'testapp/0', host: 'localhost', port: '8888' }],
  devices: [
    {
      hostName: 'testapp/0',
      type: 'RFID_READER',
      name: 'READER/1',
      channel: 1,
    },
    {
      hostName: 'testapp/0',
      type: 'ROTARY_ENCODER',
      name: 'ENCODER/1',
      channel: 2,
    },
  ],
}

// Tests
let localModule: Iotes
let createLocalStrategy: any
let localStore: Store

describe('Direction middleware', () => {
  beforeEach(async () => {
    [localStore, createLocalStrategy] = createLocalStoreAndStrategy()
    localModule = createIotes({
      topology: testTopologoy,
      strategy: createLocalStrategy,
    })
  })

  test('Only receives in one direction', async () => {
    let resultIn: any = null
    let resultOut: any = null

    localModule.deviceSubscribe(
      (_) => {
        resultOut = 'OUT'
        resultIn = null
      },
      undefined,
      [direction('O')],
    )

    localModule.deviceSubscribe(
      (_) => {
        resultIn = 'IN'
      },
      undefined,
      [direction('I')],
    )

    localModule.deviceDispatch(
      createDeviceDispatchable('NONE', 'RFID_READER', { signal: 'test' }),
    )

    expect(resultIn).toEqual(null)
    expect(resultOut).toEqual('OUT')

    // Wait for something to come in
    await new Promise((res, rej) => {
      setTimeout(() => {
        if (resultIn && resultOut) {
          res()
        }
        rej()
      }, 100)
    })

    expect(resultIn).toEqual('IN')
    expect(resultOut).toEqual('OUT')
  })
})
*/
