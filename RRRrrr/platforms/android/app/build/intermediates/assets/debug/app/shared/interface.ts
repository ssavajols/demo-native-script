export interface IRoomInfo {
  id: number
  label: string
  places: number
}

export interface IReservation {
  id: number
  roomId: number
  label: string
  description: string
  dateStart: Date
  dateEnd: Date
}
