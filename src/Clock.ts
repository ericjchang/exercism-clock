const MIN_IN_DAY = 1440; // 24 hour * 60 minute

export class Clock {
  private hours: number;
  private minutes: number;

  constructor(hour: number, minute: number = 0) {
    // convert hour & minute to minutes total
    let totalMinutes = (hour * 60 + minute) % MIN_IN_DAY;

    // handle negative input hour & minute (roll over)
    if (totalMinutes < 0) {
      totalMinutes += MIN_IN_DAY;
    }

    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }

  public toString(): string {
    const hour = this.hours.toString().padStart(2, '0');
    const minute = this.minutes.toString().padStart(2, '0');
    return `${hour}:${minute}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hours === other.hours && this.minutes === other.minutes;
  }
}
