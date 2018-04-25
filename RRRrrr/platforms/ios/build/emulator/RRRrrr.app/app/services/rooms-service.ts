import { IRoomInfo } from './../shared/interface'

export class RoomService {

  public useMockData = true

  public fetchRooms (): Promise<IRoomInfo[]> {
    return this.useMockData ? this.fetchRoomsViaJSON() : this.fetchRoomsViaHTTP()
  }

  private fetchRoomsViaJSON (): Promise<IRoomInfo[]> {
    return new Promise((resolve) => {
      resolve(require('~/mocks/rooms.json'))
    })
  }

  private fetchRoomsViaHTTP (): Promise<IRoomInfo[]> {
    return new Promise((resolve) => {
      resolve([])
    })
  }

}
