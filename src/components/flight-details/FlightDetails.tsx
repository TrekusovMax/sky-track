import { useSearchParams } from 'react-router'
import { QUERY_PARAM_FLIGHT } from '../flight-list/flights.constants'
import { FLIGHTS } from '../flight-list/flights.data'
import { useMemo } from 'react'
import { FlightImage } from './FlightImage'
import { FlightHeader } from './FlightHeader'
import { FlightInformation } from './FlightInformation'
import { FlightActions } from './FlightActions'
import { FlightRoute } from './FlightRoute'
import { FlightStatus } from './FlightStatus'
import { FlightShedule } from './FlightShedule'

export function FlightDetails() {
  const [searchParams] = useSearchParams()
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)
  const flight = useMemo(
    () => FLIGHTS.find((f) => f.id === selectedFlight),
    [selectedFlight],
  )
  if (!flight) return null
  return (
    <aside
      className="absolute w-sm top-7 right-7  rounded-xl bg-[#101010] overflow-hidden"
      style={{ height: 'calc(100% - 56px)' }}
    >
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />

      <FlightInformation flight={flight} />
      <FlightRoute flight={flight} />
      <FlightStatus flight={flight} />
      {/* <FlightShedule flight={flight} /> */}

      <FlightActions />
    </aside>
  )
}
