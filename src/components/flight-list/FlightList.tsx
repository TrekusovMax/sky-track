import { FlightCart } from './FlightCart'
import { FLIGHTS } from './flights.data'

export function FlightList() {
  return (
    <div className="w-sm space-y-4">
      {FLIGHTS.map((flight) => (
        <FlightCart key={flight.id} flight={flight} />
      ))}
    </div>
  )
}
