import { Observable } from 'data/observable'
import { RoomService } from './../../services/rooms-service'
import { IRoomInfo } from './../../shared/interface'

export class HomeViewModel extends Observable {

  private static _rooms: IRoomInfo[] = []

  public service = new RoomService()

  constructor () {
    super()

    this.init()
  }

  public init () {
    this.service.fetchRooms()
      .then((rooms) => this.addRooms(rooms))
  }

  public addRooms (rooms: IRoomInfo[], clear = true) {
    if (clear) {
      this.clear()
    }

    rooms.forEach((room) => this.addRoom(room))
  }

  public addRoom (room: IRoomInfo) {

    HomeViewModel._rooms = [
      ...HomeViewModel._rooms,
      room
    ]

    this.notify({
      eventName: Observable.propertyChangeEvent,
      object: this,
      propertyName: 'rooms',
      value: HomeViewModel._rooms
    })
  }

  public clear () {
    HomeViewModel._rooms.length = 0
  }

  get rooms () {
    return HomeViewModel._rooms
  }

}
