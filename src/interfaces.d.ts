interface Task {
  text: string;
  time: Timer;
  id: number;
}

interface Timer {
  timePeriods: TimePeriod[];
  sum: number;
}

interface TimePeriod {
  from: Date;
  to?: Date;
  seconds?: number;
}
