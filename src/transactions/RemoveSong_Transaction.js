import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * RemoveSong_Transaction
 * 
 * This class represents a transaction that works with editing songs
 * in a playlist. It will be managed by the transaction stack.
 * 
 * @author Wesley Mui
 *
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.songIndex = initIndex;
        this.removedSong = initSong;
    }

    doTransaction() {
        this.app.deleteSong(this.songIndex);
    }
    
    undoTransaction() {
        this.app.addSong(this.removedSong, this.songIndex);
    }

    toString() {
        return "Removed song at index " + this.songIndex;
    }
}