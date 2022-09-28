import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with editing songs
 * in a playlist. It will be managed by the transaction stack.
 * 
 * @author Wesley Mui
 * 
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initNewSong, initPrevSong) {
        super();
        this.app = initApp;
        this.songIndex = initIndex;
        this.newSong = initNewSong;
        this.prevSong = initPrevSong;
    }

    doTransaction() {
        this.app.editSong(this.newSong, this.songIndex);
    }
    
    undoTransaction() {
        this.app.editSong(this.prevSong, this.songIndex);
    }

    toString() {
        return "Updated song at index " + this.songIndex;
    }
}