import React, { useContext } from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      context.addMustWatch(movie)
    }
  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;