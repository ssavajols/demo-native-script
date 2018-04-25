import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures'
import { EventData, Page } from 'tns-core-modules/ui/page/page'
import { goToReservationPage } from '~/shared/routing'
import { HomeViewModel } from './home-view-model'

export function onNavigatingTo (args: EventData) {
  const page: Page = args.object as Page
  const model = new HomeViewModel()
  page.bindingContext = model
}

export function onTap (args: GestureEventData) {
  goToReservationPage(args.view.bindingContext)
}
