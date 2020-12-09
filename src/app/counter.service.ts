import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCount: number = 0;
    inactiveToActiveCount: number = 0;

    coutnActiveToInactive() {
        this.activeToInactiveCount ++;
        console.log(`Active to Inactive ${this.activeToInactiveCount}`);
    }

    countInactiveToActive() {
        this.inactiveToActiveCount++;
        console.log(`Inactive to Active ${this.inactiveToActiveCount}`);
    }
}