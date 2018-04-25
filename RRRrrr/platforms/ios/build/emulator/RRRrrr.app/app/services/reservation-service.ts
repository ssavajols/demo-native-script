import { IReservation } from './../shared/interface'

export class ReservationService {

  public useMockData = true

  public fetchReservation (): Promise<IReservation[]> {
    return this.useMockData ? this.fetchReservationViaJSON() : this.fetchReservationViaHTTP()
  }

  public saveReservation (reservation: IReservation): Promise<IReservation> {
    return this.useMockData ? this.saveReservationViaJSON(reservation) : this.saveReservationViaHTTP(reservation)
  }

  private saveReservationViaJSON (reservation: IReservation): Promise<IReservation> {
    return new Promise((resolve, reject) => {
      const mockedReservations = require('~/mocks/reservation.json')
      mockedReservations.push(reservation)
      resolve(reservation)
    })
  }

  private saveReservationViaHTTP (reservation: IReservation): Promise<IReservation> {
    return new Promise((resolve) => {
      resolve(null)
    })
  }

  private fetchReservationViaJSON (): Promise<IReservation[]> {
    return new Promise((resolve) => {
      resolve(this.processReservations(require('~/mocks/reservation.json')))
    })
  }

  private fetchReservationViaHTTP (): Promise<IReservation[]> {
    return new Promise((resolve) => {
      resolve([])
    })
  }

  private processReservations (reservations: IReservation[]) {
    return reservations.map((reservation: IReservation) => {
      reservation.dateStart = new Date(reservation.dateStart)
      reservation.dateEnd = new Date(reservation.dateEnd)
      return reservation
    })
  }

}
