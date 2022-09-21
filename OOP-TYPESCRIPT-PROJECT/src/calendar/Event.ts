import { VIPRoom } from "../Room/diningRoom/VIPRoom";
import { Room } from "../Room/Room";
export  class Event {
  constructor(
    protected start: Date,
    protected end: Date,
  ){};

  
  hasEvent( other: Event): boolean {
    let result = false;
    if(this.start.getTime() < other.start.getTime()  && this.end.getTime() > other.end.getTime()){
      result = true;
    }
    return result;
  }

}
