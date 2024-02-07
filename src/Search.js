import { useState } from "react";

import {TextField, Button} from "@mui/material";

import "./Search.css"

/** Logical component for searching images based.
 * Props:
 * - searchImages: Function defining logic for searching images. Called in parent.
 * 
 * State: 
 * - searchTerm: String containing search term.
 * 
 * App -> Search
 */

export default function Search({ searchImages }) {

  const [searchTerm, setSearchTerm] = useState("");

  /** Update local state w/curr state of input element */
  function handleChange(evt) {
      setSearchTerm(evt.target.value);
  };

  /** Handle searching images on submit */
  async function handleSubmit(evt) {
      evt.preventDefault();
      const trimmedFormData = searchTerm.trim();
      await searchImages(trimmedFormData);
      setSearchTerm(trimmedFormData);
  }

  return (
    <form 
      className="search-bar"
      onSubmit={handleSubmit} >
        <TextField 
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          />
        <Button 
          className="Button"
          variant="contained" 
          type="submit"
          sx={{
            margin: "1%",
            backgroundColor: "black",
          }}>
            Search
        </Button>
    </form>
);
}