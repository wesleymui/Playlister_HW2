import React, { Component } from "react";

export default class EditSongModal extends Component {


    render() {
        const { editSongCallback, hideEditSongModalCallback } = this.props;

        return (
            <div
                class="modal"
                id="edit-song-modal"
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-list-root'>
                        <div class="modal-north">
                            Edit song
                        </div>                
                        <div class="modal-center">
                                <span class="edit-list-text">Title: </span><input type="text" id="title" name="title"/>
                                <span class="edit-list-text">Artist: </span><input type="text" id="artist" name="artist"/>
                                <span class="edit-list-text">YouTube Id: </span><input type="text" id="youtubeid" name="youtubeid"/>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button"
                                onClick={editSongCallback} 
                                value='Confirm' />
                            <input type="button"
                                id="edit-song-cancel-button" 
                                class="modal-button"
                                onClick={hideEditSongModalCallback} 
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}