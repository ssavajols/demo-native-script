import { Observable } from 'data/observable'
import { ReservationService } from '~/services/reservation-service'
import { IReservation, IRoomInfo } from './../../shared/interface'

export class ReservationViewModel extends Observable {

  private _reservation: IReservation[] = []
  private _room: IRoomInfo

  private service = new ReservationService()

  constructor (context) {
    super()

    this._room = context

    this.init()
  }

  public init () {
    this.service.fetchReservation()
      .then((reservations) => this.addReservations(reservations))
  }

  public addReservations (reservations: IReservation[], clear = true) {

    if (clear) {
      this.clear()
    }

    reservations.forEach((reservation: IReservation) => {
      if (reservation.roomId === this._room.id) {
        this.addReservation(reservation)
      }
    })
  }

  public addReservation (reservation: IReservation) {
    this._reservation = [
      ...this._reservation,
      reservation
    ]

    this.notifyPropertyChange('reservations', this._reservation)
  }

  public clear () {
    this._reservation.length = 0

    this.notifyPropertyChange('reservations', this._reservation)
  }

  public saveReservation (reservation: IReservation) {
    return this.service.saveReservation(reservation)
  }

  get roomId () {
    return this._room.id
  }

  get roomName () {
    return this._room.label
  }

  get roomPlaces () {
    return this._room.places
  }

  get reservations () {
    return this._reservation
  }
}
