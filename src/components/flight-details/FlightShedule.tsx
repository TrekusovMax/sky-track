export function FlightShedule() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card py-mini-element px-mini-element flex items-center justify-between">
          <p className="text-muted-foreground">Sheduled</p>
          <p>08:15</p>
        </div>
        <div className="bg-card py-mini-element px-mini-element flex items-center justify-between">
          <p className="text-muted-foreground">Actual</p>
          <p>08:24</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card py-mini-element rounded-bl-xl px-mini-element flex items-center justify-between">
          <p className="text-muted-foreground">Sheduled</p>
          <p>08:24</p>
        </div>
        <div className="bg-card py-mini-element rounded-br-xl px-mini-element flex items-center justify-between">
          <p className="text-muted-foreground">Estimated</p>
          <p>13:23</p>
        </div>
      </div>
    </div>
  )
}
