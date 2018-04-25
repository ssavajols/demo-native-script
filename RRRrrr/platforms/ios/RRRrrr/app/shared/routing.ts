import * as frameModule from 'ui/frame'

export function startingPage () {
  return 'pages/home/home-page'
}

export function goToReservationPage (context) {
  frameModule.topmost().navigate({
    context,
    moduleName: 'pages/reservation/reservation-page',
    transition: {
      name: 'slide'
    } })
}

export function goToAddReservationPage (context) {
  frameModule.topmost().navigate({
    context,
    moduleName: 'pages/reservation/add-reservation-page',
    transition: {
      name: 'slideTop'
    }
  })
}

export function goBack () {
  frameModule.topmost().goBack()
}
