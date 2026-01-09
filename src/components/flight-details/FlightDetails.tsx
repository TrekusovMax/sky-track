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
    <aside className="absolute w-md top-1/2 right-7 -translate-y-1/2  rounded-xl bg-[#101010] overflow-hidden">
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />

      <div className="p-3.5">
        <FlightRoute flight={flight} />
        <FlightStatus />
        <FlightShedule />

        <FlightInformation flight={flight} />

        <FlightActions
          onRoute={() => {}}
          onFollow={() => {}}
          onShare={() => {}}
          onMore={() => {}}
        />
      </div>
    </aside>
  )
}
