import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures'
import { NavigatedData, Page } from 'tns-core-modules/ui/page/page'
import { goToAddReservationPage } from '~/shared/routing'
import { ReservationViewModel } from './reservation-view-model'

let model

export function onNavigatingTo (args: NavigatedData) {
  const page = args.object as Page

  model = new ReservationViewModel(args.context)

  page.bindingContext = model
}

export function onGoToAddReservationPage (args: GestureEventData) {
  goToAddReservationPage(model)
}
