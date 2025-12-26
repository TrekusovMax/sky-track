import type { IFlight } from '../../types/flight.types'

interface Props {
  flight: IFlight
}

export function FlightCart({ flight }: Props) {
  return (
    <div className="bg-neutral-900 rounded-xl p-5">
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center gap-3">
          <img
            src={flight.logo}
            alt={flight.airline}
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span>{flight.airline}</span>
        </div>
        <div>
          <span className="bg-neutral-800 rounded-xl px-2 py-1">
            {flight.aircraftReg}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="space-y-0.5">
          <div>{flight.from.city}</div>
          <div className="font-semibold text-3xl">{flight.from.code}</div>
        </div>
        <div>{/* PROGRESS BAR */}</div>
        <div className="space-y-0.5">
          <div>{flight.to.city}</div>
          <div className="font-semibold text-3xl">{flight.to.code}</div>
        </div>
      </div>
    </div>
  )
}
