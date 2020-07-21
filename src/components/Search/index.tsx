import React from 'react';
import './search.scss';
import { fetchGitHubRepo } from '../../api';

/*
 * onSearchStart - method that accepts a search keyword (string)
 * updateLoadingState - method that changes loading state (boolean)
 */
function Search(props: any) {
  const [text, updateText] = React.useState('');

  async function fetchItems(text: any) {
    props.updateLoadingState(true);

    const result = await fetchGitHubRepo(text);
    props.onSearchResults && props.onSearchResults(result);
    props.updateLoadingState(false);
  }

  return (
    <div className="searchContainer">
      <input
        value={text}
        placeholder="Github repository name"
        onChange={({ target: { value } }) => updateText(value)}
        type="text"
      />

      <button onClick={() => fetchItems(text)}>search</button>
    </div>
  );
}

export default Search;
