import * as events from "../index";

class Networker extends events.EventEmitter {
    constructor() {
        super();

        this.emit("mingling");
    }
}