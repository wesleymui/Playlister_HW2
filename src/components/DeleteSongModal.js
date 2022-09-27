import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { songKeyPair, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let title = "";
        let artist = "";
        if(songKeyPair) {
            title = songKeyPair.title;
            artist = songKeyPair.artist;
        }
        return (
            <div 
                class="modal" 
                id="remove-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-remove-song-root'>
                        <div class="modal-north">
                            Remove song?
                        </div>                
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to remove <span id="remove-song-span">{title} by {artist}</span> from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="remove-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="remove-song-cancel-button" 
                                class="modal-button"
                                onClick={hideDeleteSongModalCallback} 
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}