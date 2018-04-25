import * as frameModule from 'ui/frame'

export function startingPage () {
  return 'pages/home/home-page'
}

export function goToReservationPage (context) {
  frameModule.topmost().navigate({ moduleName: 'pages/reservation/reservation-page', context })
}

export function goToAddReservationPage (context) {
  frameModule.topmost().navigate({ moduleName: 'pages/reservation/add-reservation-page', context })
}

export function goBack () {
  frameModule.topmost().goBack()
}
