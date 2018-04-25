import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures'
import { NavigatedData, Page } from 'tns-core-modules/ui/page/page'
import { TextField } from 'tns-core-modules/ui/text-field'
import { TextView } from 'tns-core-modules/ui/text-view'
import { TimePicker } from 'tns-core-modules/ui/time-picker'
import * as view from 'ui/core/view'
import { goBack } from '~/shared/routing'

let model
let page

export function onNavigatingTo (args: NavigatedData) {
  page = args.object as Page

  model = args.context

  page.bindingContext = args.context
}

export function onSave (args: GestureEventData) {
  const label = view.getViewById(page, 'label') as TextField
  const description = view.getViewById(page, 'description') as TextView
  const dateDebut = view.getViewById(page, 'dateDebut') as TimePicker
  const dateFin = view.getViewById(page, 'dateFin') as TimePicker

  const dateStart = new Date()
  const dateEnd = new Date()

  dateStart.setHours(dateDebut.hour)
  dateStart.setMinutes(dateDebut.minute)

  dateEnd.setHours(dateFin.hour)
  dateEnd.setMinutes(dateFin.minute)

  model.saveReservation({
    dateEnd: dateStart,
    dateStart: dateEnd,
    description: description.text,
    id: null,
    label: label.text,
    roomId: model.roomId
  }).then(() => goBack())

}
