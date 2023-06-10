import React, { useState } from 'react';
import PropTypes from "prop-types";
import TrackPickerDisplay from "./TrackPickerDisplay.js";
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';
import PopupDialog from './PopupDialog.js';
import config from "./../config.json";

export const TrackPicker = ({
    tracks, // expects a trackList, same as trackListDisplay
    availableTracks,
    availableColors,
    onChange,
}) => {
    // based off of https://react-popup.elazizi.com/controlled-popup/#using-open-prop
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return(
      <div>
        
        <Button aria-label="TrackPicker" data-testid={"TrackPickerButton"} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faList} /></Button>
        {
          // Need to set width to null because the default fixed width is too small for the track lits items.
        }
        <PopupDialog open={open} close={close} closeOnDocumentClick={false} width={null} testID="TrackPicker">
          <TrackPickerDisplay
              tracks={tracks}
              availableTracks={availableTracks}
              availableColors={availableColors}
              onChange={onChange}
          />
        </PopupDialog>
      </div>
    )
}

TrackPicker.propTypes = {
    tracks: PropTypes.object.isRequired,
    availableTracks: PropTypes.array.isRequired,
    availableColors: PropTypes.array,
    onChange: PropTypes.func
}

TrackPicker.defaultProps = {
    tracks: {1: config.defaultTrackProps},
    availableColors: [],
    onChange: () => {}
}


export default TrackPicker;
