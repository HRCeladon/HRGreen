import React, { useState } from 'react';
import { fetchPlace } from './formValidation.js';

const AutoCompleteInput = ({ passFrom, passTo }) => {
  // From input states
  const [from, setFrom] = useState('');
  const [autocompleteFrom, setAutocompleteFrom] = useState([]);
  const [autocompleteFromErr, setAutocompleteFromErr] = useState("");
  // To input states
  const [to, setTo] = useState('')
  const [autocompleteTo, setAutocompleteTo] = useState([]);
  const [autocompleteToErr, setAutocompleteToErr] = useState("");

  // Auto complete for From input field
  const handleFromCityChange = async (e) => {
    setFrom(e.target.value)
    passFrom(e.target.value) // Pass input up to planner
    if (!from) return;

    const res = await fetchPlace(from);
    !autocompleteFrom.includes(e.target.value) && res.features &&
      setAutocompleteFrom(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteFromErr(res.error) : setAutocompleteFromErr("");
  };
  // Auto complete for To input field
  const handleToCityChange = async (e) => {
    setTo(e.target.value)
    passTo(e.target.value) // Pass input up to planner
    if (!to) return;

    const res = await fetchPlace(to);
    !autocompleteTo.includes(e.target.value) && res.features &&
      setAutocompleteTo(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteToErr(res.error) : setAutocompleteToErr("");
  };

  return (
    <div className="placesAutocomplete">
      {/* From input field */}
      <div className="from-autocomplete">
        <label htmlFor="from" className="from-label">From</label><br />
        {autocompleteFromErr && (
          <div className="error">{autocompleteFromErr}</div>)}
        <input
          list="from-places"
          type="text"
          id="from"
          name="city"
          onChange={handleFromCityChange}
          value={from}
          required
          pattern={autocompleteFrom.join("|")}
          autoComplete="off"
        />
        {/* Auto-complete list */}
        <datalist id="from-places">
          {autocompleteFrom.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </datalist>
      </div>
      {/* To input field */}
      <div className="to-autocomplete">
        <label htmlFor="to" className="to-label">To</label><br />
        {autocompleteToErr && (
          <div className="error">{autocompleteToErr}</div>)}
        <input
          list="to-places"
          type="text"
          id="to"
          name="city"
          onChange={handleToCityChange}
          value={to}
          required
          pattern={autocompleteTo.join("|")}
          autoComplete="off"
        />
        {/* Auto-complete list */}
        <datalist id="to-places">
          {autocompleteTo.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default AutoCompleteInput;