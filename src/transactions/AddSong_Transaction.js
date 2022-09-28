import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with adding songs
 * to a playlist. It will be managed by the transaction stack.
 * 
 * @author Wesley Mui
 *
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.newSong = {
            "title": "Untitled",
            "artist": "Unknown",
            "youTubeId": "dQw4w9WgXcQ"
        };
    }

    doTransaction() {
        this.app.addSong(this.newSong, this.index);
    }
    
    undoTransaction() {
        this.app.deleteSong(this.index);
    }

    toString() {
        return "Add " + this.newSong.title + " to " + this.model.currentList.name;
    }
}